import { Card } from "@/components/ui/card";
import { 
  GraduationCap, 
  Users, 
  FileText, 
  Laptop, 
  MessageCircle, 
  TrendingUp,
  Clock,
  Award,
  BookMarked
} from "lucide-react";

const featuresData = [
  {
    icon: GraduationCap,
    title: "Expert Faculty",
    description: "Learn from experienced professionals with years of banking industry experience and proven teaching expertise.",
    color: "text-primary"
  },
  {
    icon: Users,
    title: "Personalized Mentoring",
    description: "Get individual attention and customized guidance to address your specific learning needs and career goals.",
    color: "text-secondary"
  },
  {
    icon: FileText,
    title: "Daily Mock Tests",
    description: "Practice with comprehensive mock tests designed to simulate real exam patterns and boost your confidence.",
    color: "text-accent"
  },
  {
    icon: Laptop,
    title: "Online + Offline Classes",
    description: "Flexible learning options with both classroom sessions and online courses to fit your schedule.",
    color: "text-success"
  },
  {
    icon: MessageCircle,
    title: "Interview Guidance",
    description: "Comprehensive interview preparation including group discussions, personal interviews, and confidence building.",
    color: "text-primary"
  },
  {
    icon: TrendingUp,
    title: "Current Affairs",
    description: "Stay updated with daily current affairs sessions, monthly magazines, and comprehensive news analysis.",
    color: "text-secondary"
  },
  {
    icon: Clock,
    title: "Flexible Timings",
    description: "Choose from morning, evening, and weekend batches designed to accommodate working professionals.",
    color: "text-accent"
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "95% success rate with 1000+ students placed in prestigious banking and government positions.",
    color: "text-success"
  },
  {
    icon: BookMarked,
    title: "Comprehensive Study Material",
    description: "Get access to updated study materials, practice papers, and exclusive notes prepared by our expert team.",
    color: "text-primary"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Why Choose <span className="text-primary">Kingmakers</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We provide everything you need to succeed in your banking and government exam journey. 
            Our comprehensive approach ensures you're fully prepared for every challenge.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="p-6 bg-card shadow-soft hover:shadow-medium transition-all duration-200 group hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-4">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-muted/50 ${feature.color} group-hover:scale-110 transition-transform duration-200`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 bg-success-gradient rounded-2xl p-8 text-center shadow-medium">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">
              Ready to Start Your Success Journey?
            </h3>
            <p className="text-white/90 max-w-2xl mx-auto">
              Join thousands of successful students who have achieved their banking and government job dreams with Kingmakers. 
              Your success story starts here.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4">
                <div className="text-2xl font-bold text-white">1000+</div>
                <div className="text-white/80 text-sm">Success Stories</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4">
                <div className="text-2xl font-bold text-white">95%</div>
                <div className="text-white/80 text-sm">Success Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4">
                <div className="text-2xl font-bold text-white">5+</div>
                <div className="text-white/80 text-sm">Branch Locations</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4">
                <div className="text-2xl font-bold text-white">9</div>
                <div className="text-white/80 text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;