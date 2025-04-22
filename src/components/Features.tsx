
import { Book, Users, Calendar, ArrowUp } from "lucide-react";

const featuresData = [
  {
    title: "Trilhas de aprendizado personalizadas",
    description: "Cursos, vídeos, e tarefas adaptadas ao cargo e setor. Progresso individual visível para RH e gestor.",
    icon: Book
  },
  {
    title: "Integração com sistemas de RH",
    description: "Conecte com plataformas como Gupy, Sólides ou Google Workspace. Automação de emails de boas-vindas e documentos.",
    icon: Calendar
  },
  {
    title: "Gamificação",
    description: "Missões, conquistas e recompensas virtuais. Rankings internos para incentivar a participação.",
    icon: ArrowUp
  },
  {
    title: "Relatórios e análises",
    description: "Acompanhe em tempo real a evolução de cada colaborador. Receba alertas de quem está com baixo desempenho ou atrasos.",
    icon: Users
  }
];

const Features = () => {
  return (
    <section id="funcionalidades" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-800 sm:text-4xl">
            Funcionalidades poderosas
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Ferramentas completas para automatizar todos os aspectos da integração 
            e capacitação de novos colaboradores.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {featuresData.map((feature, index) => (
            <div key={index} className="flex gap-5">
              <div className="flex-shrink-0 h-14 w-14 flex items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                <feature.icon className="h-7 w-7" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-brand-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
