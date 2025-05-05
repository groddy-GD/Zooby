import React from 'react';
import { Edit } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      company: "Nike",
      feedback: "Great experience working with you! Your creativity is outstanding.",
    },
    {
      id: 2,
      name: "Jane Smith",
      company: "Apple",
      feedback: "Professional and easy to work with. Highly recommended!",
    },
    {
      id: 3,
      name: "Michael Johnson",
      company: "Google",
      feedback: "Delivered beyond expectations. Looking forward to future collaborations!",
    },
  ];

  return (
    <div className="p-4 bg-white shadow-md rounded-lg">
      <div className="flex justify-between items-center mb-2">
        <span className="text-lg font-semibold">Testimonials</span>
        <button className="text-gray-600 hover:text-black">
          <Edit className="h-5 w-5" />
        </button>
      </div>
      <div className="overflow-x-auto flex space-x-4 scrollbar-hide">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="p-4 bg-gray-100 rounded-lg min-w-[250px]">
            <p className="text-sm text-gray-700 italic">"{testimonial.feedback}"</p>
            <p className="mt-2 text-sm font-semibold">- {testimonial.name}, {testimonial.company}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
