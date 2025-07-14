#!/usr/bin/env node
import axios from 'axios';
import fetch from 'node-fetch';
import { URL } from 'url';
import * as cheerio from 'cheerio';

export async function assessPage(url: string) {
  const report = [];
  const fixCode = [];

  try {
    const { data: html } = await axios.get(url);
    const $ = cheerio.load(html);

    

    // Title
    const title = $('title').text();
    if (!title) {
      report.push('❌ 缺少 <title>');
      fixCode.push('<title>你的推广落地页标题</title>');
    } else if (title.length > 60) {
      report.push(`⚠️ <title> 过长 (${title.length} 字符)，建议控制在 50-60 字符`);
    } else {
      report.push(`✅ <title>: ${title}`);
    }

    // Meta description
    const metaDesc = $('meta[name="description"]').attr('content');
    if (!metaDesc) {
      report.push('❌ 缺少 <meta name="description">');
      fixCode.push('<meta name="description" content="简洁描述推广内容，控制在 150 字符内">');
    }

    // Viewport (移动端适配)
    const viewport = $('meta[name="viewport"]').attr('content');
    if (!viewport) {
      report.push('❌ 缺少 <meta name="viewport">，页面可能不支持移动端');
      fixCode.push('<meta name="viewport" content="width=device-width, initial-scale=1.0">');
    } else {
      report.push('✅ 存在 viewport 标签');
    }

    // H1 标签
    const h1 = $('h1');
    if (h1.length === 0) {
      report.push('❌ 页面无 <h1> 主标题，有利于搜索引擎识别内容');
      fixCode.push('<h1>你的推广主标题</h1>');
    } else if (h1.length > 1) {
      report.push(`⚠️ 有 ${h1.length} 个 <h1> 标签，建议只保留一个`);
    }

    // alt 图像标签检查
    let missingAlt = 0;
    $('img').each((i, el) => {
      if (!$(el).attr('alt')) {
        missingAlt++;
      }
    });
    if (missingAlt > 0) {
      report.push(`⚠️ 有 ${missingAlt} 张图片缺少 alt 属性`);
      fixCode.push('<img src="example.jpg" alt="描述图像内容">');
    }

    // Robots.txt & sitemap
    const baseURL = new URL(url).origin;
    try {
      await axios.get(`${baseURL}/robots.txt`);
      report.push(`✅ 存在 robots.txt`);
    } catch {
      report.push(`❌ 不存在 robots.txt`);
      fixCode.push(`# robots.txt 示例\nUser-agent: *\nDisallow:\nSitemap: ${baseURL}/sitemap.xml`);
    }

    try {
      await axios.get(`${baseURL}/sitemap.xml`);
      report.push(`✅ 存在 sitemap.xml`);
    } catch {
      report.push(`❌ 不存在 sitemap.xml`);
    }

    // 输出报告
    console.log(`🔍 分析报告：${url}\n`);
    report.forEach(r => console.log(r));

    // 推荐代码
    if (fixCode.length > 0) {
      console.log(`\n💡 推荐修改代码：\n`);
      fixCode.forEach((line, i) => {
        console.log(`[${i + 1}] ${line}\n`);
      });
    } else {
      console.log('\n✅ 页面基本合规，无需大幅修改');
    }

  } catch (err) {
    // console.log('❌ 获取网页失败：', err.message);
  }
  return {
    "report": report,
    "fixCode": fixCode
  }
}