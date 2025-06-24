
import { Phone, MapPin, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ContactSection = () => {
  return (
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

        {/* Map Section */}
        <div className="mt-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Jak nas znaleźć</h3>
            <p className="text-gray-600">Nasza lokalizacja na mapie</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2553.5441826736946!2d18.452891915774953!3d50.00234027941573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711fb1c9c9c9c9c%3A0x9c9c9c9c9c9c9c9c!2sCzy%C5%BCowicka%209%2C%2044-300%20Wodzis%C5%82aw%20%C5%9Al%C4%85ski!5e0!3m2!1spl!2spl!4v1640995200000!5m2!1spl!2spl"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokalizacja ITALCARS - Czyżowicka 9, Wodzisław Śląski"
                  className="w-full"
                ></iframe>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
