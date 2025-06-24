
import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ReviewsSection = () => {
  const [reviews, setReviews] = useState<any[]>([]);

  // Sample reviews pool - in real app these would come from Google API
  const reviewsPool = [
    {
      author: "Anna Kowalska",
      text: "Bardzo dobry sklep z częściami. Zawsze znajduję to czego potrzebuję. Obsługa kompetentna i pomocna.",
      rating: 5
    },
    {
      author: "Marek Nowak", 
      text: "Świetne doradztwo przy wyborze części. Ceny konkurencyjne, szeroki asortyment. Polecam!",
      rating: 5
    },
    {
      author: "Piotr Wiśniewski",
      text: "Profesjonalna obsługa, szybka realizacja zamówień. Zawsze wracam tutaj po części do swojego auta.",
      rating: 5
    },
    {
      author: "Katarzyna Lewandowska",
      text: "Najlepszy sklep motoryzacyjny w okolicy. Fachowe doradztwo i oryginalne części w dobrej cenie.",
      rating: 5
    },
    {
      author: "Tomasz Zieliński",
      text: "Bardzo zadowolony z zakupów. Części dobrej jakości, miła obsługa. Na pewno wrócę.",
      rating: 5
    },
    {
      author: "Magdalena Dąbrowska",
      text: "Polecam każdemu! Szeroki wybór części, konkurencyjne ceny i profesjonalne podejście do klienta.",
      rating: 5
    }
  ];

  useEffect(() => {
    // Simulate fetching 3 random reviews
    const getRandomReviews = () => {
      const shuffled = [...reviewsPool].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 3);
    };
    
    setReviews(getRandomReviews());
  }, []);

  return (
    <section id="opinie" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Opinie naszych klientów</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Zobacz co mówią o nas zadowoleni klienci
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="text-center pb-2">
                <div className="flex justify-center mb-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <CardTitle className="text-lg font-bold text-gray-800">{review.author}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 italic">
                  "{review.text}"
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
