import { stats } from "../../../data/stats";


const HeroStats = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
      {stats.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 text-center hover:shadow-lg transition duration-300"
        >
          <h2 className="text-3xl font-bold text-blue-600">{item.value}</h2>

          <p className="mt-2 text-slate-600">{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default HeroStats;
