import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";
import testimonialsImage from "@/assets/testimonials-bg.jpg";

const testimonialsData = [
  {
    name: "Priya Sharma",
    position: "SBI PO - 2023",
    bank: "State Bank of India",
    image: "/placeholder.svg",
    rating: 5,
    testimonial: "Kingmakers transformed my banking career aspirations into reality. The faculty's dedication and comprehensive study materials were instrumental in my SBI PO selection. The mock tests and current affairs sessions were particularly helpful.",
    location: "Chennai"
  },
  {
    name: "Rajesh Kumar",
    position: "IBPS Clerk - 2023",
    bank: "Punjab National Bank",
    image: "/placeholder.svg",
    rating: 5,
    testimonial: "The personalized mentoring at Kingmakers made all the difference. From concept clarity to interview preparation, every aspect was covered meticulously. I'm grateful for their unwavering support throughout my journey.",
    location: "Trichy"
  },
  {
    name: "Anjali Reddy",
    position: "RBI Grade B - 2023",
    bank: "Reserve Bank of India",
    image: "/placeholder.svg",
    rating: 5,
    testimonial: "The faculty at Kingmakers has unmatched expertise in banking exams. Their strategic approach and regular assessments helped me crack RBI Grade B. The interview guidance was exceptional and boosted my confidence significantly.",
    location: "Salem"
  },
  {
    name: "Vikram Patel",
    position: "SSC CGL - 2023",
    bank: "Income Tax Department",
    image: "/placeholder.svg",
    rating: 5,
    testimonial: "Kingmakers' comprehensive approach to SSC preparation is outstanding. The daily practice sessions and doubt clearing classes ensured I was well-prepared for every section. Their success rate speaks for itself.",
    location: "Madurai"
  },
  {
    name: "Deepika Nair",
    position: "NABARD Grade A - 2023",
    bank: "NABARD",
    image: "/placeholder.svg",
    rating: 5,
    testimonial: "The specialized coaching for NABARD at Kingmakers is remarkable. The faculty's deep understanding of rural banking and development banking concepts helped me secure my dream job. Highly recommended!",
    location: "Chennai"
  },
  {
    name: "Arjun Singh",
    position: "LIC AAO - 2023",
    bank: "Life Insurance Corporation",
    image: "/placeholder.svg",
    rating: 5,
    testimonial: "From the moment I joined Kingmakers, I knew I was in the right place. The structured curriculum, expert guidance, and motivational environment helped me achieve my goal of becoming an LIC AAO.",
    location: "Trichy"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="results" className="py-20 bg-background relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={testimonialsImage} 
          alt="Success testimonials background" 
          className="w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <Badge className="bg-success text-success-foreground px-4 py-2">
            Success Stories
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Our <span className="text-primary">Top Achievers</span> Speak
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Read inspiring success stories from our students who have achieved their dreams of securing prestigious positions in banking and government sectors.
          </p>
        </div>

        {/* Recent Achievements Banner */}
        <div className="bg-success-gradient rounded-2xl p-8 mb-16 text-center shadow-medium animate-scale-in">
          <h3 className="text-2xl font-bold text-white mb-4">🎉 Recent Achievements - 2023 Results</h3>
          <div className="grid md:grid-cols-4 gap-6 text-white">
            <div>
              <div className="text-3xl font-bold">150+</div>
              <div className="text-white/90">SBI Selections</div>
            </div>
            <div>
              <div className="text-3xl font-bold">200+</div>
              <div className="text-white/90">IBPS Selections</div>
            </div>
            <div>
              <div className="text-3xl font-bold">75+</div>
              <div className="text-white/90">SSC Selections</div>
            </div>
            <div>
              <div className="text-3xl font-bold">25+</div>
              <div className="text-white/90">RBI & NABARD</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-6 bg-card shadow-soft hover:shadow-medium transition-all duration-200 group hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <Quote className="h-8 w-8 text-primary/30" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>

                <p className="text-muted-foreground italic leading-relaxed">
                  "{testimonial.testimonial}"
                </p>

                <div className="border-t pt-4">
                  <div className="flex items-center gap-3">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full bg-muted"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-primary font-medium">{testimonial.position}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.bank}</p>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {testimonial.location}
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Join our success stories and achieve your banking career dreams
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="bg-primary text-primary-foreground px-4 py-2">
              #1 Success Rate in South India
            </Badge>
            <Badge className="bg-secondary text-secondary-foreground px-4 py-2">
              Expert Faculty with Bank Experience
            </Badge>
            <Badge className="bg-accent text-accent-foreground px-4 py-2">
              Comprehensive Coaching Since 2015
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;