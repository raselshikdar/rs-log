// generate-sitemap.js

import { readdirSync, writeFileSync, statSync } from 'fs';
import { join } from 'path';

const docsDir = './docs';
const baseUrl = 'https://rslog.vercel.app'; // change to your domain

function getMarkdownPaths(dir) {
  const entries = readdirSync(dir, { withFileTypes: true });
  let paths = [];

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);

    if (entry.isDirectory()) {
      if (['.vitepress', 'public'].includes(entry.name)) continue;
      paths = paths.concat(getMarkdownPaths(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      const relativePath = fullPath.replace(/^\.\/docs/, '').replace(/\.md$/, '');
      paths.push(`${baseUrl}${relativePath === '/index' ? '' : relativePath}`);
    }
  }

  return paths;
}

const urls = getMarkdownPaths(docsDir);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url><loc>${url}</loc></url>`).join('\n')}
</urlset>
`;

writeFileSync('./docs/public/sitemap.xml', sitemap);
console.log('✅ sitemap.xml generated with', urls.length, 'entries.');
