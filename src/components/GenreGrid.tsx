
const genres = [
  { id: 1, name: 'Action', image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&h=300&fit=crop' },
  { id: 2, name: 'Comedy', image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop' },
  { id: 3, name: 'Drama', image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=300&fit=crop' },
  { id: 4, name: 'Sci-Fi', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop' },
  { id: 5, name: 'Horror', image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop' },
  { id: 6, name: 'Romance', image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop' },
];

const GenreGrid = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Browse by genre</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {genres.map((genre) => (
          <div
            key={genre.id}
            className="relative group cursor-pointer overflow-hidden rounded-xl bg-gray-200 aspect-[4/3] transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={genre.image}
              alt={genre.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-2xl font-bold text-white">{genre.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GenreGrid;
