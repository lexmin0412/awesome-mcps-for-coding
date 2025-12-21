import fs from 'fs';
import path from 'path';
import { mcpServers } from '../config';

const ROOT_DIR = path.resolve(__dirname, '..');
const SETTINGS_FILE = path.join(ROOT_DIR, 'settings.json');
const README_FILE = path.join(ROOT_DIR, 'README.md');

function generateSettings() {
  const settings: any = {
    mcpServers: {}
  };

  mcpServers.forEach((server) => {
    // Only add to settings if it has a command or url
    if (server.command || server.url) {
      const serverConfig: any = {};
      if (server.command) {
        serverConfig.command = server.command;
        if (server.args) serverConfig.args = server.args;
        if (server.env) serverConfig.env = server.env;
      } else if (server.url) {
        serverConfig.url = server.url;
      }
      
      // Use name as key, or a simplified version if needed
      // For consistency with existing settings.json, we might want to map some names
      const key = server.name.replace(' MCP Server', '').replace(' MCP', '').toLowerCase();
      settings.mcpServers[key] = serverConfig;
    }
  });

  fs.writeFileSync(SETTINGS_FILE, JSON.stringify(settings, null, 2) + '\n');
  console.log('Generated settings.json');
}

function generateReadme() {
  let content = '# Awesome MCPs for Coding\n\n';
  
  mcpServers.forEach((server) => {
    const link = server.homepage || server.url || '#';
    content += `- [${server.name}](${link}) ${server.description}\n`;
  });

  fs.writeFileSync(README_FILE, content);
  console.log('Generated README.md');
}

generateSettings();
generateReadme();
