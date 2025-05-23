
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import GenreGrid from '../components/GenreGrid';
import NewReleases from '../components/NewReleases';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HeroSection />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
          <GenreGrid />
          <NewReleases />
        </div>
      </main>
    </div>
  );
};

export default Index;
