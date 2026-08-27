import Logo from "./logo";
import DrawOnView from "./draw-on-view";

export default function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="container-site py-16 flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
        <div>
          <DrawOnView>
            <Logo className="w-[200px] h-auto text-text" draw />
          </DrawOnView>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-muted">
            Whatever the problem requires.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted">
          <a href="#work" className="hover:text-text transition-colors">Work</a>
          <a href="#contact" className="hover:text-text transition-colors">Contact</a>
          <a
            href="https://www.instagram.com/situalabs/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text transition-colors"
          >
            Instagram <span className="sr-only">(opens in a new tab)</span>
          </a>
        </nav>
      </div>
    </footer>
  );
}
