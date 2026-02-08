import { motion } from "framer-motion";

const logos = [
  "/logos/logo1.svg",
  "/logos/logo2.svg",
  "/logos/logo3.svg",
  "/logos/logo4.svg",
  "/logos/logo5.svg",
  "/logos/logo6.svg",
];

const TrustMarquee = () => {
  // Duplicamos el array varias veces para asegurar un scroll infinito fluido en pantallas grandes
  // Con 6 logos, necesitamos bastantes copias para llenar anchos grandes
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos];

  return (
    <section className="py-20 bg-slate-100 border-y border-slate-200 overflow-hidden relative z-20">
      <div className="container mx-auto text-center mb-12">
        <h3 className="text-slate-500 uppercase tracking-[0.3em] text-sm font-semibold font-heading">
          Marcas que confían en nosotros
        </h3>
      </div>

      <motion.div
        initial={{ opacity: 0, visibility: "hidden" }}
        whileInView={{ opacity: 1, visibility: "visible" }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-full overflow-hidden mask-fade-sides mb-0"
      >
        {/* Contenedor del track */}
        <div className="flex w-max animate-marquee-right">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo}-${index}`}
              className="mx-8 md:mx-14 flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
            >
              <img
                src={logo}
                alt="Brand Partner"
                className="h-10 md:h-[48px] w-auto max-w-none object-contain"
              />
            </div>
          ))}
        </div>
      </motion.div>

      <style>{`
        @keyframes marquee-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-marquee-right {
          animation: marquee-right 60s linear infinite;
        }
        /* Máscara de desvanecimiento en los bordes para suavizar entradas/salidas */
        .mask-fade-sides {
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </section>
  );
};
// ...

export default TrustMarquee;
