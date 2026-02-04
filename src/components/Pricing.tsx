import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Plan Básico",
    price: "$3,000",
    period: "MXN / mes",
    description: "Ideal para negocios pequeños",
    features: [
      "Automatización simple",
      "Flujos de bienvenida",
      "Agendamiento básico",
      "Soporte por email",
    ],
    highlighted: false,
    cta: "Solicitar información",
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
  },
];

const Pricing = () => {
  return (
    <section id="planes" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Planes que se adaptan a <span className="gradient-text">tu crecimiento</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Elige el plan que mejor se ajuste a tus necesidades actuales
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 rounded-2xl ${
                plan.highlighted
                  ? "gradient-primary text-white"
                  : "bg-card shadow-card"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-white text-sm font-semibold px-4 py-1 rounded-full">
                  Más popular
                </div>
              )}
              
              <h3 className={`text-2xl font-heading font-bold mb-2 ${
                plan.highlighted ? "text-white" : "text-foreground"
              }`}>
                {plan.name}
              </h3>
              
              <div className="flex items-baseline gap-1 mb-2">
                <span className={`text-4xl font-heading font-bold ${
                  plan.highlighted ? "text-white" : "gradient-text"
                }`}>
                  {plan.price}
                </span>
                <span className={plan.highlighted ? "text-white/80" : "text-muted-foreground"}>
                  {plan.period}
                </span>
              </div>
              
              <p className={`mb-6 ${plan.highlighted ? "text-white/80" : "text-muted-foreground"}`}>
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`flex-shrink-0 mt-0.5 ${
                      plan.highlighted ? "text-white" : "text-primary"
                    }`} size={20} />
                    <span className={plan.highlighted ? "text-white" : "text-foreground"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full py-6 h-auto text-lg font-semibold ${
                  plan.highlighted
                    ? "bg-white text-primary hover:bg-white/90"
                    : "btn-primary-gradient border-0"
                }`}
              >
                {plan.cta}
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
