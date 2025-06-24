
import { Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
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
          <a href="#asortyment" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Asortyment</a>
          <a href="#galeria" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Galeria</a>
          <a href="#opinie" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Opinie</a>
          <a href="#kontakt" className="text-gray-700 hover:text-red-600 transition-colors font-medium">Kontakt</a>
        </nav>
        <Button className="bg-red-600 hover:bg-red-700 text-white">
          <Phone className="w-4 h-4 mr-2" />
          Zadzwoń
        </Button>
      </div>
    </header>
  );
};

export default Header;
