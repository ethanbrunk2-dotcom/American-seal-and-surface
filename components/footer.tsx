import { Phone } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">AS</span>
              </div>
              <div>
                <span className="text-foreground font-bold text-lg">American Seal</span>
                <span className="text-primary font-bold text-lg"> & Surface</span>
              </div>
            </div>
            <p className="text-muted-foreground max-w-md">
              Professional driveway sealing and surface protection services. Quality workmanship backed by years of experience.
            </p>
            <a
              href="tel:540-835-9081"
              className="inline-flex items-center gap-2 text-primary font-semibold mt-4 hover:text-primary/80 transition-colors"
            >
              <Phone className="w-4 h-4" />
              540-835-9081
            </a>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                  Driveway Sealing
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                  Crack Filling
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                  Parking Lot Sealing
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                  Surface Preparation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#before-after" className="text-muted-foreground hover:text-foreground transition-colors">
                  Our Work
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#estimate" className="text-muted-foreground hover:text-foreground transition-colors">
                  Free Estimate
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} American Seal & Surface. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Owned & Operated by Ethan Brunk
          </p>
        </div>
      </div>
    </footer>
  );
}
