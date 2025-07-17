<div align="center">

# mcp-marketing-site

</div> 


# 🧠 营销大师，落地页评估

一个面向产品运营、市场推广、SEO优化工程师的命令行工具，帮助你快速评估任意营销落地页的**结构合理性、转化率潜力和技术表现**。分析结果包含**SEO元素检查、页面结构布局分析、色彩对比检测、加载速度评分**，并自动生成修改建议与代码片段，助你一步到位优化页面。

---

## ✨ 功能亮点

| 模块 | 能力描述 |
|------|----------|
| 🔍 SEO 分析 | 检查 `<title>`、`<meta>`、H 标签、图片 `alt`、`viewport`、robots.txt、sitemap 等是否齐全，避免被搜索引擎降权 |
| 🧩 布局结构分析 | 判断页面是否符合 AIDA 转化结构（注意力-兴趣-欲望-行动），是否缺少主标题、CTA 按钮、用户背书等关键内容 |
| 🎨 色彩对比检测 | 使用 [WCAG AA](https://www.w3.org/WAI/WCAG21/quickref/) 标准，检查按钮文字和背景色对比度，提升可读性与可点击率 |
| 🚀 PageSpeed 性能评分 | 自动调用 Google PageSpeed API，获取页面加载性能得分 |
| 📎 修改建议输出 | 自动输出结构优化建议与推荐代码，快速修复问题点 |
| 🧰 CLI 工具化 | 一行命令分析任意 URL，可拓展为批量扫描、Web 服务或 CI 工具 |

---



## <div align="center">▶️Quick Start</div>


## 部署指南

~~~bash
npx -y mcp-marketing-site
~~~

### MCP sever configuration

~~~json
{
    "mcpServers": {
        "mcp-marketing-site": {
            "command": "npx",
            "args": [
                "-y",
                "mcp-marketing-site"
            ]
        }
    }
}
~~~


## 使用示例

帮我评估下 https://www.alibaba.com/ 落地页


## <div align="center">💭Murmurs</div>
本项目仅用于学习，欢迎催更。如需定制功能、部署为 Web 服务、与内部推广平台对接，请联系产品维护者。

<div align="center"><h1>联系方式</h1></div>
  <img width="380" height="200" src="./doc/dpai.jpg" alt="mcp-marketing-site MCP server" />
  
  ## 商务合作联系邮件：  [deeppathai@outlook.com](mailto:deeppathai@outlook.com)

</div>


## 🧠 MCP 接入地址

- 🌐 [魔搭 ModelScope MCP 地址](https://modelscope.cn/mcp/servers/deeppathai/mcp-marketing-site)  
  适用于在 ModelScope 平台上调试和集成 `mcp-marketing-site` 服务。

- 🛠️ [Smithery.ai MCP 地址](https://smithery.ai/server/@deeppath-ai/mcp-marketing-site)  
  可用于在 Smithery 平台中以可视化方式配置和调用 `mcp-marketing-site` 服务。

