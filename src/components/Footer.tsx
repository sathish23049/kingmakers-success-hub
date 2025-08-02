import { Button } from "@/components/ui/button";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Youtube, 
  Instagram,
  Clock,
  BookOpen
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">
              Kingmakers School of Banking
            </h3>
            <p className="text-background/80 leading-relaxed">
              Since 2015, we have been the leading coaching institute for banking, SSC, and government exams in South India. 
              Empowering aspirants with quality education and proven results.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="outline" className="border-background/20 hover:bg-primary">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline" className="border-background/20 hover:bg-primary">
                <Youtube className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline" className="border-background/20 hover:bg-primary">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline" className="border-background/20 hover:bg-primary">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-accent">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-background/80 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#courses" className="text-background/80 hover:text-primary transition-colors">Our Courses</a></li>
              <li><a href="#results" className="text-background/80 hover:text-primary transition-colors">Success Stories</a></li>
              <li><a href="#branches" className="text-background/80 hover:text-primary transition-colors">Branch Locations</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Online Classes</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Test Series</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Current Affairs</a></li>
            </ul>
          </div>

          {/* Courses */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-accent">Popular Courses</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">IBPS Bank Exams</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">SBI Exams</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">RBI Exams</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">SSC Exams</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">NABARD</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">Insurance Exams</a></li>
              <li><a href="#" className="text-background/80 hover:text-primary transition-colors">RRB Exams</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-accent">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-background/80 text-sm">Head Office:</p>
                  <p className="text-background/80 text-sm">No. 45, Anna Salai, Chennai - 600006</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="text-background/80 text-sm">+91 98765 43210</p>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="text-background/80 text-sm">info@kingmakersbanking.com</p>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-background/80 text-sm">Mon - Sat: 6:00 AM - 10:00 PM</p>
                  <p className="text-background/80 text-sm">Sunday: 8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
            
            <Button className="w-full" variant="outline">
              <BookOpen className="h-4 w-4 mr-2" />
              Download Brochure
            </Button>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-background/60 text-sm">
              © 2024 Kingmakers School of Banking. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-background/60 hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;