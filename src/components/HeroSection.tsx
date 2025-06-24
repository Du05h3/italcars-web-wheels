
import { ShoppingCart, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-r from-red-600 via-red-700 to-green-600 text-white py-20">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            ITALCARS
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in">
            Sklep z częściami samochodowymi
          </p>
          <p className="text-lg mb-10 opacity-80 max-w-2xl mx-auto animate-fade-in">
            Szeroki asortyment części zamiennych i akcesoriów motoryzacyjnych w Wodzisławiu Śląskim. 
            Oferujemy profesjonalne doradztwo w wyborze odpowiednich części do Twojego pojazdu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-semibold" onClick={() => scrollToSection('asortyment')}>
              <ShoppingCart className="w-5 h-5 mr-2" />
              Nasz asortyment
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600 font-semibold" onClick={() => scrollToSection('kontakt')}>
              <MapPin className="w-5 h-5 mr-2" />
              <span className="inline">Odwiedź nas</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
