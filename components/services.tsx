import { Shield, Droplets, Clock, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Driveway Sealing",
    description:
      "Protect your asphalt from UV rays, water damage, and oil spills with our professional coal-tar or asphalt-based sealers.",
  },
  {
    icon: Droplets,
    title: "Crack Filling",
    description:
      "Stop small problems before they become big ones. We fill and seal cracks to prevent water infiltration and further damage.",
  },
  {
    icon: Clock,
    title: "Parking Lot Sealing",
    description:
      "Commercial-grade sealing for parking lots of all sizes. Maintain a professional appearance and extend pavement life.",
  },
  {
    icon: CheckCircle2,
    title: "Surface Preparation",
    description:
      "Thorough cleaning, oil spot treatment, and proper preparation ensure maximum adhesion and long-lasting results.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 text-balance">
            Professional Asphalt Services
          </h2>
          <p className="text-muted-foreground text-lg mt-4">
            From residential driveways to commercial parking lots, we deliver quality results that stand the test of time.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#estimate"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Get Your Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}
