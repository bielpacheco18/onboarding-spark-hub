
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import DemoModal from "./DemoModal";
import { useIsMobile } from "@/hooks/use-mobile";

const navigation = [
  { name: "Benefícios", href: "#beneficios" },
  { name: "Funcionalidades", href: "#funcionalidades" },
  { name: "Público-Alvo", href: "#publico-alvo" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5 flex items-center">
            <img src="/favicon.svg" alt="Logo" className="w-7 h-7 mr-2 sm:w-8 sm:h-8" />
            <span className="font-bold text-lg sm:text-xl text-brand-700">Onboarding<span className="text-accent-500">SparkHub</span></span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-brand-600 transition-colors"
            >
              {item.name}
            </a>
          ))}
          <Link
            to="/como-funciona"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-brand-600 transition-colors"
          >
            Como Funciona
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button 
            className="bg-brand-600 hover:bg-brand-700"
            onClick={() => setDemoModalOpen(true)}
          >
            Solicitar Demo
          </Button>
        </div>
      </nav>
      
      {/* Mobile menu - improved with smooth transitions and better spacing */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/20 backdrop-blur-sm" role="dialog" aria-modal="true">
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transition-all ease-in-out duration-300 shadow-lg">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <a href="#" className="-m-1.5 p-1.5 flex items-center">
                <img src="/favicon.svg" alt="Logo" className="w-7 h-7 mr-2" />
                <span className="font-bold text-lg text-brand-700">Onboarding<span className="text-accent-500">SparkHub</span></span>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:bg-gray-100 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Fechar menu"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-200">
                <div className="space-y-1 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-brand-50 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                  <Link
                    to="/como-funciona"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-brand-50 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Como Funciona
                  </Link>
                </div>
                <div className="py-6">
                  <Button 
                    className="w-full bg-brand-600 hover:bg-brand-700 py-2.5"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setDemoModalOpen(true);
                    }}
                  >
                    Solicitar Demo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <DemoModal 
        open={demoModalOpen}
        onOpenChange={setDemoModalOpen}
      />
    </header>
  );
};

export default Navbar;
