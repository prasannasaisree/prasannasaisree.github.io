
import { Link } from "react-router-dom";
import { Youtube } from "lucide-react";

interface HeaderProps {
  onNavClick: () => void;
}

const Header = ({ onNavClick }: HeaderProps) => {
  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-800">Prasanna Saisree</h1>
          </div>
          <div className="flex space-x-6">
            <Link to="/" onClick={onNavClick} className="text-gray-700 hover:text-orange-600 transition-colors">Home</Link>
            <Link to="/about" onClick={onNavClick} className="text-gray-700 hover:text-orange-600 transition-colors">About</Link>
            <Link to="/youtube" onClick={onNavClick} className="text-gray-700 hover:text-orange-600 transition-colors flex items-center space-x-1">
              <Youtube size={16} />
              <span>Videos</span>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
