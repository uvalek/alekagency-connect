import { motion } from "framer-motion";
import { Megaphone, MousePointerClick, MessageSquare, CalendarCheck, ChevronDown } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Megaphone,
    title: "Anuncio atrae tráfico",
    description: "Creamos contenido que captura atención y dirige visitantes a tu landing",
  },
  {
    number: "02",
    icon: MousePointerClick,
    title: "Landing convierte",
    description: "Páginas optimizadas que transforman visitantes en leads calificados",
  },
  {
    number: "03",
    icon: MessageSquare,
    title: "Chatbot califica",
    description: "IA que interactúa, responde dudas y filtra prospectos automáticamente",
  },
  {
    number: "04",
    icon: CalendarCheck,
    title: "Agenda o onboarding",
    description: "Citas agendadas automáticamente o proceso de bienvenida sin intervención",
  },
];

const Process = () => {
  return (
    <section id="proceso" className="pt-24 pb-20 bg-white relative">
      {/* Badge Conector - Cabalgando desde la sección anterior */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-[100] flex flex-col items-center gap-1">
        <div className="bg-primary text-white text-[10px] md:text-xs font-bold tracking-[0.2em] px-8 py-3 rounded-full shadow-[0_10px_30px_rgba(79,70,229,0.4)] border-4 border-white uppercase flex items-center justify-center whitespace-nowrap">
          Conoce el método ganador
        </div>
        <ChevronDown className="text-primary animate-bounce mt-1 drop-shadow-md" size={24} strokeWidth={3} />
      </div>

      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4"
          >
            De anuncio a cliente, <span className="gradient-text">sin fricción</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Un proceso automatizado que trabaja mientras tú te enfocas en lo importante
          </motion.p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary -translate-y-1/2 z-0"></div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="bg-card p-6 rounded-2xl shadow-card card-hover relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-5xl font-heading font-bold gradient-text opacity-30">
                      {step.number}
                    </span>
                  </div>
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                    <step.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
