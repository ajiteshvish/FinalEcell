import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { Users, Calendar, Trophy, Building, ArrowRight, Star } from 'lucide-react';

const ESummit = () => {
  // Stats data
  const stats = [
    { icon: <Users className="h-8 w-8" />, value: "100K+", label: "FEST REACH" },
    { icon: <Calendar className="h-8 w-8" />, value: "5K+", label: "ATTENDEES" },
    { icon: <Trophy className="h-8 w-8" />, value: "2K+", label: "REGISTRATIONS" },
    { icon: <Building className="h-8 w-8" />, value: "5K+", label: "CAMPUS STRENGTH" }
  ];

  // Sample speakers data (you can replace with actual data)
  const speakers = [
    {
      name: "Dr. Rajesh Kumar",
      title: "CEO, TechVentures",
      description: "Leading entrepreneur with 15+ years of experience in building successful startups. Expert in AI and Machine Learning technologies.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Priya Sharma",
      title: "Founder, InnovateLab",
      description: "Serial entrepreneur and investor who has mentored over 100 startups. Passionate about women in tech and sustainable innovation.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Amit Patel",
      title: "CTO, FutureTech",
      description: "Technology visionary with expertise in blockchain and fintech. Has raised over $50M in funding for various tech ventures.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    }
  ];

  // Event images with their corresponding unstop links
  const eventImages = [
    { 
      src: "assets/events_img/1-1.png", 
      title: "IPL AUCTION",
      link: "https://unstop.com/o/oMY7ASz?lb=zOFjqrfz&utm_medium=Share&utm_source=Creat-fly&utm_campaign=Competitions"
    },
    { 
      src: "assets/events_img/2-1.png", 
      title: "CASE CRACKERS",
      link: "https://unstop.com/o/mualq1g?lb=zOFjqrfz&utm_medium=Share&utm_source=Creat-fly&utm_campaign=Competitions"
    },
    { 
      src: "assets/events_img/3-1.png", 
      title: "THE STOCK SPRINT",
      link: "https://unstop.com/o/X8Dhmze?lb=zOFjqrfz&utm_medium=Share&utm_source=Creat-fly&utm_campaign=Competitions"
    },
    { 
      src: "assets/events_img/4-1.png", 
      title: "VERBAL COMBAT",
      link: "https://unstop.com/o/6lmskb8?lb=zOFjqrfz&utm_medium=Share&utm_source=Creat-fly&utm_campaign=Competitions"
    },
    { 
      src: "assets/events_img/5.png", 
      title: "PITCH PERFECT",
      link: "https://unstop.com/o/fG30MLD?lb=zOFjqrfz&utm_medium=Share&utm_source=Creat-fly&utm_campaign=Competitions"
    },
    { 
      src: "assets/events_img/6.png", 
      title: "BIZZAP!",
      link: "https://unstop.com/o/WndZI5P?lb=zOFjqrfz&utm_medium=Share&utm_source=Creat-fly&utm_campaign=Competitions"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16 sm:pt-20">
        {/* Hero Section */}
        <section className="section-padding relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20"></div>
          
          {/* Floating elements */}
          <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full animate-pulse floating-element"></div>
          <div className="absolute bottom-20 right-10 w-6 h-6 bg-accent rounded-full animate-pulse floating-element" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-5 w-3 h-3 bg-secondary rounded-full animate-pulse floating-element" style={{animationDelay: '4s'}}></div>
          
          <div className="container-custom relative z-10">
            <div className="text-center mb-16 animate-slide-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6 animate-bounce-in">
                <Star className="h-5 w-5 text-accent animate-pulse" />
                <span className="text-sm font-semibold">E-Summit '25</span>
              </div>
              <h1 className="heading-gradient mb-6 animate-bounce-in" style={{animationDelay: '0.2s'}}>
                E-SUMMIT '25
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{animationDelay: '0.4s'}}>
                Join India's most prestigious entrepreneurship summit. Connect with industry leaders, 
                participate in competitions, and transform your innovative ideas into reality.
              </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="card-glass p-6 text-center group hover:scale-105 transition-all duration-500 animate-slide-up"
                  style={{animationDelay: `${0.6 + index * 0.1}s`}}
                >
                  <div className="flex justify-center mb-4 text-primary group-hover:text-accent transition-colors duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm sm:text-base text-muted-foreground font-semibold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Distinguished Speakers Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="subheading-gradient mb-6">
                Our Distinguished Speakers
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Learn from industry veterans and successful entrepreneurs who have built 
                revolutionary companies and shaped the startup ecosystem.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {speakers.map((speaker, index) => (
                <div 
                  key={index}
                  className="card-glass p-6 text-center group hover:scale-105 transition-all duration-500"
                >
                  <div className="relative mb-6">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary/40 transition-colors">
                      <img 
                        src={speaker.image} 
                        alt={speaker.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                      <Star className="h-3 w-3 text-accent-foreground" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {speaker.name}
                  </h3>
                  <p className="text-primary font-semibold mb-4">
                    {speaker.title}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {speaker.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Get Fest Pass Section */}
        <section className="section-padding bg-gradient-to-r from-primary/10 via-secondary/5 to-accent/10">
          <div className="container-custom text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="subheading-gradient mb-6">
                Ready to Join the Revolution?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Don't miss out on this incredible opportunity to network with industry leaders, 
                participate in exciting competitions, and take your entrepreneurial journey to the next level.
              </p>
              <Button className="btn-hero text-lg px-8 py-4 group">
                Get Your Fest Pass
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>

        {/* Events & Competitions Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="subheading-gradient mb-6">
                Events & Competitions
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Participate in exciting competitions, workshops, and networking events 
                designed to challenge your entrepreneurial skills and expand your horizons.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {eventImages.map((event, index) => (
                <div 
                  key={index}
                  className="group cursor-pointer relative overflow-hidden rounded-2xl card-glass hover:scale-105 transition-all duration-500"
                  onClick={() => {
                    // Redirect to the unstop link for the event
                    window.open(event.link, '_blank');
                  }}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={event.src} 
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        console.error(`Failed to load image: ${event.src}`);
                        e.currentTarget.src = '/placeholder.svg';
                      }}
                      onLoad={() => {
                        console.log(`Successfully loaded image: ${event.src}`);
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-semibold text-lg mb-1">
                        {event.title}
                      </h3>
                      <p className="text-white/80 text-sm">
                        {/* blank for now  */}
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ESummit;