import { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start space-x-3">
            <Cookie className="mt-1 text-yellow-400" size={20} />
            <div className="flex-1">
              <h4 className="font-semibold mb-1">Cookie Notice</h4>
              <p className="text-sm text-gray-300">
                We use cookies to enhance your experience, analyze site traffic, and personalize content. 
                By continuing to use our site, you agree to our use of cookies in accordance with our 
                <a href="#" className="underline hover:text-white ml-1">Privacy Policy</a>.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" onClick={declineCookies} className="text-white border-white hover:bg-white hover:text-gray-900">
              Decline
            </Button>
            <Button size="sm" onClick={acceptCookies} className="bg-yellow-500 text-gray-900 hover:bg-yellow-400">
              Accept All
            </Button>
            <button
              onClick={() => setIsVisible(false)}
              className="p-1 hover:bg-gray-800 rounded"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}