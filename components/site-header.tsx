import Link from "next/link";
import Logo from "./logo";
import DrawOnView from "./draw-on-view";

const anchors = [
  { href: "#work", label: "Work" },
  { href: "#approach", label: "Approach" },
  { href: "#contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-void/80 backdrop-blur-md">
      <div className="container-site flex items-center justify-between h-[72px] gap-6">
        <DrawOnView className="nav-logo flex shrink-0">
          <Link href="#top" aria-label="Situa — home" className="flex items-center">
            <Logo className="w-[104px] h-auto text-text" draw />
          </Link>
        </DrawOnView>

        <nav aria-label="Sections" className="hidden md:flex items-center gap-9">
          {anchors.map((a) => (
            <Link
              key={a.href}
              href={a.href}
              className="text-sm text-muted hover:text-text transition-colors duration-200"
            >
              {a.label}
            </Link>
          ))}
        </nav>

        <Link href="#contact" className="btn btn-primary !min-h-[44px] !px-5 text-xs">
          Start a conversation
        </Link>
      </div>
      <div className="cut-rule" />
    </header>
  );
}
