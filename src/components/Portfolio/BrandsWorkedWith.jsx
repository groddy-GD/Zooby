import React, { useState } from 'react';
import { Edit } from 'lucide-react';

const BrandsWorkedWith = () => {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const brands = ["Nike", "Adidas", "Apple", "Samsung", "Gucci", "Coca-Cola", "Pepsi", "Amazon", "Google", "Netflix"];

  const toggleBrand = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <div className="flex justify-between items-center mb-2">
        <span className="text-lg font-semibold">Brands Worked With</span>
        <button className="text-gray-600 hover:text-black">
          <Edit className="h-5 w-5" />
        </button>
      </div>
      <div className="flex overflow-x-auto space-x-2 scrollbar-hide">
        {brands.map((brand) => (
          <button
            key={brand}
            className={`px-4 py-2 whitespace-nowrap rounded-lg ${
              selectedBrands.includes(brand) ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'
            }`}
            onClick={() => toggleBrand(brand)}
          >
            {brand}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BrandsWorkedWith;
