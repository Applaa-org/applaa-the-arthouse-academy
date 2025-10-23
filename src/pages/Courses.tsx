import { Link } from '@tanstack/react-router';
import { Music, Palette, Theater, Clock, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { courses, categories } from '@/data/courses';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';

export default function Courses() {
  const getCategoryIcon = (categoryName: string) => {
    switch (categoryName) {
      case 'Music': return <Music size={20} />;
      case 'Art': return <Palette size={20} />;
      case 'Drama': return <Theater size={20} />;
      default: return <Music size={20} />;
    }
  };

  const getCategoryColor = (categoryName: string) => {
    switch (categoryName) {
      case 'Music': return 'bg-blue-500';
      case 'Art': return 'bg-pink-500';
      case 'Drama': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Our Courses
              <span className="block text-yellow-500">Programs</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover our comprehensive range of music, art, and drama programs designed 
              to nurture creativity and develop artistic skills at every level.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore by Category</h2>
            <p className="text-xl text-gray-600">Find the perfect program for your interests</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Card key={category.id} className="text-center p-8 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className={`w-20 h-20 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-3xl">{category.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                  <p className="text-gray-600 mb-4">
                    {category.name === 'Music' && 'Piano, Guitar, Vocal Training, and more'}
                    {category.name === 'Art' && 'Painting, Drawing, Digital Art, Sculpture'}
                    {category.name === 'Drama' && 'Acting, Musical Theatre, Performance'}
                  </p>
                  <Button variant="outline" asChild>
                    <Link to={`/courses#${category.name.toLowerCase()}`}>View {category.name} Courses</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Courses */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">All Courses</h2>
            <p className="text-xl text-gray-600">Complete list of our available programs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow" id={`${course.category.toLowerCase()}-${course.id}`}>
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${course.image})` }}></div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={`${getCategoryColor(course.category)} text-white`}>
                      {getCategoryIcon(course.category)}
                      <span className="ml-1">{course.category}</span>
                    </Badge>
                    <span className="text-lg font-bold text-gray-900">£{course.price}/lesson</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock size={16} className="mr-2" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users size={16} className="mr-2" />
                      <span>{course.ageGroup} • {course.level}</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      <strong>Instructor:</strong> {course.instructor}
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-600 mb-4">
                    <strong>Schedule:</strong> {course.schedule}
                  </div>
                  
                  <Button className="w-full" asChild>
                    <Link to="/booking">Enroll Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Learning?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our creative community and begin your artistic journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 text-blue-900 hover:bg-yellow-400" asChild>
              <Link to="/booking">Enroll Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900" asChild>
              <Link to="/contact">Get More Info</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <CookieConsent />
    </div>
  );
}