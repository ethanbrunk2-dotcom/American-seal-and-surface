import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Contact Us</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 text-balance">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground text-lg mt-4">
            Reach out today for a free consultation and estimate.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <a
            href="tel:540-835-9081"
            className="group bg-card border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-all hover:-translate-y-1"
          >
            <div className="w-14 h-14 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <Phone className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-foreground font-semibold mb-2">Call Us</h3>
            <p className="text-primary font-bold text-lg">540-835-9081</p>
          </a>

          <a
            href="sms:540-835-9081"
            className="group bg-card border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-all hover:-translate-y-1"
          >
            <div className="w-14 h-14 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <Mail className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-foreground font-semibold mb-2">Text Us</h3>
            <p className="text-primary font-bold text-lg">540-835-9081</p>
          </a>

          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <div className="w-14 h-14 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <MapPin className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-foreground font-semibold mb-2">Service Area</h3>
            <p className="text-muted-foreground">Virginia & Surrounding Areas</p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 text-center">
            <div className="w-14 h-14 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Clock className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-foreground font-semibold mb-2">Hours</h3>
            <p className="text-muted-foreground">Mon-Sat: 7AM - 7PM</p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-card border border-border rounded-2xl">
            <div className="text-center sm:text-left">
              <p className="text-muted-foreground">Owner & Operator</p>
              <p className="text-foreground font-bold text-xl">Ethan Brunk</p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-border" />
            <a
              href="tel:540-835-9081"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Now: 540-835-9081
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
