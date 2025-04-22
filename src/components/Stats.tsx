
const statsData = [
  { value: "94%", label: "Redução no tempo de onboarding" },
  { value: "3x", label: "Aumento na retenção de colaboradores" },
  { value: "68%", label: "Redução de custos com treinamento" },
  { value: "78%", label: "Aumento na satisfação dos novos contratados" }
];

const Stats = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-brand-600">{stat.value}</div>
              <div className="mt-2 text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
