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
            aria-label="Situa on Instagram"
            className="inline-flex h-10 w-10 items-center justify-center text-muted transition-colors hover:text-text focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </nav>
      </div>
    </footer>
  );
}
