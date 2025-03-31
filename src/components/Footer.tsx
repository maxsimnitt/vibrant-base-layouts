
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 gradient-text">EventConnect</h3>
            <p className="text-gray-600">
              Connecting speakers, companies, and attendees for successful events.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-gray-800">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/past-events" className="text-gray-600 hover:text-primary transition-colors">
                  Past Events
                </Link>
              </li>
              <li>
                <Link to="/subscribe" className="text-gray-600 hover:text-primary transition-colors">
                  Subscribe
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-gray-600 hover:text-primary transition-colors">
                  Register
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-gray-800">Contact</h4>
            <ul className="space-y-2 text-gray-600">
              <li>Email: contact@eventconnect.com</li>
              <li>Phone: (123) 456-7890</li>
              <li>Address: 123 Event St, City, Country</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-gray-800">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                Twitter
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">
                Facebook
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} EventConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
