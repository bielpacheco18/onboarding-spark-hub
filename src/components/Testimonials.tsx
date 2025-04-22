
import { MessageSquare } from "lucide-react";

const testimonials = [
  {
    content: "A plataforma reduziu nosso tempo de onboarding em 70% e melhorou significativamente a experiência dos nossos novos colaboradores.",
    author: "Amanda Costa",
    role: "Diretora de RH",
    company: "TechInova"
  },
  {
    content: "Conseguimos escalar nosso processo de treinamento para equipes remotas sem perder a qualidade e o acompanhamento personalizado.",
    author: "Marcos Santos",
    role: "CEO",
    company: "GrowthStart"
  },
  {
    content: "A gamificação do processo trouxe um engajamento que nunca tínhamos visto antes. Os novos colaboradores adoram a experiência!",
    author: "Juliana Mendes",
    role: "People Manager",
    company: "DataFlex"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-brand-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-800 sm:text-4xl">
            O que nossos clientes dizem
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Empresas que transformaram seus processos de onboarding e treinamento com nossa plataforma.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative"
            >
              <div className="absolute -top-4 left-8 bg-accent-100 p-2 rounded-full">
                <MessageSquare className="h-6 w-6 text-accent-600" />
              </div>
              <p className="text-gray-700 italic mb-6 pt-2">{testimonial.content}</p>
              <div>
                <p className="font-semibold text-brand-800">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
