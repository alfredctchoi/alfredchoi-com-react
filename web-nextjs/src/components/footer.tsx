export default function Footer() {
  return (
    <footer className="shell border-t border-rule-strong py-8 pb-12 font-mono text-[11px] text-muted tracking-[0.04em] grid grid-cols-2 md:grid-cols-4 gap-6">
      <div>
        <span className="block mb-1.5 text-fg opacity-55">© 2026</span>
        Alfred Choi
      </div>
      <div>
        <span className="block mb-1.5 text-fg opacity-55">Typeface</span>
        Helvetica Neue, IBM Plex Mono
      </div>
      <div>
        <span className="block mb-1.5 text-fg opacity-55">Last updated</span>
        May 2026
      </div>
      <div className="md:text-right">
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
