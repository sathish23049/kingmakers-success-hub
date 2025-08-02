import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Users, Award, BookOpen } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative bg-hero-gradient py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Your Gateway to 
                <span className="text-accent"> Banking Success</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Achieve your dream banking career with South India's most trusted coaching institute. 
                Expert faculty, personalized mentoring, and proven results since 2015.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 text-white">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                <span>Expert Faculty with Banking Experience</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                <span>Flexible Online + Offline Classes</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                <span>Daily Mock Tests & Current Affairs</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                <span>Interview Guidance & Mentoring</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="xl" variant="accent" className="font-semibold">
                Start Your Journey
              </Button>
              <Button size="xl" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                Watch Demo Class
              </Button>
              <Button size="xl" variant="secondary">
                Talk to a Mentor
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-4 text-center">
                <Users className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">1000+</div>
                <div className="text-white/80 text-sm">Success Stories</div>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-4 text-center">
                <Award className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">95%</div>
                <div className="text-white/80 text-sm">Success Rate</div>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-4 text-center">
                <BookOpen className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">9</div>
                <div className="text-white/80 text-sm">Years Experience</div>
              </Card>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <img 
              src={heroImage} 
              alt="Banking education success" 
              className="rounded-2xl shadow-strong w-full h-auto"
            />
            <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground p-4 rounded-xl shadow-medium">
              <div className="text-lg font-bold">New Batch Starting</div>
              <div className="text-sm">Limited Seats Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;