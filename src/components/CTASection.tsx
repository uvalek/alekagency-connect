import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarCheck } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="gradient-primary rounded-3xl p-8 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 max-w-3xl mx-auto leading-tight">
            Transforma la forma en la que conviertes seguidores en clientes con automatización inteligente
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Agenda una llamada gratuita y descubre cómo podemos ayudarte a escalar tu negocio
          </p>
          <Button
            className="bg-white text-primary hover:bg-white hover:scale-105 text-lg px-8 py-6 h-auto font-semibold rounded-full shadow-[0_4px_20px_rgba(255,255,255,0.3)] hover:shadow-[0_8px_30px_rgba(255,255,255,0.5)] transition-all duration-300"
            asChild
          >
            <a
              href="https://cal.com/alek-nava-i4gvq6/30min?overlayCalendar=true"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <CalendarCheck size={20} className="shrink-0" />
              Agendar llamada gratuita
              <ArrowRight size={20} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
