
const Footer = () => {
  return (
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
  );
};

export default Footer;
