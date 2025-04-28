
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import DemoModal from "./DemoModal";
import { useIsMobile } from "@/hooks/use-mobile";

type PricingPlan = {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
  color?: string;
};

const pricingPlans: PricingPlan[] = [
  {
    id: "basic",
    name: "Básico",
    price: "R$149",
    description: "Perfeito para empresas pequenas em crescimento.",
    features: [
      "Até 50 novos funcionários/ano",
      "Templates de onboarding básicos",
      "Treinamento automatizado",
      "Suporte por email"
    ],
    buttonText: "Começar Agora",
    color: "bg-gray-100"
  },
  {
    id: "premium",
    name: "Premium",
    price: "R$299",
    description: "Para empresas médias com necessidades específicas.",
    features: [
      "Até 200 novos funcionários/ano",
      "Templates personalizáveis",
      "Análise de desempenho",
      "Integração com RH",
      "Suporte prioritário"
    ],
    buttonText: "Escolher Premium",
    isPopular: true,
    color: "bg-brand-50"
  },
  {
    id: "elite",
    name: "Elite",
    price: "R$599",
    description: "Solução completa para grandes corporações.",
    features: [
      "Funcionários ilimitados",
      "Templates completamente customizáveis",
      "Análise avançada e relatórios",
      "Integrações API completas",
      "Dashboard personalizado",
      "Suporte 24/7 dedicado",
      "Consultoria de implementação"
    ],
    buttonText: "Contato Corporativo",
    color: "bg-accent-50"
  }
];

const Pricing = () => {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const isMobile = useIsMobile();
  
  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
    setDemoModalOpen(true);
  };

  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Escolha o Plano Ideal Para Sua Empresa
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções flexíveis para empresas de todos os tamanhos, desde startups até grandes corporações.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan) => (
            <Card 
              key={plan.id}
              className={`border ${plan.isPopular ? 'border-brand-300 shadow-lg relative' : ''} ${plan.color || ''}`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-brand-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Mais Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mt-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500">/mês</span>
                </div>
                <CardDescription className="mt-2 text-gray-600">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0">
                        <Check className="h-5 w-5 text-brand-500" />
                      </div>
                      <span className="ml-3 text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={() => handlePlanSelect(plan.id)}
                  className={`w-full ${plan.isPopular ? 'bg-brand-600 hover:bg-brand-700' : ''}`}
                  variant={plan.isPopular ? 'default' : 'outline'}
                  size={isMobile ? "default" : "lg"}
                >
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <DemoModal 
        open={demoModalOpen}
        onOpenChange={setDemoModalOpen}
        selectedPlan={selectedPlan}
      />
    </section>
  );
};

export default Pricing;
