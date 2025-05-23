
const newMovies = [
  { id: 1, title: 'Dune: Part Two', image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=450&fit=crop', year: 2024, rating: 8.7 },
  { id: 2, title: 'Oppenheimer', image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=300&h=450&fit=crop', year: 2023, rating: 8.4 },
  { id: 3, title: 'Spider-Verse', image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=300&h=450&fit=crop', year: 2023, rating: 8.9 },
  { id: 4, title: 'Barbie', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=450&fit=crop', year: 2023, rating: 7.2 },
  { id: 5, title: 'John Wick 4', image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=450&fit=crop', year: 2023, rating: 7.8 },
  { id: 6, title: 'The Batman', image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=300&h=450&fit=crop', year: 2022, rating: 7.9 },
];

const NewReleases = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">New releases</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {newMovies.map((movie) => (
          <div
            key={movie.id}
            className="group cursor-pointer transition-all duration-300 hover:scale-105"
          >
            <div className="relative overflow-hidden rounded-lg bg-gray-200 aspect-[2/3] mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{movie.year}</span>
                  <span className="text-sm font-bold bg-yellow-500 text-black px-2 py-1 rounded">
                    {movie.rating}
                  </span>
                </div>
              </div>
            </div>
            <h3 className="font-semibold text-gray-900 text-sm leading-tight line-clamp-2">
              {movie.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewReleases;
