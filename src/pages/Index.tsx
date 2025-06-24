
import { CarFront, Phone, MapPin, Clock, Wrench, Car, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-red-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/0621803d-e791-4378-9f61-967ffcdf2aaf.png" 
              alt="ITALCARS Logo" 
              className="h-12 w-auto"
            />
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#o-nas" className="text-gray-700 hover:text-red-600 transition-colors font-medium">O nas</a>
            <a href="#uslugi" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Usługi</a>
            <a href="#kontakt" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Kontakt</a>
          </nav>
          <Button className="bg-red-600 hover:bg-red-700 text-white">
            <Phone className="w-4 h-4 mr-2" />
            Zadzwoń
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 via-red-700 to-green-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              ITALCARS
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in">
              Twój zaufany partner w świecie motoryzacji
            </p>
            <p className="text-lg mb-10 opacity-80 max-w-2xl mx-auto animate-fade-in">
              Profesjonalne usługi motoryzacyjne w Wodzisławiu Śląskim. 
              Oferujemy kompleksową obsługę pojazdów z najwyższą jakością i doświadczeniem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-semibold">
                <Car className="w-5 h-5 mr-2" />
                Nasze usługi
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600 font-semibold">
                <MapPin className="w-5 h-5 mr-2" />
                Odwiedź nas
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="uslugi" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nasze usługi</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kompleksowa obsługa motoryzacyjna z włoską precyzją i niemiecką dokładnością
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
              <CardHeader className="text-center pb-2">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">Serwis mechaniczny</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
                  Profesjonalny serwis i naprawa wszystkich marek pojazdów
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
              <CardHeader className="text-center pb-2">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CarFront className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">Sprzedaż części</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
                  Oryginalne części zamienne i akcesoria motoryzacyjne
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105">
              <CardHeader className="text-center pb-2">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">Doradztwo</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
                  Fachowe doradztwo i pomoc w wyborze najlepszych rozwiązań
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="o-nas" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">O ITALCARS</h2>
              <p className="text-lg text-gray-600 mb-6">
                ITALCARS to firma z wieloletnim doświadczeniem w branży motoryzacyjnej. 
                Specjalizujemy się w serwisie pojazdów włoskich marek, ale obsługujemy 
                wszystkie marki samochodów.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Nasz zespół składa się z wykwalifikowanych mechaników, którzy gwarantują 
                najwyższą jakość usług i profesjonalne podejście do każdego klienta.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Award className="w-6 h-6 text-red-600" />
                  <span className="text-gray-700 font-medium">Doświadczenie</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700 font-medium">Profesjonalizm</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-red-100 to-green-100 rounded-2xl p-8 text-center">
              <CarFront className="w-24 h-24 text-red-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Twój partner w motoryzacji</h3>
              <p className="text-gray-600">
                Zaufanie klientów to nasz największy kapitał
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Kontakt</h2>
            <p className="text-lg text-gray-600">Odwiedź nas lub skontaktuj się z nami</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl font-bold text-gray-800">
                    <MapPin className="w-6 h-6 text-red-600 mr-3" />
                    Adres
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700">
                    Czyżowicka 9<br />
                    44-300 Wodzisław Śląski
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl font-bold text-gray-800">
                    <Phone className="w-6 h-6 text-green-600 mr-3" />
                    Telefon
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-gray-700">32 454 67 28</p>
                </CardContent>
              </Card>
            </div>

            {/* Opening Hours */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-bold text-gray-800">
                  <Clock className="w-6 h-6 text-blue-600 mr-3" />
                  Godziny otwarcia
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-gray-700">
                  <div className="flex justify-between">
                    <span className="font-medium">Poniedziałek:</span>
                    <span>08:30–17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Wtorek:</span>
                    <span>08:30–17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Środa:</span>
                    <span>08:30–17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Czwartek:</span>
                    <span>08:30–17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Piątek:</span>
                    <span>08:30–17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sobota:</span>
                    <span>09:00–13:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Niedziela:</span>
                    <span className="text-red-600 font-medium">Zamknięte</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/0621803d-e791-4378-9f61-967ffcdf2aaf.png" 
                alt="ITALCARS Logo" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-2">ITALCARS - Profesjonalne usługi motoryzacyjne</p>
            <p className="text-gray-400 text-sm">
              © 2024 ITALCARS. Wszelkie prawa zastrzeżone.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
