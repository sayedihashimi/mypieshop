import PieGrid from '../components/home/PieGrid';
import piesData from '../data/pies.json';

function Home() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Hello, <span className="text-primary-600">Pies!</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Handcrafted with love in Shartlesville, PA. Each pie is made from scratch 
          using locally-sourced ingredients and family recipes passed down through generations.
        </p>
        <div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Made Fresh Daily
          </span>
          <span className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Local Ingredients
          </span>
          <span className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Free Shipping
          </span>
        </div>
      </div>
      
      {/* Pie Grid */}
      <PieGrid pies={piesData} />
    </div>
  );
}

export default Home;
