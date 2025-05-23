
import { Button } from '@/components/ui/button';

interface FiltersSidebarProps {
  selectedGenre: string;
  selectedYear: string;
  onGenreChange: (genre: string) => void;
  onYearChange: (year: string) => void;
}

const genres = ['Action', 'Comedy', 'Drama', 'Sci-Fi', 'Horror', 'Romance'];
const years = ['2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010'];

const FiltersSidebar = ({ selectedGenre, selectedYear, onGenreChange, onYearChange }: FiltersSidebarProps) => {
  const handleApply = () => {
    console.log('Filters applied:', { selectedGenre, selectedYear });
  };

  const handleClearFilters = () => {
    onGenreChange('');
    onYearChange('');
  };

  return (
    <div className="w-80 bg-white rounded-lg p-6 shadow-sm border h-fit">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Filters</h2>
      
      {/* Genre Filter */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-700 mb-3">Genre</h3>
        <div className="space-y-2">
          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() => onGenreChange(selectedGenre === genre ? '' : genre)}
              className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                selectedGenre === genre
                  ? 'bg-red-100 text-red-800 border border-red-200'
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
              }`}
            >
              {genre}
              {selectedGenre === genre && (
                <span className="float-right">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
      
      {/* Release Year Filter */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-700 mb-3">Release Year</h3>
        <div className="space-y-2">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => onYearChange(selectedYear === year ? '' : year)}
              className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                selectedYear === year
                  ? 'bg-red-100 text-red-800 border border-red-200'
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
              }`}
            >
              {year}
              {selectedYear === year && (
                <span className="float-right">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
      
      {/* Apply/Clear Buttons */}
      <div className="space-y-3">
        <Button onClick={handleApply} className="w-full bg-red-600 hover:bg-red-700">
          Apply
        </Button>
        <Button onClick={handleClearFilters} variant="outline" className="w-full">
          Clear Filters
        </Button>
      </div>
    </div>
  );
};

export default FiltersSidebar;
