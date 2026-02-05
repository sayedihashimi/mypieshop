import PieCard from './PieCard';

function PieGrid({ pies }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {pies.map((pie, index) => (
        <PieCard key={index} pie={pie} index={index} />
      ))}
    </div>
  );
}

export default PieGrid;
