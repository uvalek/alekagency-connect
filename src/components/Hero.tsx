import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section id="inicio" className="section-padding pt-32 md:pt-40 bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground leading-tight mb-6">
              Automatizamos tu marketing para{" "}
              <span className="gradient-text">convertir atención en clientes</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Creatividad, anuncios y automatización con IA trabajando juntos 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="btn-primary-gradient border-0 text-lg px-8 py-6 h-auto">
                Agendar llamada
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button
                variant="outline"
                className="text-lg px-8 py-6 h-auto border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Play className="mr-2" size={20} />
                Ver servicios
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-3xl overflow-hidden shadow-card">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
                alt="Automatización de marketing digital"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 gradient-primary opacity-20"></div>
            </div>
            {/* Floating elements */}
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-2xl shadow-card hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold">
                  +85%
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground">Conversiones</p>
                  <p className="text-sm text-muted-foreground">Más leads calificados</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
