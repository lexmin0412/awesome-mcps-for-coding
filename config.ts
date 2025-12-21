export interface McpServerConfig {
  name: string;
  description: string;
  url?: string;
  homepage?: string;
  command?: string;
  args?: string[];
  env?: Record<string, string>;
}

export const mcpServers: McpServerConfig[] = [
  {
    name: "Context7 MCP Server",
    description: "获取最新的库文档，避免 AI 写出包含 Deprecated API 的代码",
    url: "https://mcp.context7.com/mcp",
    homepage: "https://context7.com/",
  },
  {
    name: "Apifox MCP Server",
    description: "根据接口文档生成或修改代码、搜索接口文档内容等",
    homepage: "https://docs.apifox.com/apifox-mcp-server",
    // Note: Apifox command wasn't in settings.json, adding placeholder or skipping if unknown
    // command: "npx",
    // args: ["apifox-mcp-server"]
  },
  {
    name: "Chrome DevTools MCP",
    description: "调用 Chrome Devtools 调试",
    command: "npx",
    args: ["-y", "chrome-devtools-mcp@latest"],
    homepage: "https://github.com/ChromeDevTools/chrome-devtools-mcp",
  },
  {
    name: "Iconify MCP",
    description: "基于 Iconify API，提供寻找图标、获取图标信息等",
    command: "npx",
    args: ["@osmansiddiquer/iconify-mcp"],
    homepage: "https://www.mcpworld.com/en/detail/6e91084388355899193b69ff6598c19b",
  },
  {
    name: "Shadcn MCP",
    description: "Shadcn 的官方 MCP，提供获取可用组件列表、查询组件信息等",
    command: "npx",
    args: ["shadcn@latest", "mcp"],
    homepage: "https://ui.shadcn.com/docs/mcp",
  },
];
