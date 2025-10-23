import { Link } from '@tanstack/react-router';
import { ArrowRight, Music, Palette, Theater, Star, Users, Award, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { courses } from '@/data/courses';
import { testimonials } from '@/data/testimonials';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';

export default function Index() {
  const featuredCourses = courses.slice(0, 3);
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90 z-10"></div>
        <div 
          className="relative h-[600px] bg-cover bg-center"
          style={{ backgroundImage: 'url(https://picsum.photos/1920/600?random=100)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90"></div>
          <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Unlock Your Creative
                <span className="block text-yellow-400">Potential</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Discover the joy of music, art, and drama at The ArtHouse Academy. 
                Where creativity meets excellence in a nurturing environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-yellow-500 text-blue-900 hover:bg-yellow-400" asChild>
                  <Link to="/booking">
                    Enroll Now
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900" asChild>
                  <Link to="/courses">View Courses</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose The ArtHouse Academy?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive arts education with experienced instructors, state-of-the-art facilities, 
              and a supportive community that nurtures creativity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
                <p className="text-gray-600">Learn from industry professionals with years of teaching and performance experience.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-purple-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Proven Excellence</h3>
                <p className="text-gray-600">14 years of nurturing talent with countless success stories and award-winning students.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="text-pink-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
                <p className="text-gray-600">Weekday, weekend, and intensive summer programs to fit every schedule.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
            <p className="text-xl text-gray-600">Explore our diverse range of creative courses</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Music className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Music</h3>
              <p className="text-gray-600">Piano, Guitar, Vocal Training, and more</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Art</h3>
              <p className="text-gray-600">Painting, Drawing, Digital Art, Sculpture</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Theater className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-2">Drama</h3>
              <p className="text-gray-600">Acting, Musical Theatre, Performance Skills</p>
            </div>
          </div>
          
          <div className="text-center">
            <Button size="lg" asChild>
              <Link to="/courses">Explore All Courses</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Courses</h2>
            <p className="text-xl text-gray-600">Popular programs our students love</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${course.image})` }}></div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                      {course.category}
                    </span>
                    <span className="text-lg font-bold text-gray-900">£{course.price}/lesson</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to={`/courses#${course.id}`}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
            <p className="text-xl text-gray-600">Real stories from our creative community</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="p-6">
                <div className="flex items-center mb-4">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-3" />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link to="/testimonials">Read All Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Your Creative Journey?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of students who have discovered their passion and talent at The ArtHouse Academy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 text-blue-900 hover:bg-yellow-400" asChild>
              <Link to="/booking">Enroll Today</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900" asChild>
              <Link to="/contact">Schedule a Visit</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <CookieConsent />
    </div>
  );
}