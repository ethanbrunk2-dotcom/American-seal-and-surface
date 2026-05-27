import { ArrowRight, Phone } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-primary font-medium">Now Booking for the Season</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Professional Driveway
              <span className="text-primary"> Sealing</span> & Surface Protection
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Protect your investment with expert asphalt sealing services. We extend the life of your driveway, restore its appearance, and shield it from the elements.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#estimate"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all hover:gap-3"
              >
                Get Free Estimate
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:540-835-9081"
                className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary/80 transition-colors"
              >
                <Phone className="w-5 h-5" />
                540-835-9081
              </a>
            </div>
            
            <div className="flex flex-wrap gap-8 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold">15+</span>
                </div>
                <span className="text-muted-foreground text-sm">Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold">500+</span>
                </div>
                <span className="text-muted-foreground text-sm">Projects Completed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold">5</span>
                </div>
                <span className="text-muted-foreground text-sm">Star Reviews</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-secondary to-muted overflow-hidden border border-border">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto bg-primary/20 rounded-full flex items-center justify-center mb-6">
                    <div className="w-24 h-24 bg-primary/30 rounded-full flex items-center justify-center">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-primary-foreground font-bold text-2xl">AS</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-foreground font-semibold text-lg">Quality Workmanship</p>
                  <p className="text-muted-foreground">Every Job, Every Time</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl p-4 shadow-xl">
              <p className="text-sm text-muted-foreground">Owner-Operated</p>
              <p className="text-foreground font-semibold">Ethan Brunk</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
