import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="border-t border-border py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <Logo className="h-8 w-auto text-muted-foreground" />

          <div className="flex items-center gap-8">
            <a
              href="#home"
              className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors"
            >
              Home
            </a>
            <a
              href="#apartments"
              className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors"
            >
              Apartments
            </a>
            <a
              href="#about"
              className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground/60 tracking-wider">
            &copy; {new Date().getFullYear()} Sunrise Apartments. All rights
            reserved.
          </p>
          <p className="text-xs text-muted-foreground/40 tracking-wider">
            Premium Luxury Stays
          </p>
        </div>
      </div>
    </footer>
  );
}
