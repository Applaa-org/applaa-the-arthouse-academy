import { useState } from 'react';
import { Star, Filter, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { testimonials } from '@/data/testimonials';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';

export default function Testimonials() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const categories = ['All', 'Music', 'Art', 'Drama'];
  
  const filteredTestimonials = selectedFilter === 'All' 
    ? testimonials 
    : testimonials.filter(item => item.course.includes(selectedFilter));

  const averageRating = testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Student
              <span className="block text-yellow-500">Testimonials</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Hear directly from our students and parents about their experiences 
              at The ArtHouse Academy.
            </p>
            
            {/* Rating Summary */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-6 h-6 ${i < Math.floor(averageRating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <span className="text-2xl font-bold text-gray-900">{averageRating.toFixed(1)}</span>
              <span className="text-gray-600">({testimonials.length} reviews)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedFilter === category ? "default" : "outline"}
                onClick={() => setSelectedFilter(category)}
                className="flex items-center gap-2"
              >
                <Filter size={16} />
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start mb-4">
                  <Quote className="text-blue-200 mr-3" size={24} />
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="text-yellow-400 fill-current" size={16} />
                      ))}
                    </div>
                    <p className="text-gray-700 italic mb-4">"{testimonial.content}"</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-3"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <Badge variant="secondary" className="mt-1">
                      {testimonial.course}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600">Numbers that speak for themselves</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Happy Students</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">98%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-600 mb-2">25+</div>
              <div className="text-gray-600">Expert Instructors</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-500 mb-2">14</div>
              <div className="text-gray-600">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Join Our Success Stories</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Become part of our thriving creative community and write your own success story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 text-blue-900 hover:bg-yellow-400" asChild>
              <a href="/booking">Start Your Journey</a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white<dyad-problem-report summary="10 problems">
<problem file="src/pages/Index.tsx" line="5" column="25" code="2307">Cannot find module '@/data/courses' or its corresponding type declarations.</problem>
<problem file="src/pages/Index.tsx" line="6" column="30" code="2307">Cannot find module '@/data/testimonials' or its corresponding type declarations.</problem>
<problem file="src/pages/Index.tsx" line="162" column="27" code="2322">Type '`/courses#${any}`' is not assignable to type '&quot;.&quot; | &quot;..&quot; | &quot;/booking&quot; | &quot;/&quot; | &quot;/about&quot; | &quot;/courses&quot; | &quot;/gallery&quot; | &quot;/testimonials&quot; | &quot;/contact&quot;'.</problem>
<problem file="src/pages/Courses.tsx" line="6" column="37" code="2307">Cannot find module '@/data/courses' or its corresponding type declarations.</problem>
<problem file="src/pages/Courses.tsx" line="72" column="27" code="2322">Type '`/courses#${any}`' is not assignable to type '&quot;.&quot; | &quot;..&quot; | &quot;/booking&quot; | &quot;/&quot; | &quot;/about&quot; | &quot;/courses&quot; | &quot;/gallery&quot; | &quot;/testimonials&quot; | &quot;/contact&quot;'.</problem>
<problem file="src/pages/Gallery.tsx" line="5" column="30" code="2307">Cannot find module '@/data/gallery' or its corresponding type declarations.</problem>
<problem file="src/App.tsx" line="17" column="26" code="2307">Cannot find module './pages/Testimonials' or its corresponding type declarations.</problem>
<problem file="src/App.tsx" line="18" column="21" code="2307">Cannot find module './pages/Contact' or its corresponding type declarations.</problem>
<problem file="src/App.tsx" line="19" column="21" code="2307">Cannot find module './pages/Booking' or its corresponding type declarations.</problem>
<problem file="src/pages/NotFound.tsx" line="1" column="29" code="2307">Cannot find module 'react-router-dom' or its corresponding type declarations.</problem>
</dyad-problem-report><think>
</think>
I'll fix all the TypeScript errors by creating the missing pages and fixing the import issues.

<applaa-write path="src/pages/Testimonials.tsx" description="Testimonials page with student reviews">
import { useState } from 'react';
import { Star, Filter, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { testimonials } from '@/data/testimonials';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';

export default function Testimonials() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const categories = ['All', 'Music', 'Art', 'Drama'];
  
  const filteredTestimonials = selectedFilter === 'All' 
    ? testimonials 
    : testimonials.filter(item => item.course.includes(selectedFilter));

  const averageRating = testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Student
              <span className="block text-yellow-500">Testimonials</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Hear directly from our students and parents about their experiences 
              at The ArtHouse Academy.
            </p>
            
            {/* Rating Summary */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-6 h-6 ${i < Math.floor(averageRating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <span className="text-2xl font-bold text-gray-900">{averageRating.toFixed(1)}</span>
              <span className="text-gray-600">({testimonials.length} reviews)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedFilter === category ? "default" : "outline"}
                onClick={() => setSelectedFilter(category)}
                className="flex items-center gap-2"
              >
                <Filter size={16} />
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start mb-4">
                  <Quote className="text-blue-200 mr-3" size={24} />
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="text-yellow-400 fill-current" size={16} />
                      ))}
                    </div>
                    <p className="text-gray-700 italic mb-4">"{testimonial.content}"</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-3"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <Badge variant="secondary" className="mt-1">
                      {testimonial.course}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600">Numbers that speak for themselves</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Happy Students</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">98%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-600 mb-2">25+</div>
              <div className="text-gray-600">Expert Instructors</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-500 mb-2">14</div>
              <div className="text-gray-600">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Join Our Success Stories</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Become part of our thriving creative community and write your own success story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 text-blue-900 hover:bg-yellow-400" asChild>
              <a href="/booking">Start Your Journey</a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900" asChild>
              <a href="/courses">Explore Programs</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <CookieConsent />
    </div>
  );
}