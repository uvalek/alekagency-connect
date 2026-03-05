const logos = [
  "/logos/logo1.svg",
  "/logos/logo2.svg",
  "/logos/logo3.png",
  "/logos/logo4.png",
  "/logos/logo5.svg",
  "/logos/logo6.png",
];

const TrustMarquee = () => {
  return (
    <section className="py-20 bg-slate-100 border-y border-slate-200 overflow-hidden relative z-20">
      <div className="container mx-auto text-center mb-12">
        <h3 className="text-slate-500 uppercase tracking-[0.3em] text-sm font-semibold font-heading">
          Marcas que confían en nosotros
        </h3>
      </div>

      <div className="relative w-full overflow-hidden mask-fade-sides">
        <div className="flex w-max animate-marquee-right">
          {[...logos, ...logos, ...logos, ...logos, ...logos, ...logos].map(
            (logo, index) => (
              <div
                key={`${logo}-${index}`}
                className="mx-8 md:mx-14 flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
              >
                <img
                  src={logo}
                  alt="Brand Partner"
                  loading="eager"
                  className="h-10 md:h-[48px] w-auto max-w-none object-contain"
                />
              </div>
            )
          )}
        </div>
      </div>

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
        .mask-fade-sides {
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </section>
  );
};

export default TrustMarquee;
