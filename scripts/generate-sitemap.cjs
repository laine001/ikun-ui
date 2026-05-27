/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const path = require('path')

const BASE_URL = 'https://laine001.github.io/ikun-ui'
const DOCS_DIR = path.resolve(__dirname, '../docs')

function getAllMarkdownFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir)

  files.forEach((file) => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)

    if (stat.isDirectory()) {
      if (!file.startsWith('.') && file !== 'node_modules') {
        getAllMarkdownFiles(filePath, fileList)
      }
    } else if (file.endsWith('.md')) {
      fileList.push(filePath)
    }
  })

  return fileList
}

function generateSitemap() {
  const mdFiles = getAllMarkdownFiles(DOCS_DIR)

  const urls = mdFiles.map((file) => {
    const relativePath = path.relative(DOCS_DIR, file)
    const urlPath = relativePath
      .replace(/\\/g, '/')
      .replace(/\.md$/, '')
      .replace(/\/index$/, '')

    return `  <url>
    <loc>${BASE_URL}/${urlPath}/</loc>
    <changefreq>${urlPath === 'index' ? 'daily' : 'weekly'}</changefreq>
    <priority>${urlPath === 'index' ? '1.0' : '0.8'}</priority>
  </url>`
  })

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`

  const outputPath = path.resolve(DOCS_DIR, 'public/sitemap.xml')

  fs.mkdirSync(path.dirname(outputPath), { recursive: true })
  fs.writeFileSync(outputPath, sitemap, 'utf-8')

  console.log(`✅ Sitemap generated with ${urls.length} URLs at: ${outputPath}`)
}

generateSitemap()
