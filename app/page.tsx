import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { BeforeAfter } from "@/components/before-after";
import { EstimateForm } from "@/components/estimate-form";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <BeforeAfter />
      <About />
      <EstimateForm />
      <Contact />
      <Footer />
    </main>
  );
}
