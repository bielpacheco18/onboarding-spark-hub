
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import DemoModal from "./DemoModal";
import { useIsMobile } from "@/hooks/use-mobile";

const Cta = () => {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const isMobile = useIsMobile();
  
  return (
    <section id="cta" className="py-12 sm:py-16 bg-brand-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white sm:text-4xl">
            Pronto para transformar seu processo de onboarding?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-100 max-w-3xl mx-auto">
            Treine sua equipe com mais eficiência, reduza custos e melhore a experiência
            dos novos colaboradores com nossa plataforma.
          </p>
          <div className="mt-8 sm:mt-10">
            <Button 
              size={isMobile ? "default" : "lg"} 
              className="bg-white text-brand-600 hover:bg-brand-50 w-full sm:w-auto px-6"
              onClick={() => setDemoModalOpen(true)}
            >
              Solicitar Demonstração Gratuita 
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      
      <DemoModal 
        open={demoModalOpen}
        onOpenChange={setDemoModalOpen}
      />
    </section>
  );
};

export default Cta;
