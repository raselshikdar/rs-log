import { readdirSync, writeFileSync, statSync } from 'fs'
import { join } from 'path'

const baseUrl = 'https://rasel.jsx.pm'

const walk = (dir) => {
  let results = []
  const list = readdirSync(dir)
  list.forEach((file) => {
    const path = join(dir, file)
    const stat = statSync(path)
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(path))
    } else if (file.endsWith('.md')) {
      results.push(path)
    }
  })
  return results
}

const pages = walk('./docs')
  .filter((path) => !path.includes('.vitepress') && !path.includes('public'))
  .map((file) => {
    const relative = file.replace('docs/', '').replace(/index\.md$/, '').replace(/\.md$/, '')
    return `${baseUrl}/${relative}`
  })

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (url) => `  <url>
    <loc>${url}</loc>
  </url>`
  )
  .join('\n')}
</urlset>`

// Output into docs/public
writeFileSync('./docs/public/sitemap.xml', sitemap)
console.log('✅ Sitemap generated')
