import { Card } from './ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Calendar, MapPin, Users, Award } from 'lucide-react';

export const PastEvents = () => {
  const pastEvents = [
    {
      id: 1,
      title: "E-Summit 2023",
      date: "March 2023",
      location: "LNCTE Main Campus",
      participants: "500+",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
      description: "Our flagship annual event featuring keynote speakers, panel discussions, startup exhibitions, and networking sessions. Industry leaders shared insights on emerging trends and future opportunities.",
      achievements: ["₹10 Lakh funding awarded", "50+ Startups showcased", "20+ Industry speakers"]
    },
    {
      id: 2,
      title: "Tech Innovation Challenge",
      date: "September 2023",
      location: "Innovation Hub",
      participants: "250+",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop",
      description: "A 48-hour hackathon focused on developing technological solutions for social impact. Teams worked on projects addressing healthcare, education, and sustainability challenges.",
      achievements: ["25 innovative solutions", "₹5 Lakh prize money", "Industry partnerships formed"]
    },
    {
      id: 3,
      title: "Women Entrepreneur Summit",
      date: "August 2023",
      location: "Conference Center",
      participants: "300+",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop",
      description: "Empowering women entrepreneurs through mentorship sessions, success stories, and networking opportunities. Featured successful women business leaders sharing their entrepreneurial journeys.",
      achievements: ["100+ Women entrepreneurs", "30+ Mentorship connections", "New startup incubation"]
    },
    {
      id: 4,
      title: "Startup Bootcamp",
      date: "June 2023",
      location: "LNCTE Auditorium",
      participants: "180+",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      description: "Intensive 3-day bootcamp covering all aspects of startup development from ideation to scaling. Participants received hands-on training and direct feedback from industry experts.",
      achievements: ["15 startups launched", "₹2 Lakh seed funding", "Ongoing mentorship program"]
    },
    {
      id: 5,
      title: "Industry Connect 2023",
      date: "April 2023",
      location: "Main Campus",
      participants: "400+",
      image: "https://images.unsplash.com/photo-1559223607-b4d0555ae227?w=600&h=400&fit=crop",
      description: "Bridge building event connecting students with industry professionals, creating opportunities for internships, collaborations, and career guidance in the entrepreneurship ecosystem.",
      achievements: ["200+ Industry connections", "50+ Internship offers", "Multiple job placements"]
    }
  ];

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 blur-xl rounded-full animate-pulse"></div>
            <h2 className="relative text-5xl md:text-7xl font-bold gradient-text-hero bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary">
              PAST EVENTS
            </h2>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Celebrating our successful events and the impact we've created in the entrepreneurship community
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <Carousel className="w-full" opts={{ align: 'start', loop: true }}>
            <CarouselContent>
              {pastEvents.map((event) => (
                <CarouselItem key={event.id} className="basis-full">
                  <Card className="card-float bg-gradient-to-br from-card/60 via-card/40 to-card/60 backdrop-blur-xl border border-white/20 overflow-hidden group">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                      <div className="relative h-80 lg:h-full overflow-hidden">
                        <img
                          src={event.image}
                          alt={event.title}
                          loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-background/80"></div>
                      </div>
                      
                      <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                          {event.title}
                        </h3>
                        
                        <div className="space-y-3 mb-6 bg-gradient-to-r from-background/50 to-background/30 p-4 rounded-xl border border-white/10">
                          <div className="flex items-center text-sm text-foreground">
                            <Calendar className="h-4 w-4 mr-3 text-primary" />
                            <span className="font-medium">{event.date}</span>
                          </div>
                          <div className="flex items-center text-sm text-foreground">
                            <MapPin className="h-4 w-4 mr-3 text-primary" />
                            <span className="font-medium">{event.location}</span>
                          </div>
                          <div className="flex items-center text-sm text-foreground">
                            <Users className="h-4 w-4 mr-3 text-primary" />
                            <span className="font-medium">{event.participants} Participants</span>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                          {event.description}
                        </p>
                        
                        <div className="space-y-3">
                          <div className="flex items-center text-primary font-semibold mb-2">
                            <Award className="h-5 w-5 mr-2" />
                            Key Achievements
                          </div>
                          {event.achievements.map((achievement, index) => (
                            <div key={index} className="flex items-center text-sm text-foreground">
                              <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full mr-3"></div>
                              <span>{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-gradient-to-r from-primary/20 to-secondary/20 border-white/20 hover:from-primary hover:to-secondary" />
            <CarouselNext className="right-4 bg-gradient-to-r from-primary/20 to-secondary/20 border-white/20 hover:from-primary hover:to-secondary" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};