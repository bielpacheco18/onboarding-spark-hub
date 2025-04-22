
import { Check } from "lucide-react";

const audienceGroups = [
  {
    title: "Startups e PMEs em crescimento",
    items: [
      "Empresas com times em expansão rápida",
      "Negócios que buscam escalar seus processos de RH",
      "Startups que precisam de processos consistentes"
    ]
  },
  {
    title: "Equipes de RH",
    items: [
      "Profissionais de RH com pouco tempo e muitas demandas",
      "Times que buscam reduzir trabalho manual repetitivo",
      "Gestores em busca de métricas claras de treinamento"
    ]
  },
  {
    title: "Consultorias de treinamento",
    items: [
      "Consultores que desejam escalar sua metodologia",
      "Empresas de capacitação que buscam oferecer soluções digitais",
      "Treinadores corporativos que precisam de automação"
    ]
  }
];

const TargetAudience = () => {
  return (
    <section id="publico-alvo" className="py-16 bg-brand-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-800 sm:text-4xl">
            Para quem desenvolvemos esta solução
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Nossa plataforma atende às necessidades específicas de diferentes perfis 
            que buscam otimizar seus processos de onboarding e treinamento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {audienceGroups.map((group, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100"
            >
              <h3 className="text-xl font-semibold text-brand-700 mb-6">{group.title}</h3>
              <ul className="space-y-4">
                {group.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="h-5 w-5 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
