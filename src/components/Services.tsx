import { motion } from "framer-motion";
import { Video, Target, Layout, Bot } from "lucide-react";

const services = [
  {
    icon: Video,
    title: "Creación de Contenido & Edición de Video",
    features: [
      "Narrativa visual para anuncios que detienen el scroll",
      "Edición profesional (After Effects & Premiere Pro)",
      "Motion graphics para comunicar valor",
    ],
  },
  {
    icon: Target,
    title: "Meta Ads & Estrategia de Pauta",
    features: [
      "Campañas en Facebook e Instagram",
      "Segmentación inteligente",
      "Pruebas A/B enfocadas en ROI",
    ],
  },
  {
    icon: Layout,
    title: "Landing Pages de Conversión",
    features: [
      "Diseño con objetivo único",
      "Copywriting persuasivo",
      "Alta velocidad de carga",
    ],
  },
  {
    icon: Bot,
    title: "Automatización con Chatbots IA",
    features: [
      "Calificación de leads 24/7",
      "Integración con n8n u otras herramientas",
      "Agendamiento automático de citas",
    ],
  },
];

const Services = () => {
  return (
    <section id="servicios" className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-8 leading-[1.1]"
          >
            Un sistema completo. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary">
              No servicios aislados
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Cada pieza de nuestro ecosistema está diseñada para trabajar en conjunto
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-background p-6 rounded-2xl shadow-card card-hover h-full flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-5 shrink-0">
                <service.icon className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-heading font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <ul className="space-y-2 flex-grow">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-muted-foreground text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
