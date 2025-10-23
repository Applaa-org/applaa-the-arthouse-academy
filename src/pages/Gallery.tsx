import { useState } from 'react';
import { Filter, X, ZoomIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { galleryItems } from '@/data/gallery';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  const categories = ['All', 'Music', 'Art', 'Drama'];
  
  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Our Gallery
              <span className="block text-yellow-500">Showcase</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Explore the amazing work and performances of our talented students 
              across music, art, and drama programs.
            </p>
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
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="flex items-center gap-2"
              >
                <Filter size={16} />
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
                <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }}>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => setSelectedImage(item)}
                    >
                      <ZoomIn size={16} className="mr-2" />
                      View
                    </Button>
                  </div>
                  <div className="absolute top-2 right-2">
                    <span className="bg-white/90 px-2 py-1 rounded text-xs font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl w-full">
            <Button
              variant="secondary"
              size="sm"
              className="absolute top-4 right-4 z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X size={20} />
            </Button>
            <img 
              src={selectedImage.image} 
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg"
            />
            <div className="bg-white p-6 rounded-b-lg">
              <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-gray-600 mb-2">{selectedImage.description}</p>
              <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {selectedImage.category}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Create Your Own Masterpiece</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our programs and see your work featured in our gallery next!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 text-blue-900 hover:bg-yellow-400" asChild>
              <a href="/courses">Explore Courses</a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900" asChild>
              <a href="/booking">Get Started</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <CookieConsent />
    </div>
  );
}