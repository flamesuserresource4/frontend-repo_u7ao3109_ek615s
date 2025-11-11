export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-black/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-2 gap-6 text-sm text-gray-400">
        <div>
          <p className="text-white text-lg font-semibold">Zylix</p>
          <p className="mt-2 max-w-md">Building trustworthy, future-ready digital experiences. © {new Date().getFullYear()} Zylix. All rights reserved.</p>
        </div>
        <div className="md:text-right">
          <p className="text-white font-medium">Reach us</p>
          <p className="mt-2">123 Innovation Drive, Suite 200, San Francisco, CA</p>
          <div className="mt-2 flex md:justify-end gap-4">
            <a className="hover:text-white" href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
            <a className="hover:text-white" href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="hover:text-white" href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
