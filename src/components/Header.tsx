
import { Search, Bell, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900">Movies Explorer</h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
              For You
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
              Top Charts
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
              Premium
            </a>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <User className="h-5 w-5" />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
