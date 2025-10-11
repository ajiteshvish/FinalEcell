import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Linkedin } from 'lucide-react';
// Badge removed; roles are rendered as text under names

interface Person {
  id: string;
  name: string;
  role?: string;
  image?: string;
  about?: string;
  email?: string;
  linkedin?: string;
}

type Section =
  | { kind: 'single'; title: string; person: Person }
  | { kind: 'pair'; title: string; people: Person[] }
  | { kind: 'headChildren'; title: string; head: Person; members: Person[] };

const Team = () => {
  // Sections in the requested order with contact information
  const sections: Section[] = [
    {
      kind: 'single',
      title: 'PRESIDENT & LEAD',
      person: { 
        id: 'president', 
        name: 'Sarvesh Kumar', 
        role: 'President & Lead', 
        image: '/team/hero-bg.jpg',
        email: 'sarvesh.kumar@ecell.com',
        linkedin: 'https://linkedin.com/in/sarvesh-kumar'
      }
    },
    {
      kind: 'single',
      title: 'VICE PRESIDENT',
      person: { 
        id: 'vp', 
        name: 'Vraddhi Srivastava', 
        role: 'Vice President',
        email: 'vraddhi.srivastava@ecell.com',
        linkedin: 'https://linkedin.com/in/vraddhi-srivastava'
      }
    },
    {
      kind: 'single',
      title: 'SECRETARY',
      person: { 
        id: 'sec', 
        name: 'Shivam Mudgal', 
        role: 'Secretary', 
        image: '/team/20250830_111558_0000 - Shivam Mudgal.png',
        email: 'shivam.mudgal@ecell.com',
        linkedin: 'https://linkedin.com/in/shivam-mudgal'
      }
    },
    {
      kind: 'single',
      title: 'TREASURER',
      person: { 
        id: 'treasurer', 
        name: 'Adarsh Patidar', 
        role: 'Treasurer', 
        image: '/team/IMG-20231109-WA0026 - Adarsh Patidar.jpg',
        email: 'adarsh.patidar@ecell.com',
        linkedin: 'https://linkedin.com/in/adarsh-patidar'
      }
    },
    {
      kind: 'headChildren',
      title: 'SOCIAL MEDIA TEAM',
      head: { 
        id: 'sm-head', 
        name: 'Pooja Singh', 
        role: 'Social Media Head', 
        image: '/team/Screenshot_20250830-224455_Gallery - POOJA_ SINGH 10C.jpg',
        email: 'pooja.singh@ecell.com',
        linkedin: 'https://linkedin.com/in/pooja-singh'
      },
      members: [
        { 
          id: 'sm-1', 
          name: 'Tanishka Shrivastava', 
          role: 'Graphic Designer', 
          image: '/team/IMG20250709192629 - Tanishka Shrivastava.jpg',
          email: 'tanishka.shrivastava@ecell.com',
          linkedin: 'https://linkedin.com/in/tanishka-shrivastava'
        },
        { 
          id: 'sm-2', 
          name: 'Khushi Jain', 
          role: 'Graphic Designer', 
          image: '/team/20250709_215825 - khushi jain.jpg',
          email: 'khushi.jain@ecell.com',
          linkedin: 'https://linkedin.com/in/khushi-jain'
        },
        { 
          id: 'sm-3', 
          name: 'Pushpendra Verma', 
          role: 'Video Editor', 
          image: '/team/IMG_20250902_202245 - Satyam Verman.jpg',
          email: 'pushpendra.verma@ecell.com',
          linkedin: 'https://linkedin.com/in/pushpendra-verma'
        }
      ]
    },
    {
      kind: 'pair',
      title: 'TECHNICAL TEAM',
      people: [
        { 
          id: 'tech-1', 
          name: 'Ajitesh Vishwakarma', 
          role: 'Technical Team', 
          image: '/team/IMG_20250607_141840.jpg',
          email: 'ajitesh.vishwakarma@ecell.com',
          linkedin: 'https://linkedin.com/in/ajitesh-vishwakarma'
        },
        { 
          id: 'tech-2', 
          name: 'Shourya Gupta', 
          role: 'Technical Team', 
          image: '/team/WhatsApp Image 2025-04-26 at 13.01.33_ee20a3cb - Shourya Gupta.jpg',
          email: 'shourya.gupta@ecell.com',
          linkedin: 'https://linkedin.com/in/shourya-gupta'
        }
      ]
    },
    {
      kind: 'pair',
      title: 'OUTREACH & PR TEAM',
      people: [
        { 
          id: 'pr-1', 
          name: 'Khushi Soni', 
          role: 'Outreach & PR Team', 
          image: '/team/IMG-20250709-WA0065 - Khushi Soni.jpg',
          email: 'khushi.soni@ecell.com',
          linkedin: 'https://linkedin.com/in/khushi-soni'
        },
        { 
          id: 'pr-2', 
          name: 'Shivam Kumar', 
          role: 'Outreach & PR Team',
          email: 'shivam.kumar@ecell.com',
          linkedin: 'https://linkedin.com/in/shivam-kumar'
        }
      ]
    },
    {
      kind: 'pair',
      title: 'EXECUTIVE TEAM',
      people: [
        { 
          id: 'exec-1', 
          name: 'Ashish Sahu', 
          role: 'Executive', 
          image: '/team/1 - Ashish Sahu.png',
          email: 'ashish.sahu@ecell.com',
          linkedin: 'https://linkedin.com/in/ashish-sahu'
        },
        { 
          id: 'exec-2', 
          name: 'Harsh Gupta', 
          role: 'Executive', 
          image: '/team/IMG20250815164131 - Harsh Gupta.jpg',
          email: 'harsh.gupta@ecell.com',
          linkedin: 'https://linkedin.com/in/harsh-gupta'
        }
      ]
    },
    {
      kind: 'pair',
      title: 'LOGISTIC & EVENT TEAM',
      people: [
        { 
          id: 'log-1', 
          name: 'Tanu Agrawal', 
          role: 'Logistic & Event Team',
          email: 'tanu.agrawal@ecell.com',
          linkedin: 'https://linkedin.com/in/tanu-agrawal'
        },
        { 
          id: 'log-2', 
          name: 'Vedant Sah', 
          role: 'Logistic & Event Team',
          email: 'vedant.sah@ecell.com',
          linkedin: 'https://linkedin.com/in/vedant-sah'
        }
      ]
    },
    {
      kind: 'headChildren',
      title: 'MARKETING TEAM',
      head: { 
        id: 'mkt-head', 
        name: 'Aditi Harinkhere', 
        role: 'Marketing Head',
        email: 'aditi.harinkhere@ecell.com',
        linkedin: 'https://linkedin.com/in/aditi-harinkhere'
      },
      members: [
        { 
          id: 'mkt-1', 
          name: 'Bhagyashree', 
          role: 'Marketing Team', 
          image: '/team/Camera-1231719718 - Mishu.jpg',
          email: 'bhagyashree@ecell.com',
          linkedin: 'https://linkedin.com/in/bhagyashree'
        },
        { 
          id: 'mkt-2', 
          name: 'Neha Sethiya', 
          role: 'Marketing Team', 
          image: '/team/20250709_234552 - Neha Sethiya.jpg',
          email: 'neha.sethiya@ecell.com',
          linkedin: 'https://linkedin.com/in/neha-sethiya'
        }
      ]
    },
    {
      kind: 'headChildren',
      title: 'CONTENT CREATION TEAM',
      head: { 
        id: 'content-head', 
        name: 'Shreya Shukla', 
        role: 'Content Creator Head', 
        image: '/team/IMG_20250709_221727 - Shreya.jpg',
        email: 'shreya.shukla@ecell.com',
        linkedin: 'https://linkedin.com/in/shreya-shukla'
      },
      members: [
        { 
          id: 'content-1', 
          name: 'Shaikh Asad UI Hasan', 
          role: 'Videographer',
          email: 'asad.hasan@ecell.com',
          linkedin: 'https://linkedin.com/in/asad-hasan'
        },
        { 
          id: 'content-2', 
          name: 'Saloni Nema', 
          role: 'Photographer',
          email: 'saloni.nema@ecell.com',
          linkedin: 'https://linkedin.com/in/saloni-nema'
        }
      ]
    },
    {
      kind: 'headChildren',
      title: 'OPERATION & SPONSORSHIP TEAM',
      head: { 
        id: 'ops-head', 
        name: 'Nishtha Deshmukh', 
        role: 'Operation & Sponsorship Head', 
        image: '/team/IMG_20241228_194931_113 - Nishtha Deshmukh.jpg',
        email: 'nishtha.deshmukh@ecell.com',
        linkedin: 'https://linkedin.com/in/nishtha-deshmukh'
      },
      members: [
        { 
          id: 'ops-1', 
          name: 'Rewansh Vaidya', 
          role: 'Operation & Sponsorship Team',
          email: 'rewansh.vaidya@ecell.com',
          linkedin: 'https://linkedin.com/in/rewansh-vaidya'
        },
        { 
          id: 'ops-2', 
          name: 'Devansh Shrivastava', 
          role: 'Operation & Sponsorship Team',
          email: 'devansh.shrivastava@ecell.com',
          linkedin: 'https://linkedin.com/in/devansh-shrivastava'
        }
      ]
    }
  ];

  const renderCard = (p: Person, isHead?: boolean) => (
    <Card key={p.id} className="group hover:shadow-lg transition-all duration-300 border border-border/50 bg-card/50 backdrop-blur-sm">
      <CardContent className="p-6 text-center">
        <div className="relative mb-4">
          <img
            src={p.image || '/placeholder.svg'}
            alt={p.name}
            className={`mx-auto object-cover rounded-full border-4 border-primary/20 group-hover:border-primary/40 transition-colors duration-300 ${isHead ? 'w-36 h-36' : 'w-32 h-32'}`}
          />
          {/* Contact Icons - Show on hover */}
          {(p.email || p.linkedin) && (
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 rounded-full">
              <div className="flex gap-3">
                {p.email && (
                  <button
                    onClick={() => window.open(`mailto:${p.email}`, '_blank')}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200"
                    title={`Email ${p.name}`}
                  >
                    <Mail className="h-5 w-5 text-white" />
                  </button>
                )}
                {p.linkedin && (
                  <button
                    onClick={() => window.open(p.linkedin, '_blank')}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200"
                    title={`LinkedIn Profile`}
                  >
                    <Linkedin className="h-5 w-5 text-white" />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-1">{p.name}</h3>
        {p.role && <p className="text-muted-foreground mb-2">{p.role}</p>}
        {p.about && <p className="text-sm text-muted-foreground">{p.about}</p>}
      </CardContent>
    </Card>
  );

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

        {/* Ordered Sections */}
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            {sections.map((section) => (
              <div key={section.title} className="mb-16">
                <h2 className="text-3xl font-bold text-center mb-8 text-foreground">{section.title}</h2>
                {section.kind === 'single' && (
                  <div className="max-w-md mx-auto">{renderCard(section.person, true)}</div>
                )}
                {section.kind === 'pair' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto justify-items-center">
                    {section.people.map((p) => (
                      <div key={p.id}>{renderCard(p)}</div>
                    ))}
                  </div>
                )}
                {section.kind === 'headChildren' && (
                  <div className="max-w-5xl mx-auto">
                    <div className="mb-8 max-w-md mx-auto">{renderCard(section.head, true)}</div>
                    <div
                      className={`grid gap-6 sm:gap-8 justify-items-center mx-auto ${
                        section.members.length === 3
                          ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-5xl'
                          : 'grid-cols-1 sm:grid-cols-2 max-w-3xl'
                      }`}
                    >
                      {section.members.map((m) => (
                        <div key={m.id}>{renderCard(m)}</div>
                      ))}
                    </div>
                  </div>
                )}
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