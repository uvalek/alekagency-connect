import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";

const Hero = () => {
  return (
    <section id="inicio" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          src="/hero-bg.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-primary/90 z-10" />
      </div>

      <div className="relative z-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-6 drop-shadow-lg">
            Automatizamos tu marketing para{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-blue-50">
              convertir atención en clientes
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto drop-shadow-md">
            Creatividad, anuncios y automatización con IA trabajando juntos 24/7
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="btn-pulse-glow text-lg px-8 py-6 h-auto shadow-lg hover:shadow-purple-500/20 rounded-full"
              asChild
            >
              <a
                href="https://cal.com/alek-nava-i4gvq6/30min?overlayCalendar=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar llamada
                <ArrowRight className="ml-2" size={20} />
              </a>
            </Button>

            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="bg-transparent text-lg px-8 py-6 h-auto border-2 border-white text-white hover:bg-white/10 hover:text-white hover:border-white transition-all backdrop-blur-sm rounded-full"
                >
                  <Play className="mr-2" size={20} />
                  Conoce nuestra visión
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[700px] w-[90%] max-h-[80vh] overflow-y-auto p-6 rounded-2xl shadow-2xl bg-slate-900/40 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-[12px] border border-white/20 text-white antialiased">
                <DialogTitle className="sr-only">Video de Servicios</DialogTitle>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  {/* Left Side: Video */}
                  <div className="flex items-center justify-center relative h-[500px] w-fit mx-auto rounded-xl overflow-hidden shadow-lg border border-white/5">
                    <video
                      src="/servicios-demo.mp4"
                      controls
                      autoPlay
                      className="w-auto h-full object-contain"
                    >
                      Tu navegador no soporta el elemento de video.
                    </video>
                  </div>

                  {/* Right Side: Actions */}
                  <div className="flex flex-col justify-center items-center gap-5">
                    <h3 className="text-2xl font-bold font-heading text-center text-white drop-shadow-md">
                      ¿Listo para escalar?
                    </h3>

                    <Button
                      className="w-full py-6 text-lg btn-primary-gradient border-0 shadow-lg hover:shadow-purple-500/20 transition-all hover:scale-[1.02] rounded-full text-white font-medium"
                      asChild
                    >
                      <a
                        href="https://cal.com/alek-nava-i4gvq6/30min?overlayCalendar=true"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Agendar llamada
                      </a>
                    </Button>

                    <Button
                      variant="outline"
                      className="w-full py-6 text-lg border border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white hover:border-white/40 rounded-full backdrop-blur-sm transition-all"
                      asChild
                    >
                      <a
                        href="https://api.whatsapp.com/message/M7EPXINRLVLWI1?autoload=1&app_absent=0"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Más información
                      </a>
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
