const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://rslog.vercel.app';
const POSTS_DIR = path.join(__dirname, 'docs/posts');
const DIST_PATH = path.join(__dirname, 'docs/.vitepress/dist/sitemap.xml');

// Get all .md posts
const posts = fs.readdirSync(POSTS_DIR).filter(file => file.endsWith('.md'));

const urls = posts.map(file => {
  const slug = file.replace(/\.md$/, '');
  return `<url>
  <loc>${BASE_URL}/post/${slug}</loc>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>`;
});

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${BASE_URL}/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  ${urls.join('\n')}
</urlset>`;

fs.writeFileSync(DIST_PATH, sitemap);
console.log('✅ sitemap.xml created successfully!');
