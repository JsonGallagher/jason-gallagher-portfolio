import { useEffect } from 'react'

// Match public/_redirects; this fallback also works in Vite's local preview.
const resumeUrl = 'https://drive.google.com/file/d/1OzMmPTY45CkeD7nnabCCxP2bnQb7Juwq/view?usp=sharing'

export default function Resume() {
  useEffect(() => {
    window.location.replace(resumeUrl)
  }, [])

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <a href={resumeUrl} className="text-link">Open Jason Gallagher's résumé</a>
    </main>
  )
}
