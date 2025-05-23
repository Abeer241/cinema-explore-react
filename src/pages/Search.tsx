
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Header from '../components/Header';
import MovieCard from '../components/MovieCard';
import FiltersSidebar from '../components/FiltersSidebar';

const movies = [
  {
    id: 1,
    title: 'The Matrix',
    year: 1999,
    poster: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop',
    genre: 'Action'
  },
  {
    id: 2,
    title: 'The Matrix Reloaded',
    year: 2003,
    poster: 'https://images.unsplash.com/photo-1489599517293-1c3be6c8ba8a?w=300&h=450&fit=crop',
    genre: 'Action'
  },
  {
    id: 3,
    title: 'The Matrix Revolutions',
    year: 2003,
    poster: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=450&fit=crop',
    genre: 'Action'
  },
  {
    id: 4,
    title: 'Inception',
    year: 2010,
    poster: 'https://images.unsplash.com/photo-1489599517293-1c3be6c8ba8a?w=300&h=450&fit=crop',
    genre: 'Sci-Fi'
  },
  {
    id: 5,
    title: 'The Dark Knight Rises',
    year: 2012,
    poster: 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop',
    genre: 'Action'
  },
  {
    id: 6,
    title: 'The Dark Knight',
    year: 2008,
    poster: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=450&fit=crop',
    genre: 'Action'
  },
  {
    id: 7,
    title: 'Interstellar',
    year: 2014,
    poster: 'https://images.unsplash.com/photo-1489599517293-1c3be6c8ba8a?w=300&h=450&fit=crop',
    genre: 'Sci-Fi'
  }
];

const Search = () => {
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMovies = movies.filter(movie => {
    const matchesGenre = !selectedGenre || movie.genre === selectedGenre;
    const matchesYear = !selectedYear || movie.year.toString() === selectedYear;
    const matchesSearch = !searchQuery || movie.title.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesGenre && matchesYear && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <FiltersSidebar 
            selectedGenre={selectedGenre}
            selectedYear={selectedYear}
            onGenreChange={setSelectedGenre}
            onYearChange={setSelectedYear}
          />
          
          {/* Main Content */}
          <div className="flex-1">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">Recommended for you</h1>
              
              {/* Search Bar */}
              <div className="mb-6">
                <Input
                  type="text"
                  placeholder="Search movies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full max-w-md"
                />
              </div>
            </div>
            
            {/* Movies Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {filteredMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
            
            {filteredMovies.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No movies found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
