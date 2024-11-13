
export function Cards({imageo,head}) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:scale-105 p-6 space-y-4 border border-blue-100">
      <h1 className="text-2xl font-bold text-blue-800 text-center">
        {head}
      </h1>
      <p className="text-gray-700 leading-relaxed">
        Our team recently planted 1,000 new plants as part of an initiative to create greener and healthier surroundings. This project is part of our commitment to environmental sustainability, aiming to provide numerous benefits for both the community and local ecosystem. The planting process was carefully planned, with diverse species to enhance biodiversity and promote environmental health.
      </p>
      <img src={imageo} alt="Planted Trees" className="w-full h-64 rounded-lg object-cover shadow-md"/>
      <p className="text-gray-500 text-right">Work done on - 13|11|2024</p>
    </div>
  );
}