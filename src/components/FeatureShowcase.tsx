
import { BookOpen } from "lucide-react";

const FeatureShowcase = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-brand-800 mb-6">MVP rápido e validável</h2>
            <p className="text-lg text-gray-600 mb-8">
              Nossa plataforma foi projetada para você começar rapidamente e ver resultados imediatos.
              Com uma abordagem low-code/no-code, garantimos uma implementação ágil e adaptável às suas necessidades.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-lg bg-brand-100 text-brand-600">
                  <BookOpen className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-brand-700">Low-code/no-code</h3>
                  <p className="mt-1 text-gray-600">
                    Construa fluxos de onboarding personalizados sem conhecimento técnico, usando nossos templates e editor visual.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-lg bg-brand-100 text-brand-600">
                  <BookOpen className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-brand-700">Infraestrutura robusta</h3>
                  <p className="mt-1 text-gray-600">
                    Solução baseada em tecnologias modernas que garantem desempenho, segurança e escalabilidade.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center rounded-lg bg-brand-100 text-brand-600">
                  <BookOpen className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-brand-700">Pronto para testes</h3>
                  <p className="mt-1 text-gray-600">
                    MVP completo e funcional, preparado para validação com empresas piloto e adaptação rápida baseada em feedback.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-brand-50 rounded-xl p-6 relative z-10">
              <div className="bg-white shadow-md rounded-lg p-4 border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-10 w-10 rounded-full bg-brand-100 flex items-center justify-center">
                    <span className="text-brand-700 font-semibold">JS</span>
                  </div>
                  <div>
                    <h4 className="font-medium">João Silva</h4>
                    <p className="text-sm text-gray-500">Desenvolvedor Front-end</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="h-2.5 bg-gray-100 rounded-full w-full overflow-hidden">
                    <div className="h-full bg-accent-500 rounded-full w-[85%]"></div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Progresso: 85%</span>
                    <span className="font-medium">17/20 tarefas</span>
                  </div>
                </div>
                
                <div className="mt-4 space-y-3">
                  <div className="flex items-center">
                    <div className="h-4 w-4 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-sm">Onboarding básico</span>
                    <span className="ml-auto text-sm font-medium">Completo</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-4 w-4 rounded-full bg-yellow-500 mr-2"></div>
                    <span className="text-sm">Treinamento técnico</span>
                    <span className="ml-auto text-sm font-medium">Em andamento</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-4 w-4 rounded-full bg-gray-300 mr-2"></div>
                    <span className="text-sm">Integração com equipe</span>
                    <span className="ml-auto text-sm font-medium">Pendente</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 h-24 w-24 bg-accent-100 rounded-full z-0"></div>
            <div className="absolute -top-4 -left-4 h-20 w-20 bg-brand-100 rounded-full z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
