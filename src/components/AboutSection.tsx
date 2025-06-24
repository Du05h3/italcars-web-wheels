
import { Award, Users, ShoppingCart } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="o-nas" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">O ITALCARS</h2>
            <p className="text-lg text-gray-600 mb-6">
              ITALCARS to sklep motoryzacyjny z wieloletnim doświadczeniem w branży handlowej. 
              Specjalizujemy się w sprzedaży części zamiennych do pojazdów włoskich marek, 
              ale w naszym asortymencie znajdziesz części do wszystkich marek samochodów.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Nasz doświadczony zespół służy profesjonalnym doradztwem, pomagając w wyborze 
              odpowiednich części i akcesoriów dostosowanych do Twojego pojazdu i potrzeb.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Award className="w-6 h-6 text-red-600" />
                <span className="text-gray-700 font-medium">Doświadczenie</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-6 h-6 text-green-600" />
                <span className="text-gray-700 font-medium">Fachowe doradztwo</span>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-red-100 to-green-100 rounded-2xl p-8 text-center">
            <ShoppingCart className="w-24 h-24 text-red-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Twój sklep motoryzacyjny</h3>
            <p className="text-gray-600">
              Jakość i profesjonalne doradztwo w jednym miejscu
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
