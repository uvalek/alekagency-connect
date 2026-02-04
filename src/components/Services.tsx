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
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Un sistema completo, <span className="gradient-text">no servicios aislados</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada pieza de nuestro ecosistema está diseñada para trabajar en conjunto
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-background p-8 rounded-2xl shadow-card card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6">
                <service.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                {service.title}
              </h3>
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
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
