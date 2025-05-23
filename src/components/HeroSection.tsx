
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    navigate('/search');
  };

  return (
    <section className="relative h-96 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 flex items-center justify-center">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
          Find your next favorite movie
        </h1>
        
        {/* Search Form */}
        <form onSubmit={handleSearch} className="flex max-w-2xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search for movies, actors, directors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-14 text-lg rounded-r-none border-r-0 focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
          </div>
          <Button 
            type="submit" 
            className="h-14 px-8 text-lg font-semibold bg-red-600 hover:bg-red-700 rounded-l-none"
          >
            Search
          </Button>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;
