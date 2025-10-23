import { Link } from '@tanstack/react-router';
import { Heart, Target, Users, Award, Calendar, MapPin, Music, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';

export default function About() {
  const team = [
    {
      name: "Sarah Mitchell",
      role: "Founder & Director",
      bio: "Royal Academy of Music graduate with 20+ years of teaching experience",
      image: "https://picsum.photos/200/200?random=50"
    },
    {
      name: "James Thompson",
      role: "Music Department Head",
      bio: "Professional vocalist and composer with extensive performance background",
      image: "https://picsum.photos/200/200?random=51"
    },
    {
      name: "Emma Roberts",
      role: "Art Department Head",
      bio: "Fine Arts graduate specializing in contemporary and traditional techniques",
      image: "https://picsum.photos/200/200?random=52"
    },
    {
      name: "Rachel Green",
      role: "Drama Department Head",
      bio: "Theatre director and acting coach with West End experience",
      image: "https://picsum.photos/200/200?random=53"
    }
  ];

  const stats = [
    { number: "500+", label: "Students" },
    { number: "14", label: "Years of Excellence" },
    { number: "25+", label: "Expert Instructors" },
    { number: "98%", label: "Satisfaction Rate" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              About The ArtHouse
              <span className="block text-yellow-500">Academy</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Where creativity flourishes and artistic dreams become reality
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2010 by Sarah Mitchell, The ArtHouse Academy began as a small music studio 
                with a big vision: to make quality arts education accessible to everyone in our community.
              </p>
              <p className="text-gray-600 mb-4">
                What started with just 15 students and 3 instructors has grown into a thriving creative 
                hub with over 500 students, 25+ expert instructors, and comprehensive programs in music, 
                art, and drama.
              </p>
              <p className="text-gray-600 mb-6">
                Our beautiful facility in the heart of London features state-of-the-art studios, 
                performance spaces, and exhibition areas where students can showcase their talents 
                and celebrate their achievements.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">Schedule a Visit</Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://picsum.photos/600/400?random=60" 
                alt="Our Academy" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-500 text-blue-900 p-6 rounded-lg shadow-lg">
                <p className="text-2xl font-bold">14 Years</p>
                <p className="text-sm">of Creative Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to nurturing creativity, building confidence, and inspiring excellence 
              in every student who walks through our doors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Heart className="text-red-500 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-2">Passion-Driven Learning</h3>
                <p className="text-gray-600">
                  We believe that genuine passion is the foundation of artistic excellence and lifelong learning.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Target className="text-blue-500 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-2">Excellence in Education</h3>
                <p className="text-gray-600">
                  We maintain the highest standards in teaching, curriculum, and student support.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Users className="text-purple-500 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold mb-2">Inclusive Community</h3>
                <p className="text-gray-600">
                  We welcome students of all ages, abilities, and backgrounds into our creative family.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Teaching Philosophy</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Individualized Attention</h3>
                  <p className="text-gray-600">
                    Small class sizes ensure personalized instruction and tailored learning paths for each student.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Performance Opportunities</h3>
                  <p className="text-gray-600">
                    Regular recitals, exhibitions, and productions help students build confidence and showcase progress.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-pink-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Holistic Development</h3>
                  <p className="text-gray-600">
                    We focus on technical skills, creative expression, and personal growth in equal measure.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-yellow-600 font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Lifelong Learning</h3>
                  <p className="text-gray-600">
                    We instill a love for the arts that extends beyond the classroom into everyday life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-gray-600">Dedicated professionals committed to your success</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center overflow-hidden">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${member.image})` }}></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-blue-600 mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">State-of-the-Art Facilities</h2>
            <p className="text-xl text-gray-600">Designed to inspire creativity and facilitate learning</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Music className="text-blue-600" size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Music Studios</h3>
              <p className="text-gray-600">
                Soundproofed rooms with professional instruments and recording equipment
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="text-pink-600" size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Art Workshops</h3>
              <p className="text-gray-600">
                Spacious, well-lit studios with easels, pottery wheels, and digital art stations
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-purple-600" size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Performance Theatre</h3>
              <p className="text-gray-600">
                200-seat theatre with professional lighting, sound, and stage equipment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Join Our Creative Family</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Discover why hundreds of students choose The ArtHouse Academy for their artistic education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 text-blue-900 hover:bg-yellow-400" asChild>
              <Link to="/booking">Start Your Journey</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900" asChild>
              <Link to="/courses">Explore Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <CookieConsent />
    </div>
  );
}