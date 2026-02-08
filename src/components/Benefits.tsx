import { motion } from "framer-motion";
import { Rocket, Bot, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Rocket,
    title: "Más conversiones sin más esfuerzo",
    description: "Optimizamos cada paso del embudo para maximizar resultados con el mismo presupuesto",
  },
  {
    icon: Bot,
    title: "Atención automatizada 24/7",
    description: "Tus leads reciben respuestas inmediatas sin importar la hora o el día",
  },
  {
    icon: TrendingUp,
    title: "Escalabilidad real sin contratar más personal",
    description: "Crece tu negocio sin aumentar proporcionalmente tu carga operativa",
  },
];

const Benefits = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4"
          >
            ¿Por qué elegir <span className="gradient-text">AlekAgency</span>?
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="bg-background p-8 rounded-2xl shadow-card card-hover text-center"
            >
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6">
                <benefit.icon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
