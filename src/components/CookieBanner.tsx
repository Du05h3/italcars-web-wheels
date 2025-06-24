
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Cookie } from "lucide-react";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem('cookieConsent', 'false');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 p-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            <Cookie className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
            <div className="text-sm text-gray-700">
              <p className="font-medium mb-1">Ta strona używa plików cookie</p>
              <p>
                Używamy plików cookie, aby zapewnić najlepsze doświadczenia na naszej stronie internetowej. 
                Kontynuując korzystanie z tej strony, wyrażasz zgodę na używanie plików cookie zgodnie z naszą 
                polityką prywatności.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 flex-shrink-0">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={rejectCookies}
              className="text-gray-600 border-gray-300 hover:bg-gray-50"
            >
              Odrzuć
            </Button>
            <Button 
              size="sm" 
              onClick={acceptCookies}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              Akceptuj wszystkie
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
