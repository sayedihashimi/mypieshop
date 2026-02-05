import PieGrid from '../components/home/PieGrid';
import piesData from '../data/pies.json';

function Home() {
  return (
    <div>
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Our Pies</h1>
        <p className="text-gray-600">Handcrafted with love, baked to perfection</p>
      </div>
      <PieGrid pies={piesData} />
    </div>
  );
}

export default Home;
