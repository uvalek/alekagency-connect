import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Plan Básico",
    price: "$3,850",
    period: "MXN pago único",
    subtext: "Incluye un plan de mantenimiento mensual opcional",
    description: "Ideal para negocios pequeños",
    features: [
      "Automatización simple",
      "Flujos de bienvenida",
      "Agendamiento básico",
      "Soporte por email",
    ],
    highlighted: false,
    cta: "Solicitar información",
    ctaLink: "https://wa.me/message/M7EPXINRLVLWI1",
  },
  {
    name: "Plan Enterprise",
    price: "+$8,000",
    period: "MXN / mes",
    description: "Ecosistema completo personalizado",
    features: [
      "Anuncios en Meta Ads",
      "Edición de video profesional",
      "Landing page optimizada",
      "Automatización con IA avanzada",
      "Precio personalizado tras llamada",
      "Soporte prioritario",
    ],
    highlighted: true,
    cta: "Agendar llamada",
    ctaLink: "https://cal.com/alek-nava-i4gvq6/30min?overlayCalendar=true",
  },
];

const Pricing = () => {
  return (
    <section id="planes" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4"
          >
            Planes que se adaptan a <span className="gradient-text">tu crecimiento</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Elige el plan de inversión que mejor se ajuste a tus necesidades actuales
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
              key={plan.name}
              className={`relative p-8 rounded-2xl ${plan.highlighted
                ? "gradient-primary text-white"
                : "bg-card shadow-card"
                }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-white text-sm font-semibold px-4 py-1 rounded-full">
                  Más popular
                </div>
              )}

              <h3 className={`text-2xl font-heading font-bold mb-2 ${plan.highlighted ? "text-white" : "text-foreground"
                }`}>
                {plan.name}
              </h3>

              <div className="mb-2">
                <div className="flex items-baseline gap-1">
                  <span className={`text-4xl font-heading font-bold ${plan.highlighted ? "text-white" : "gradient-text"
                    }`}>
                    {plan.price}
                  </span>
                  <span className={plan.highlighted ? "text-white/80" : "text-muted-foreground"}>
                    {plan.period}
                  </span>
                </div>
                {/* @ts-ignore */}
                {plan.subtext && (
                  <p className="text-xs text-muted-foreground mt-1 font-medium">
                    {plan.subtext}
                  </p>
                )}
              </div>

              <p className={`mb-6 ${plan.highlighted ? "text-white/80" : "text-muted-foreground"}`}>
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`flex-shrink-0 mt-0.5 ${plan.highlighted ? "text-white" : "text-primary"
                      }`} size={20} />
                    <span className={plan.highlighted ? "text-white" : "text-foreground"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full py-6 h-auto text-lg font-semibold ${plan.highlighted
                  ? "bg-white text-primary hover:bg-white/90"
                  : "btn-primary-gradient border-0"
                  }`}
                asChild
              >
                {/* @ts-ignore */}
                <a
                  href={plan.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {plan.cta}
                  <ArrowRight className="ml-2" size={20} />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
