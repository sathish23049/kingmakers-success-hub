import { Card } from "@/components/ui/card";
import { Building2, Target, TrendingUp, Users } from "lucide-react";
import successImage from "@/assets/success-banking.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                About <span className="text-primary">Kingmakers School of Banking</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Since our establishment in 2015, we have been dedicated to empowering banking and government job aspirants across South India. Our mission is to provide comprehensive, quality education that transforms dreams into achievements.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="p-6 bg-card-gradient shadow-soft">
                <Building2 className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold text-lg mb-2">Established 2015</h3>
                <p className="text-muted-foreground text-sm">
                  9 years of excellence in banking and government exam coaching
                </p>
              </Card>
              
              <Card className="p-6 bg-card-gradient shadow-soft">
                <Target className="h-8 w-8 text-secondary mb-3" />
                <h3 className="font-semibold text-lg mb-2">Our Mission</h3>
                <p className="text-muted-foreground text-sm">
                  Empowering aspirants with knowledge, confidence, and success
                </p>
              </Card>
              
              <Card className="p-6 bg-card-gradient shadow-soft">
                <TrendingUp className="h-8 w-8 text-accent mb-3" />
                <h3 className="font-semibold text-lg mb-2">Proven Results</h3>
                <p className="text-muted-foreground text-sm">
                  Consistent track record of top selections across India
                </p>
              </Card>
              
              <Card className="p-6 bg-card-gradient shadow-soft">
                <Users className="h-8 w-8 text-success mb-3" />
                <h3 className="font-semibold text-lg mb-2">1000+ Success Stories</h3>
                <p className="text-muted-foreground text-sm">
                  Students placed in prestigious banking and government positions
                </p>
              </Card>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Why Choose Kingmakers?</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Industry-experienced faculty with deep banking knowledge</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Comprehensive study materials and regular updates</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Personalized attention and mentoring for each student</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Multiple branch locations across Tamil Nadu</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <img 
              src={successImage} 
              alt="Banking success and growth" 
              className="rounded-2xl shadow-medium w-full h-auto"
            />
            <div className="absolute inset-0 bg-primary/10 rounded-2xl"></div>
            <div className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-soft">
              <div className="text-2xl font-bold text-primary">95%</div>
              <div className="text-sm text-muted-foreground">Student Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;