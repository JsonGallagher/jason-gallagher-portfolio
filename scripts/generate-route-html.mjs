import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { pageMetadata, siteUrl } from '../src/data/pageMetadata.js'

// Give crawlers and social previews route-specific metadata before JavaScript runs.
const template = await readFile('dist/index.html', 'utf8')
const escape = (text) => text.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;')
for (const [path, page] of Object.entries(pageMetadata)) {
  if (path === '/') continue
  let html = template.replace(/<title>[^<]*<\/title>/, `<title>${escape(page.title)}</title>`)
  html = html.replace(/(<link rel="canonical" href=")[^"]*/, `$1${siteUrl}${path}`)
  for (const [name, value] of Object.entries({
    description: page.description, 'og:title': page.title, 'og:description': page.description,
    'og:url': `${siteUrl}${path}`, 'twitter:title': page.title, 'twitter:description': page.description,
  })) {
    html = html.replace(new RegExp(`(<meta\\s+(?:name|property)="${name}"\\s+content=")[^"]*`), (_, prefix) => prefix + escape(value))
  }
  await mkdir(`dist${path}`, { recursive: true })
  await writeFile(`dist${path}/index.html`, html)
}
