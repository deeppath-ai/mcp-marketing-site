<div align="center">

# mcp-marketing-site

</div> 

# 🧠 Marketing Master – Landing Page Evaluator

A command-line tool designed for product managers, marketing teams, and SEO engineers. It enables rapid analysis of any landing page’s **structural integrity, conversion potential, and technical performance**. It provides insights into **SEO compliance, layout structure, color contrast, and loading speed**, and automatically suggests modifications and code snippets to help you optimize with ease.

---

## ✨ Key Features

| Module | Description |
|--------|-------------|
| 🔍 SEO Analysis | Checks for `<title>`, `<meta>`, header tags (H1~H6), image `alt` attributes, `viewport`, `robots.txt`, and `sitemap` to ensure proper indexing by search engines. |
| 🧩 Layout Structure Review | Evaluates whether the page follows AIDA structure (Attention, Interest, Desire, Action), and whether key elements like headlines, CTAs, testimonials are missing. |
| 🎨 Color Contrast Check | Follows [WCAG AA](https://www.w3.org/WAI/WCAG21/quickref/) standards to ensure button text and background color contrast is sufficient for readability and accessibility. |
| 🚀 PageSpeed Score | Integrates Google PageSpeed API to fetch performance scores and suggest performance improvements. |
| 📎 Fix Suggestions | Automatically outputs structural optimization advice and recommended HTML snippets. |
| 🧰 CLI Ready | Analyze any URL in one command. Easily extend to batch scan, web service, or CI pipeline integration. |

---

## <div align="center">▶️ Quick Start</div>

### CLI
~~~bash
npx -y mcp-marketing-site
~~~

### MCP Server Configuration

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

---

## <div align="center">💭 Murmurs</div>

This project is for educational and internal use only. Contributions and feedback are welcome.  
For feature customization, web deployment, or enterprise integration, please contact the project maintainer.

<div align="center"><h1>Contact</h1></div>

<img width="380" height="200" src="./doc/dpai.jpg" alt="mcp-marketing-site MCP server" />

## Business Contact Email: [deeppathai@outlook.com](mailto:deeppathai@outlook.com)

---

## 🧠 MCP Access Addresses

- 🌐 [ModelScope MCP Address](https://modelscope.cn/mcp/servers/deeppathai/mcp-marketing-site)  
  For testing and integrating `mcp-marketing-site` directly within the ModelScope platform.

- 🛠️ [Smithery.ai MCP Address](https://smithery.ai/server/@deeppath-ai/mcp-marketing-site)  
  For visual configuration and invocation of the `mcp-marketing-site` service via Smithery.
