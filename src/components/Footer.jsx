export default function Footer() {
  return (
    <footer className="bg-primary-dark text-text-light px-6 py-6">
      <div className="content-width flex flex-wrap items-center justify-between gap-x-6 gap-y-2 text-sm">
        <p className="text-text-light/75">© {new Date().getFullYear()} Jason Gallagher · Colorado</p>
        <a href="https://x.com/heyjson" target="_blank" rel="noopener noreferrer" className="inline-flex items-center min-h-[44px] underline underline-offset-4 hover:text-blue-300 transition-colors">X (Twitter)</a>
      </div>
    </footer>
  );
}
