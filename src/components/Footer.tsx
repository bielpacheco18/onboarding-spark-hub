
const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <div className="flex items-center">
                <img src="/favicon.svg" alt="Logo" className="w-8 h-8 mr-2" />
                <span className="font-bold text-xl text-brand-700">Onboarding<span className="text-accent-500">SparkHub</span></span>
              </div>
            </div>
            <p className="text-gray-600 max-w-sm">
              Automatize o processo de integração e capacitação de novos colaboradores de forma eficiente e escalável.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Produto
            </h3>
            <ul className="space-y-3">
              <li><a href="#beneficios" className="text-gray-600 hover:text-brand-600">Benefícios</a></li>
              <li><a href="#funcionalidades" className="text-gray-600 hover:text-brand-600">Funcionalidades</a></li>
              <li><a href="#pricing" className="text-gray-600 hover:text-brand-600">Planos</a></li>
              <li><a href="#publico-alvo" className="text-gray-600 hover:text-brand-600">Público-Alvo</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Contato
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-brand-600">Demonstração</a></li>
              <li><a href="#" className="text-gray-600 hover:text-brand-600">Suporte</a></li>
              <li><a href="#" className="text-gray-600 hover:text-brand-600">contato@onboardingsparkhub.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm text-center">
            &copy; {new Date().getFullYear()} OnboardingSparkHub. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
