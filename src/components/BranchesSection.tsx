import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Users } from "lucide-react";

const branchesData = [
  {
    city: "Chennai",
    address: "No. 45, Anna Salai, Thousand Lights, Chennai - 600006",
    phone: "+91 98765 43210",
    timing: "6:00 AM - 10:00 PM",
    students: "500+ Students",
    features: ["Main Branch", "All Courses Available", "Interview Room", "Library"],
    established: "2015"
  },
  {
    city: "Trichy",
    address: "1st Floor, Bharathi Complex, Cantonment, Trichy - 620001",
    phone: "+91 98765 43211",
    timing: "6:00 AM - 9:00 PM",
    students: "300+ Students",
    features: ["Full Facility", "Mock Test Center", "Current Affairs Hall", "Study Room"],
    established: "2017"
  },
  {
    city: "Salem",
    address: "2nd Floor, Sri Krishna Plaza, Omalur Road, Salem - 636004",
    phone: "+91 98765 43212",
    timing: "6:30 AM - 9:30 PM",
    students: "250+ Students",
    features: ["Complete Courses", "Digital Classroom", "Counseling Room", "Cafeteria"],
    established: "2018"
  },
  {
    city: "Madurai",
    address: "Ground Floor, Meenakshi Towers, West Masi Street, Madurai - 625001",
    phone: "+91 98765 43213",
    timing: "6:00 AM - 9:00 PM",
    students: "200+ Students",
    features: ["Modern Facility", "AC Classrooms", "Test Series Hall", "Parking"],
    established: "2019"
  },
  {
    city: "Coimbatore",
    address: "3rd Floor, RS Puram Plaza, Avinashi Road, Coimbatore - 641018",
    phone: "+91 98765 43214",
    timing: "6:30 AM - 9:30 PM",
    students: "180+ Students",
    features: ["New Branch", "Latest Equipment", "Group Study Area", "Canteen"],
    established: "2022"
  }
];

const BranchesSection = () => {
  return (
    <section id="branches" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Our <span className="text-primary">Branch Locations</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Strategically located across Tamil Nadu to serve students better. Each branch is equipped with modern facilities and experienced faculty to ensure quality education.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {branchesData.map((branch, index) => (
            <Card 
              key={index} 
              className="p-6 bg-card shadow-soft hover:shadow-medium transition-all duration-200 group hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {branch.city}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Established {branch.established}
                    </p>
                  </div>
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-muted-foreground mt-1 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">{branch.address}</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <p className="text-sm text-foreground font-medium">{branch.phone}</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">{branch.timing}</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Users className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">{branch.students}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-foreground">Facilities:</h4>
                  <div className="flex flex-wrap gap-2">
                    {branch.features.map((feature, featureIndex) => (
                      <span 
                        key={featureIndex} 
                        className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex gap-3">
                  <Button size="sm" className="flex-1">
                    Visit Branch
                  </Button>
                  <Button size="sm" variant="outline">
                    Call Now
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-primary/5 rounded-2xl p-8 text-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">
              Can't Find a Branch Near You?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't worry! We offer comprehensive online coaching with the same quality and attention. 
              Join our online classes and get access to live sessions, recorded lectures, and personalized mentoring.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <Button size="lg" variant="default">
                Join Online Classes
              </Button>
              <Button size="lg" variant="outline">
                Request New Branch
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">5+</div>
            <div className="text-muted-foreground">Branch Locations</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-secondary">1400+</div>
            <div className="text-muted-foreground">Students Across Branches</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-accent">99%</div>
            <div className="text-muted-foreground">Student Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BranchesSection;