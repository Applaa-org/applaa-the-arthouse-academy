import { Link } from '@tanstack/react-router';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <Header />
      
      <div className="flex items-center justify-center py-20">
        <div className="text-center max-w-2xl mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-gray-300">404</h1>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-xl text-gray-600 mb-8">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/">
                <Home size={18} className="mr-2" />
                Go Home
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">
                <ArrowLeft size={18} className="mr-2" />
                Back to Previous Page
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
      <CookieConsent />
    </div>
  );
}