import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const currentHour = new Date().getHours();
  const isOpen = currentHour >= 9 && currentHour < 21;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Get in
              <span className="block text-yellow-500">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We'd love to hear from you. Reach out to learn more about our programs 
              or schedule a visit to The ArtHouse Academy.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                <Card className="p-6">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <MapPin className="text-blue-600 mt-1" size={24} />
                      <div>
                        <h3 className="font-semibold mb-2">Address</h3>
                        <p className="text-gray-600">
                          123 Creative Street<br />
                          London, UK, SW1A 1AA
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <Phone className="text-blue-600 mt-1" size={24} />
                      <div>
                        <h3 className="font-semibold mb-2">Phone</h3>
                        <p className="text-gray-600">+44 20 7123 4567</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <Mail className="text-blue-600 mt-1" size={24} />
                      <div>
                        <h3 className="font-semibold mb-2">Email</h3>
                        <p className="text-gray-600">info@arthouseacademy.co.uk</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <Clock className="text-blue-600 mt-1" size={24} />
                      <div>
                        <h3 className="font-semibold mb-2">Opening Hours</h3>
                        <div className="text-gray-600 space-y-1">
                          <p>Monday - Friday: 9:00 AM - 9:00 PM</p>
                          <p>Saturday: 9:00 AM - 6:00 PM</p>
                          <p>Sunday: 10:00 AM - 4:00 PM</p>
                          <div className="flex items-center mt-2">
                            <div className={`w-2 h-2 rounded-full mr-2 ${isOpen ? 'bg-green-500' : 'bg-red-500'}`}></div>
                            <span className={`font-medium ${isOpen ? 'text-green-600' : 'text-red-600'}`}>
                              {isOpen ? 'Open Now' : 'Closed'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                    <Facebook size={18} className="text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                    <Twitter size={18} className="text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                    <Instagram size={18} className="text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                    <Youtube size={18} className="text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
              
              <Card className="p-8">
                <CardContent className="p-0">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+44 20 1234 5678"
                      />
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us more about your inquiry..."
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      <Send size={18} className="mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Find Us</h2>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.9234567890123!2d-0.127758!3d51.507351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDAwJzEwLjAiTiAwrjAwnzAuNzJFQg!5e0!3m2!1sen!2suk!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
      <CookieConsent />
    </div>
  );
}