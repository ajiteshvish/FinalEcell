import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface TeamMember {
  id: string;
  name: string;
  department: string;
  image: string;
  position?: string;
}

const Team = () => {
  // Sample team members - you can edit this data
  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'John Doe',
      department: 'Technical',
      image: '/placeholder.svg',
      position: 'Lead Developer'
    },
    {
      id: '2',
      name: 'Jane Smith',
      department: 'Marketing',
      image: '/placeholder.svg',
      position: 'Marketing Head'
    },
    {
      id: '3',
      name: 'Mike Johnson',
      department: 'Events',
      image: '/placeholder.svg',
      position: 'Event Coordinator'
    },
    {
      id: '4',
      name: 'Sarah Wilson',
      department: 'Finance',
      image: '/placeholder.svg',
      position: 'Finance Manager'
    },
    {
      id: '5',
      name: 'Alex Brown',
      department: 'Technical',
      image: '/placeholder.svg',
      position: 'Frontend Developer'
    },
    {
      id: '6',
      name: 'Emily Davis',
      department: 'Design',
      image: '/placeholder.svg',
      position: 'UI/UX Designer'
    }
  ];

  // Group team members by department
  const departmentGroups = teamMembers.reduce((groups, member) => {
    if (!groups[member.department]) {
      groups[member.department] = [];
    }
    groups[member.department].push(member);
    return groups;
  }, {} as Record<string, TeamMember[]>);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16 sm:pt-20">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Our Team
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the passionate individuals driving innovation and entrepreneurship at E-CELL LNCTE
            </p>
          </div>
        </section>

        {/* Team Members by Department */}
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            {Object.entries(departmentGroups).map(([department, members]) => (
              <div key={department} className="mb-16">
                <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
                  {department} Department
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {members.map((member) => (
                    <Card key={member.id} className="group hover:shadow-lg transition-all duration-300 border border-border/50 bg-card/50 backdrop-blur-sm">
                      <CardContent className="p-6 text-center">
                        <div className="relative mb-4">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-primary/20 group-hover:border-primary/40 transition-colors duration-300"
                          />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {member.name}
                        </h3>
                        {member.position && (
                          <p className="text-muted-foreground mb-3">
                            {member.position}
                          </p>
                        )}
                        <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                          {member.department}
                        </Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Add Team Member Section (for future functionality) */}
        <section className="py-12 sm:py-16 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Want to Join Our Team?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're always looking for passionate individuals to join our entrepreneurship community
            </p>
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
              Get In Touch
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Team;