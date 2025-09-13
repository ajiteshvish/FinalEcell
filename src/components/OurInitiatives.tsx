import { Card } from './ui/card';
import { Trophy, Users, Lightbulb, Wrench, Megaphone, MessageCircle } from 'lucide-react';
export const OurInitiatives = () => {
  const initiatives = [{
    id: 1,
    title: "E-summit",
    icon: <Trophy className="h-8 w-8" />,
    description: "Annual entrepreneurship summit featuring industry leaders, investors, and innovators.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop"
  }, {
    id: 2,
    title: "Lecture Series",
    icon: <Users className="h-8 w-8" />,
    description: "Regular lectures by successful entrepreneurs and industry experts sharing their insights.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=400&h=300&fit=crop"
  }, {
    id: 3,
    title: "Engendea",
    icon: <Lightbulb className="h-8 w-8" />,
    description: "Innovation and idea generation platform for students to showcase their creativity.",
    image: "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?w=400&h=300&fit=crop"
  }, {
    id: 4,
    title: "Workshops",
    icon: <Wrench className="h-8 w-8" />,
    description: "Hands-on workshops covering various aspects of entrepreneurship and business development.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop"
  }, {
    id: 5,
    title: "Entrepreneurship Awareness Camp",
    icon: <Megaphone className="h-8 w-8" />,
    description: "Awareness programs to inspire and educate students about entrepreneurship opportunities.",
    image: "https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?w=400&h=300&fit=crop"
  }, {
    id: 6,
    title: "Talk Sessions",
    icon: <MessageCircle className="h-8 w-8" />,
    description: "Interactive sessions with entrepreneurs, mentors, and industry professionals.",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=300&fit=crop"
  }];
  return <section className="py-12 sm:py-20 px-4 sm:px-6 relative">
      <div className="container mx-auto">
        <div className="text-center mb-20 animate-slide-up">
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 blur-xl rounded-full animate-pulse"></div>
            <h2 className="relative text-5xl md:text-7xl font-bold gradient-text-hero bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary">
              OUR INITIATIVES
            </h2>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Comprehensive programs designed to nurture entrepreneurial spirit and build innovative solutions
          </p>
        </div>

        
      </div>
    </section>;
};