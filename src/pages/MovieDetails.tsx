
import { useParams } from 'react-router-dom';
import { Star, StarHalf, ThumbsUp, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '../components/Header';

// Mock data - in a real app this would come from an API
const movieData = {
  1: {
    id: 1,
    title: "The King's Man",
    year: 2021,
    rating: 4.6,
    runtime: "2h 12m",
    poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&h=600&fit=crop",
    backdrop: "https://images.unsplash.com/photo-1489599517293-1c3be6c8ba8a?w=1200&h=400&fit=crop",
    description: "A group of the worst tyrants and criminal masterminds in history gather to plot a war that will wipe out millions. One man must race against time to stop them.",
    genres: ["Action", "Adventure", "Thriller"],
    releaseDate: "Dec 22, 2021",
    director: "Matthew Vaughn",
    totalReviews: 50,
    ratingBreakdown: {
      5: 70,
      4: 15,
      3: 8,
      2: 2,
      1: 5
    },
    cast: [
      { name: "Ralph Fiennes", character: "Duke of Oxford", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" },
      { name: "Gemma Arterton", character: "Polly", image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face" },
      { name: "Rhys Ifans", character: "Grigori Rasputin", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" },
      { name: "Matthew Goode", character: "Tristan", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face" },
      { name: "Tom Hollander", character: "George V", image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face" }
    ],
    reviews: [
      {
        id: 1,
        author: "Movie Buff",
        date: "Jan 1, 2023",
        rating: 5,
        content: "The King's Man is a thrilling action movie with a great cast and a compelling story. The action sequences are intense and well-choreographed, and the historical setting adds an interesting layer to the film. Ralph Fiennes is excellent as the lead, and Gemma Arterton is a standout as well. The movie is a bit long, but it's worth the watch for fans of the genre.",
        likes: 5,
        dislikes: 1
      },
      {
        id: 2,
        author: "Film Fanatic",
        date: "Jan 1, 2023",
        rating: 4,
        content: "The King's Man is a fun, action-packed romp through history with a great cast and some truly impressive set pieces. The story is a bit thin at times, but the movie more than makes up for it with its exciting action sequences and stylish direction. Ralph Fiennes is fantastic in the lead role, and Gemma Arterton is a delight as always. It's not a perfect film, but it's a highly entertaining one that's well worth a watch.",
        likes: 3,
        dislikes: 0
      },
      {
        id: 3,
        author: "Cinema Lover",
        date: "Jan 1, 2023",
        rating: 5,
        content: "The King's Man is a stylish and entertaining action movie with a great cast and some truly impressive set pieces. The story is a bit convoluted at times, but the movie more than makes up for it with its exciting action sequences and slick production design. Ralph Fiennes is excellent in the lead role, and Gemma Arterton is a standout as well. It's not a groundbreaking film by any means, but it's a fun and fast-paced adventure that's sure to please fans of the genre.",
        likes: 4,
        dislikes: 0
      }
    ]
  }
};

const MovieDetails = () => {
  const { id } = useParams<{ id: string }>();
  const movie = movieData[Number(id) as keyof typeof movieData];

  if (!movie) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">Movie not found</h1>
          </div>
        </div>
      </div>
    );
  }

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="h-4 w-4 fill-red-500 text-red-500" />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="h-4 w-4 fill-red-500 text-red-500" />);
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="h-4 w-4 text-gray-300" />);
    }

    return stars;
  };

  const renderRatingBar = (stars: number, percentage: number) => (
    <div className="flex items-center gap-2 mb-1">
      <span className="text-sm w-2">{stars}</span>
      <div className="flex-1 bg-gray-200 rounded-full h-2">
        <div 
          className="bg-red-500 h-2 rounded-full" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <span className="text-sm text-gray-600 w-8">{percentage}%</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-sm mb-8 overflow-hidden">
          <div className="relative h-64 bg-gradient-to-r from-gray-900 to-gray-700">
            <img 
              src={movie.backdrop} 
              alt={movie.title}
              className="w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 flex items-center">
              <div className="flex gap-8 px-8">
                <img 
                  src={movie.poster} 
                  alt={movie.title}
                  className="w-40 h-60 object-cover rounded-lg shadow-lg"
                />
                <div className="text-white">
                  <h1 className="text-4xl font-bold mb-2">{movie.title}</h1>
                  <p className="text-gray-300 mb-4">{movie.year} • R • {movie.runtime}</p>
                  <p className="text-gray-200 max-w-2xl mb-4">{movie.description}</p>
                  <Button className="bg-red-600 hover:bg-red-700">Watch now</Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="details" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="cast">Cast & Crew</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              
              <TabsContent value="details" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Details</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-600 mb-2">Genres</h4>
                        <p>{movie.genres.join(", ")}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-600 mb-2">Release Date</h4>
                        <p>{movie.releaseDate}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-600 mb-2">Run Time</h4>
                        <p>{movie.runtime}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-600 mb-2">Rating</h4>
                        <p>R</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="cast" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Cast & Crew</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                      {movie.cast.map((actor, index) => (
                        <div key={index} className="text-center">
                          <img 
                            src={actor.image} 
                            alt={actor.name}
                            className="w-full aspect-square object-cover rounded-lg mb-2"
                          />
                          <h4 className="font-semibold text-sm">{actor.name}</h4>
                          <p className="text-xs text-gray-600">{actor.character}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="reviews" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Reviews</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {movie.reviews.map((review) => (
                        <div key={review.id} className="border-b pb-6 last:border-b-0">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                              <span className="text-sm font-semibold">{review.author[0]}</span>
                            </div>
                            <div>
                              <h4 className="font-semibold">{review.author}</h4>
                              <p className="text-sm text-gray-600">{review.date}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 mb-3">
                            {renderStars(review.rating)}
                          </div>
                          <p className="text-gray-700 mb-3">{review.content}</p>
                          <div className="flex items-center gap-4">
                            <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900">
                              <ThumbsUp className="h-4 w-4" />
                              {review.likes}
                            </button>
                            <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900">
                              <MessageSquare className="h-4 w-4" />
                              {review.dislikes}
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Rating Card */}
            <Card>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold mb-1">{movie.rating}</div>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {renderStars(movie.rating)}
                  </div>
                  <p className="text-sm text-gray-600">{movie.totalReviews} reviews</p>
                </div>
                
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((stars) => 
                    renderRatingBar(stars, movie.ratingBreakdown[stars as keyof typeof movie.ratingBreakdown])
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
