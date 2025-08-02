import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, Users, CheckCircle } from "lucide-react";

const coursesData = [
  {
    title: "IBPS Bank Exams",
    subtitle: "PO, Clerk, SO, RRB",
    duration: "6-12 Months",
    students: "500+ Students",
    features: ["Comprehensive Study Material", "Weekly Mock Tests", "Current Affairs", "Interview Preparation"],
    badge: "Most Popular",
    badgeColor: "bg-accent text-accent-foreground"
  },
  {
    title: "SBI Exams",
    subtitle: "PO, Clerk, SO",
    duration: "6-8 Months",
    students: "300+ Students",
    features: ["SBI Pattern Focus", "Sectional Tests", "Group Discussion", "Personal Interview"],
    badge: "High Success Rate",
    badgeColor: "bg-success text-success-foreground"
  },
  {
    title: "RBI Exams",
    subtitle: "Grade A, Grade B, Assistant",
    duration: "8-10 Months",
    students: "200+ Students",
    features: ["RBI Specific Syllabus", "Economic Analysis", "Advanced Preparation", "Expert Guidance"],
    badge: "Premium",
    badgeColor: "bg-primary text-primary-foreground"
  },
  {
    title: "SSC Exams",
    subtitle: "CGL, CHSL, MTS, CPO",
    duration: "4-8 Months",
    students: "400+ Students",
    features: ["Complete SSC Coverage", "Speed Building", "Accuracy Training", "Regular Assessment"],
    badge: "Comprehensive",
    badgeColor: "bg-secondary text-secondary-foreground"
  },
  {
    title: "NABARD & Other Banks",
    subtitle: "Grade A, Grade B",
    duration: "6-8 Months",
    students: "150+ Students",
    features: ["Specialized Banking Focus", "Rural Banking", "Development Banking", "Case Studies"],
    badge: "Specialized",
    badgeColor: "bg-muted text-muted-foreground"
  },
  {
    title: "Insurance Exams",
    subtitle: "LIC, NIACL, UIIC",
    duration: "4-6 Months",
    students: "200+ Students",
    features: ["Insurance Domain Knowledge", "Product Training", "Sales Techniques", "Practical Approach"],
    badge: "Industry Focused",
    badgeColor: "bg-accent/80 text-accent-foreground"
  }
];

const CoursesSection = () => {
  return (
    <section id="courses" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Our <span className="text-primary">Comprehensive Courses</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose from our wide range of specialized courses designed to help you succeed in banking, SSC, and government exams. Each course is crafted by experts with years of experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesData.map((course, index) => (
            <Card key={index} className="p-6 bg-card-gradient shadow-soft hover:shadow-medium transition-all duration-200 group hover:-translate-y-1 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-muted-foreground">{course.subtitle}</p>
                  </div>
                  <Badge className={course.badgeColor}>
                    {course.badge}
                  </Badge>
                </div>

                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>{course.students}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  {course.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex gap-3">
                  <Button size="sm" className="flex-1">
                    View Details
                  </Button>
                  <Button size="sm" variant="outline" className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    Syllabus
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="default">
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;