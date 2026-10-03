import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { pageMetadata, siteUrl } from '../data/pageMetadata.js'

export default function PageMetadata() {
  const { pathname } = useLocation()
  useEffect(() => {
    const path = pathname.replace(/\/$/, '') || '/'
    const page = pageMetadata[path]
    if (!page) return
    const url = `${siteUrl}${path}`
    document.title = page.title
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', url)
    for (const [selector, value] of [
      ['meta[name="description"]', page.description],
      ['meta[property="og:title"]', page.title],
      ['meta[property="og:description"]', page.description],
      ['meta[property="og:url"]', url],
      ['meta[name="twitter:title"]', page.title],
      ['meta[name="twitter:description"]', page.description],
    ]) document.querySelector(selector)?.setAttribute('content', value)
  }, [pathname])
  return null
}
