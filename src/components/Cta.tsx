
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Cta = () => {
  return (
    <section id="cta" className="py-16 bg-brand-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Pronto para transformar seu processo de onboarding?
          </h2>
          <p className="mt-4 text-lg text-brand-100 max-w-3xl mx-auto">
            Treine sua equipe com mais eficiência, reduza custos e melhore a experiência
            dos novos colaboradores com nossa plataforma.
          </p>
          <div className="mt-10">
            <Button 
              size="lg" 
              className="bg-white text-brand-600 hover:bg-brand-50"
            >
              Solicitar Demonstração Gratuita <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
