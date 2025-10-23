import { useState } from 'react';
import { Calendar, Clock, Users, CreditCard, Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { courses } from '@/data/courses';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';

export default function Booking() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    course: '',
    experience: '',
    goals: '',
    availability: '',
    emergencyContact: '',
    emergencyPhone: '',
    terms: false
  });

  const [selectedCourse, setSelectedCourse] = useState<typeof courses[0] | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', formData, selectedCourse);
    // Handle booking submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    });

    if (name === 'course') {
      const course = courses.find(c => c.id === parseInt(value));
      setSelectedCourse(course || null);
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
              Enroll at
              <span className="block text-yellow-500">The ArtHouse</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Take the first step in your creative journey. Fill out the form below 
              to register for our programs and unlock your artistic potential.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <Card className="p-8">
                <CardContent className="p-0">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john.doe@email.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+44 20 1234 5678"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                    <Input
                      id="dateOfBirth"
                      name="dateOfBirth"
                      type="date"
                      required
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Course Selection */}
              <Card className="p-8">
                <CardContent className="p-0">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Selection</h2>
                  
                  <div>
                    <Label htmlFor="course">Select Course *</Label>
                    <select
                      id="course"
                      name="course"
                      required
                      value={formData.course}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Choose a course...</option>
                      {courses.map((course) => (
                        <option key={course.id} value={course.id}>
                          {course.title} - {course.category} - £{course.price}/lesson
                        </option>
                      ))}
                    </select>
                  </div>

                  {selectedCourse && (
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                      <h3 className="font-semibold mb-2">Course Details</h3>
                      <div className="space-y-2 text-sm">
                        <p><strong>Instructor:</strong> {selectedCourse.instructor}</p>
                        <p><strong>Duration:</strong> {selectedCourse.duration}</p>
                        <p><strong>Age Group:</strong> {selectedCourse.ageGroup}</p>
                        <p><strong>Level:</strong> {selectedCourse.level}</p>
                        <p><strong>Schedule:</strong> {selectedCourse.schedule}</p>
                      </div>
                    </div>
                  )}

                  <div className="mt-6">
                    <Label htmlFor="experience">Previous Experience</Label>
                    <Textarea
                      id="experience"
                      name="experience"
                      rows={3}
                      value={formData.experience}
                      onChange={handleChange}
                      placeholder="Tell us about your previous experience in this area..."
                    />
                  </div>

                  <div className="mt-6">
                    <Label htmlFor="goals">Your Goals</Label>
                    <Textarea
                      id="goals"
                      name="goals"
                      rows={3}
                      value={formData.goals}
                      onChange={handleChange}
                      placeholder="What do you hope to achieve through this course?"
                    />
                  </div>

                  <div className="mt-6">
                    <Label htmlFor="availability">Preferred Schedule</Label>
                    <Textarea
                      id="availability"
                      name="availability"
                      rows={2}
                      value={formData.availability}
                      onChange={handleChange}
                      placeholder="What days and times work best for you?"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="p-8">
                <CardContent className="p-0">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Emergency Contact</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="emergencyContact">Emergency Contact Name *</Label>
                      <Input
                        id="emergencyContact"
                        name="emergencyContact"
                        type="text"
                        required
                        value={formData.emergencyContact}
                        onChange={handleChange}
                        placeholder="Jane Doe"
                      />
                    </div>
                    <div>
                      <Label htmlFor="emergencyPhone">Emergency Contact Phone *</Label>
                      <Input
                        id="emergencyPhone"
                        name="emergencyPhone"
                        type="tel"
                        required
                        value={formData.emergencyPhone}
                        onChange={handleChange}
                        placeholder="+44 20 1234 5678"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Terms and Submit */}
              <Card className="p-8">
                <CardContent className="p-0">
                  <div className="mb-6">
                    <label className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        name="terms"
                        required
                        checked={formData.terms}
                        onChange={handleChange}
                        className="mt-1"
                      />
                      <span className="text-sm text-gray-600">
                        I agree to the terms and conditions, privacy policy, and understand that 
                        enrollment is subject to availability and payment confirmation.
                      </span>
                    </label>
                  </div>

                  <Button type="submit" size="lg" className="w-full" disabled={!formData.terms}>
                    <Check size={18} className="mr-2" />
                    Complete Enrollment
                  </Button>
                </CardContent>
              </Card>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Questions About Enrollment?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our team is here to help you choose the perfect program and guide you through the enrollment process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900" asChild>
              <a href="/contact">Contact Us</a>
            </Button>
            <Button size="lg" className="bg-yellow-500 text-blue-900 hover:bg-yellow-400" asChild>
              <a href="tel:+442071234567">Call Now</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <CookieConsent />
    </div>
  );
}