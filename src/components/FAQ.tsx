import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Qué hace diferente a AlekAgency?",
    answer: "No somos una agencia que ofrece servicios aislados. Construimos ecosistemas completos donde cada pieza (anuncios, landing, chatbot, automatización) trabaja en conjunto para maximizar tus conversiones. Todo está pensado para funcionar 24/7 sin tu intervención directa.",
  },
  {
    question: "¿Necesito anuncios para usar la automatización?",
    answer: "No necesariamente. Aunque los anuncios son una excelente fuente de tráfico, nuestras automatizaciones pueden integrarse con cualquier fuente de leads: redes sociales orgánicas, referidos, tu sitio web actual, etc. Diseñamos el sistema según tu situación.",
  },
  {
    question: "¿Funciona para cualquier negocio?",
    answer: "Nuestra metodología funciona mejor para negocios que venden servicios o productos que requieren un proceso de venta consultivo: coaches, consultores, agencias, clínicas, inmobiliarias, educación, y más. Si tu negocio depende de generar leads y cerrar ventas, podemos ayudarte.",
  },
  {
    question: "¿Cómo empiezo?",
    answer: "El primer paso es agendar una llamada gratuita de diagnóstico. En 30 minutos analizamos tu situación actual, identificamos oportunidades de mejora y te presentamos una propuesta personalizada. Sin compromisos ni presión de venta.",
  },
];

const FAQ = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Preguntas <span className="gradient-text">frecuentes</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-background rounded-2xl px-6 border-0 shadow-card"
            >
              <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
