
import { Check } from "lucide-react";

const benefitsData = [
  {
    title: "Redução de custos",
    description: "Elimine treinamentos manuais e repetitivos. Centralize todo o processo de integração em uma única plataforma.",
    items: [
      "Automatize tarefas repetitivas de RH",
      "Reduza o tempo gasto em treinamentos presenciais",
      "Elimine custos com materiais físicos"
    ]
  },
  {
    title: "Escalabilidade",
    description: "Cresça sua equipe sem se preocupar com o esforço de treinar um por um. Adapte os fluxos de onboarding com poucos cliques.",
    items: [
      "Treine dezenas de colaboradores simultaneamente",
      "Replique processos bem-sucedidos",
      "Adapte conteúdos para diferentes departamentos"
    ]
  },
  {
    title: "Experiência do colaborador",
    description: "Primeiras impressões duram: ofereça uma jornada de integração moderna e envolvente. Engajamento desde o primeiro dia.",
    items: [
      "Crie uma jornada personalizada e acolhedora",
      "Aumente o engajamento com gamificação",
      "Reduza o tempo de adaptação na empresa"
    ]
  }
];

const Benefits = () => {
  return (
    <section id="beneficios" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-800 sm:text-4xl">
            Benefícios que transformam seu negócio
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Nossa plataforma foi desenvolvida para tornar o processo de onboarding mais eficiente,
            escalável e impactante para sua empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefitsData.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-brand-700 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 mb-6">{benefit.description}</p>
              <ul className="space-y-3">
                {benefit.items.map((item, idx) => (
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

export default Benefits;
