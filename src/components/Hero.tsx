
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white py-16 sm:py-24">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-brand-800 sm:text-5xl md:text-6xl">
            Automatize o <span className="text-brand-600">Onboarding</span> e 
            <span className="text-accent-500"> Capacitação</span> da sua equipe
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-3xl mx-auto">
            Uma solução SaaS que automatiza o processo de integração e treinamento corporativo, 
            ideal para pequenas e médias empresas que desejam otimizar tempo, reduzir custos e escalar treinamentos.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" className="bg-brand-600 hover:bg-brand-700">
              Solicitar Demonstração <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="border-brand-300 text-brand-700">
              Como Funciona
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute right-[-10%] top-1/2 transform -translate-y-1/2 w-96 h-96 bg-accent-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute left-[-10%] top-1/3 transform -translate-y-1/2 w-96 h-96 bg-brand-100 rounded-full blur-3xl opacity-30"></div>
    </div>
  );
};

export default Hero;
