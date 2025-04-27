
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-brand-800 mb-6">
              Como o OnboardingSparkHub Funciona
            </h1>
            <p className="text-lg text-gray-600">
              Nossa plataforma transforma o processo de integração e treinamento em uma experiência eficiente e escalável para toda a sua equipe.
            </p>
          </div>

          {/* Seção de etapas */}
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-12">
              <div className="grid md:grid-cols-[1fr_3fr] gap-8 items-start">
                <div className="bg-brand-50 text-brand-700 rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold">
                  1
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-brand-700 mb-4">Mapeamento de Processos</h2>
                  <p className="text-gray-600 mb-4">
                    Nossa plataforma permite mapear e documentar todos os processos-chave da sua empresa de forma simples e organizada. Você pode criar fluxos de trabalho detalhados utilizando nosso editor visual intuitivo.
                  </p>
                  <ul className="space-y-2">
                    {["Identificação de processos essenciais", "Documentação passo a passo", "Integração com ferramentas existentes"].map((item) => (
                      <li key={item} className="flex items-start">
                        <Check className="h-5 w-5 text-accent-500 mr-2 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-[1fr_3fr] gap-8 items-start">
                <div className="bg-brand-50 text-brand-700 rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold">
                  2
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-brand-700 mb-4">Criação de Treinamentos</h2>
                  <p className="text-gray-600 mb-4">
                    Transforme seus processos em módulos de treinamento interativos e envolventes, combinando textos, vídeos, quizzes e atividades práticas para maximizar a retenção de conhecimento.
                  </p>
                  <ul className="space-y-2">
                    {["Editor de conteúdo multimídia", "Avaliações interativas", "Acompanhamento de progresso em tempo real"].map((item) => (
                      <li key={item} className="flex items-start">
                        <Check className="h-5 w-5 text-accent-500 mr-2 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-[1fr_3fr] gap-8 items-start">
                <div className="bg-brand-50 text-brand-700 rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold">
                  3
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-brand-700 mb-4">Automação de Integração</h2>
                  <p className="text-gray-600 mb-4">
                    Automatize o processo de onboarding com fluxos personalizados para diferentes funções e departamentos, garantindo que cada novo colaborador receba as informações e treinamentos adequados.
                  </p>
                  <ul className="space-y-2">
                    {["Trilhas de aprendizado personalizadas", "Notificações automáticas", "Certificação de conclusão"].map((item) => (
                      <li key={item} className="flex items-start">
                        <Check className="h-5 w-5 text-accent-500 mr-2 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-[1fr_3fr] gap-8 items-start">
                <div className="bg-brand-50 text-brand-700 rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold">
                  4
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-brand-700 mb-4">Análise e Otimização</h2>
                  <p className="text-gray-600 mb-4">
                    Monitore o desempenho dos seus programas de treinamento e integração com métricas detalhadas, identificando pontos de melhoria e otimizando continuamente seus processos.
                  </p>
                  <ul className="space-y-2">
                    {["Dashboard com indicadores-chave", "Feedback dos usuários", "Recomendações de melhoria baseadas em dados"].map((item) => (
                      <li key={item} className="flex items-start">
                        <Check className="h-5 w-5 text-accent-500 mr-2 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <Button asChild size="lg" className="bg-brand-600 hover:bg-brand-700">
                <Link to="/">
                  Solicitar Demonstração <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;
