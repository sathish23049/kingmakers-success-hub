import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Video, MessageCircle, BookOpen } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-hero-gradient relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-6 mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold text-white">
            Ready to <span className="text-accent">Transform</span> Your Career?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Join thousands of successful students who have achieved their banking and government job dreams with Kingmakers. 
            Your journey to success starts with a single step.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-center hover:bg-white/20 transition-all duration-200 group">
            <Phone className="h-8 w-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-white mb-2">Call Us</h3>
            <p className="text-white/80 text-sm mb-4">Speak with our counselors</p>
            <Button size="sm" variant="accent" className="w-full">
              +91 98765 43210
            </Button>
          </Card>

          <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-center hover:bg-white/20 transition-all duration-200 group">
            <Video className="h-8 w-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-white mb-2">Demo Class</h3>
            <p className="text-white/80 text-sm mb-4">Experience our teaching</p>
            <Button size="sm" variant="accent" className="w-full">
              Watch Demo
            </Button>
          </Card>

          <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-center hover:bg-white/20 transition-all duration-200 group">
            <MessageCircle className="h-8 w-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-white mb-2">Talk to Mentor</h3>
            <p className="text-white/80 text-sm mb-4">Get personalized guidance</p>
            <Button size="sm" variant="accent" className="w-full">
              Book Session
            </Button>
          </Card>

          <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20 text-center hover:bg-white/20 transition-all duration-200 group">
            <BookOpen className="h-8 w-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-semibold text-white mb-2">Course Details</h3>
            <p className="text-white/80 text-sm mb-4">Download complete syllabus</p>
            <Button size="sm" variant="accent" className="w-full">
              Get Brochure
            </Button>
          </Card>
        </div>

        <div className="text-center space-y-8">
          <div className="flex flex-wrap justify-center gap-6">
            <Button size="xl" variant="accent" className="font-semibold min-w-48">
              🚀 Join Now - Start Your Journey
            </Button>
            <Button size="xl" variant="outline" className="text-white border-white hover:bg-white hover:text-primary min-w-48">
              📞 Talk to Expert
            </Button>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-4">🎯 Limited Time Offers</h3>
            <div className="grid md:grid-cols-3 gap-4 text-white">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">50% OFF</div>
                <div className="text-sm">Early Bird Discount</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">FREE</div>
                <div className="text-sm">Study Materials Worth ₹5000</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">100%</div>
                <div className="text-sm">Job Guarantee Program</div>
              </div>
            </div>
          </div>

          <p className="text-white/70 text-sm">
            *Limited seats available. Offer valid until month end. Terms and conditions apply.
          </p>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-secondary/20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default CTASection;