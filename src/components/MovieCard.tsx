
interface Movie {
  id: number;
  title: string;
  year: number;
  poster: string;
  genre: string;
}

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-lg bg-gray-200 aspect-[2/3] transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-white font-semibold text-sm mb-1">{movie.title}</h3>
          <p className="text-gray-300 text-xs">{movie.year}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
