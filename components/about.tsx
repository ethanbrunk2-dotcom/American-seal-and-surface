import { User, MapPin, Award } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-secondary to-muted overflow-hidden border border-border">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-6">
                      <User className="w-16 h-16 text-primary" />
                    </div>
                    <p className="text-foreground font-bold text-2xl">Ethan Brunk</p>
                    <p className="text-primary font-semibold">Owner & Operator</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary rounded-xl p-4 shadow-xl">
                <p className="text-primary-foreground font-bold text-2xl">15+</p>
                <p className="text-primary-foreground/80 text-sm">Years Experience</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 text-balance">
              Local, Trusted, Professional
            </h2>
            <p className="text-muted-foreground text-lg mt-4 leading-relaxed">
              American Seal & Surface is a locally owned and operated business dedicated to providing the highest quality asphalt sealing services in the region. Owner Ethan Brunk brings over 15 years of experience to every project.
            </p>
            <p className="text-muted-foreground text-lg mt-4 leading-relaxed">
              We believe in doing the job right the first time, using premium materials, and treating every property like our own. Our reputation is built on quality work and satisfied customers.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 bg-secondary/50 rounded-xl">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h4 className="text-foreground font-semibold">Locally Owned</h4>
                  <p className="text-muted-foreground text-sm">Serving our community with pride</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-secondary/50 rounded-xl">
                <Award className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h4 className="text-foreground font-semibold">Fully Insured</h4>
                  <p className="text-muted-foreground text-sm">Licensed and insured for your protection</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
