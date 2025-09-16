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
  desc?: string;
}

const Team = () => {
  // Sample team members - you can edit this data
  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'Shivam Mudgal',
      department: '',
      image: 'src/assets/20250830_111558_0000 - Shivam Mudgal.png',
      position: 'Secretoary',
      desc: 'Hi, I am Shivam Mudgal, Secretary of the Entrepreneurship Cell, LNCTE. At E-Cell, my focus is on building a strong startup culture by organizing impactful events, fostering innovation, and connecting students with mentors and industry experts. I believe entrepreneurship is about solving real problems and creating opportunities, and I strive to make E-Cell a platform where ideas turn into action.'
    },
    {
      id: '2',
      name: 'Harsh Gupta',
      department: '',
      image: 'src/assets/IMG20250815164131 - Harsh Gupta.jpg',
      position: 'Executive',
      desc: 'Hello everyone, I am Harsh Gupta, Executive at E-Cell, LNCTE. Were passionate about fostering entrepreneurship, innovation, and creativity among students. Lets collaborate, share ideas, and work together to make a difference!'
    },
    {
      id: '3',
      name: 'Pooja Singh',
      department: '',
      image: 'src/assets/Screenshot_20250830-224455_Gallery - POOJA_ SINGH 10C.jpg',
      position: 'Social Media',
      desc:'I am the Social Media Manager at E-Cell LNCTE, My role is to manage content, build engagement, and showcase the entrepreneurial spirit of our cell through impactful social media strategies.'
    },
    {
      id: '4',
      name: 'Shourya Gupta',
      department: 'CSE',
      image: 'src/assets/WhatsApp Image 2025-04-26 at 13.01.33_ee20a3cb - Shourya Gupta.jpg',
      position: 'Technical Team',
      desc: 'I am the Technical Team Lead at E-Cell LNCTE, My role is to manage the technical aspects of our cell, including website development, app development, and other technical projects.'
    },
    {
      id: '5',
      name: 'Nishtha Deshmukh',
      department: 'CSE',
      image: 'src/assets/IMG_20241228_194931_113 - Nishtha Deshmukh.jpg',
      position: 'Sponsorship and Operations Head',
      desc: 'I am the Sponsorship and Operations Head at E-Cell LNCTE, My role is to manage the sponsorship and operations of our cell, including event planning, logistics, and other operational tasks.'
    },
    {
      id: '6',
      name: 'Ashish Sahu',
      department: '',
      image: 'src/assets/1 - Ashish Sahu.png',
      position: 'Executive',
      desc: 'Hello, I am Ashish  Executive at the Entrepreneurship Cell. I am passionate about innovation, leadership, and creating platforms where ideas grow into impactful ventures. At E-Cell, I work to empower budding entrepreneurs, foster collaboration, and drive initiatives that inspire creativity, problem-solving, and sustainable growth in the startup ecosystem'
    },
    {
      id: '7',
      name: 'Shreya',
      department: '',
      image: 'src/assets/IMG_20250709_221727 - Shreya.jpg',
      position: 'Content Creation',
      desc: 'Myself Shreya Shukla and I go by my first name officially. I work as Content Creator head at ECell LNCTE and take care content related stuff at ECell such as blogs, captions , forum notes etc.'
    },
    {
      id: '8',
      name: 'Bhagyashree',
      department: '',
      image: '',
      position: 'Marketing',
      desc: 'Hi, I am Bhagyashree. I believe good marketing is not about selling, its about storytelling. I am here at E-Cell to learn, experiment, and create campaigns that people remember.'
    },
    {
      id: '9',
      name: 'Khushi Jain',
      department: '',
      image: 'src/assets/20250709_215825 - khushi jain.jpg',
      position: 'Social Media',
      desc: 'Graphic Designer at E-Cell LNCTE, crafting impactful visuals for innovation.'
    },
    {
      id: '10',
      name: 'Pushpendra Verman',
      department: 'EC',
      image: '',
      position: 'Video Editor',
      desc: 'Video Editor at E-Cell LNCTE, crafting engaging content for innovation.'
    },
    {
      id: '11',
      name: 'Adarsh Patidar',
      department: 'Civil Engineering',
      image: 'src/assets/IMG-20231109-WA0026 - Adarsh Patidar.jpg',
      position: 'Treasurer',
      desc: 'I am Adarsh Patidar, pursuing my Btech from civil Engineering from LNCT college and I am treasurer in E Cell LNCTE'
    },
    {
      id: '12',
      name: 'Neha Sethiya',
      department: 'CSE-DS',
      image: 'src/assets/20250709_234552 - Neha Sethiya.jpg',
      position: '',
      desc: 'I am  Neha Sethiya. I am from Jaora(Ratlam), Madhya Pradesh. I am currently pursuing B.tech in Computer Science and Engineering with specialization in Data Science at Lakshmi Narain College of Technology Excellence Bhopal , Madhya Pradesh. I am an active member of my college E-Cell at the position of Marketing Team, where I have contributed to promoting and organizing events. Along with academics, I am passionate about learning new technologies, problem-solving, and enhancing my communication skills.'
    },
    {
      id: '13',
      name: 'Tanishka Shrivastava',
      department: '',
      image: 'src\assets\IMG20250709192629 - Tanishka Shrivastava.jpg',
      position: 'Graphic Designer',
      desc: 'Hi, I am Tanishka Shrivastava from LNCTE pursuing BTech form LNCTE and currently working as a graphic designer in Ecell lncte , I am a budding graphic designer who loves experimenting with styles and adding my own creativity'
    },
    {
      id: '14',
      name: 'Khushi Soni',
      department: 'CSE',
      image: 'src\assets\IMG-20250709-WA0065 - Khushi Soni.jpg',
      position: 'Outreach and PR Team',
      desc: 'I am Khushi, a Computer Science Engineering student at LNCT and a member of the E-Cell PR team. I am passionate about innovation, communication, and exploring new opportunities to connect ideas with people. '
    },
    {
      id: '15',
      name: 'Ajitesh Vishwakarma',
      department: 'CSE-AIML',
      image: '',
      position: 'Technical Team',
      desc: 'I am Ajitesh Vishwakarma, a Computer Science Engineering student at LNCT and a member of the E-Cell Technical Team. I am passionate about innovation, problem-solving, and exploring new opportunities to connect ideas with people.'
    },


  ]

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