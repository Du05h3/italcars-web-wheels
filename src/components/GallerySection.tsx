
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const GallerySection = () => {
  const handleImageError = (imageName: string) => (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.log(`Error loading image: ${imageName}`);
    console.log('Image src:', e.currentTarget.src);
    console.log('Current location:', window.location.href);
    console.log('Full image URL:', new URL(e.currentTarget.src, window.location.href).href);
    e.currentTarget.src = '/placeholder.svg';
  };

  const handleImageLoad = (imageName: string) => (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.log(`Successfully loaded image: ${imageName}`);
    console.log('Image src:', e.currentTarget.src);
  };

  return (
    <section id="galeria" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nasz asortyment</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Zobacz jak wygląda nasz sklep i bogaty asortyment części samochodowych
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              <CarouselItem>
                <div className="p-1">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-0">
                      <img 
                        src="/images/shop-interior-1.png" 
                        alt="Wnętrze sklepu ITALCARS - części samochodowe"
                        className="w-full h-96 object-cover rounded-lg"
                        onError={handleImageError('shop-interior-1.png')}
                        onLoad={handleImageLoad('shop-interior-1.png')}
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-0">
                      <img 
                        src="/images/shop-interior-2.png" 
                        alt="Asortyment olejów i płynów eksploatacyjnych"
                        className="w-full h-96 object-cover rounded-lg"
                        onError={handleImageError('shop-interior-2.png')}
                        onLoad={handleImageLoad('shop-interior-2.png')}
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
