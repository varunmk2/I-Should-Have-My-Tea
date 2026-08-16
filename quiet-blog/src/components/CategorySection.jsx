import React from 'react';

const categories = [
  { title: 'Entrepreneurship', img: '/images/category-entrepreneurship.svg' },
  { title: 'Sustainability', img: '/images/category-sustainability.svg' },
  { title: 'Artisans', img: '/images/category-artisans.svg' },
  { title: 'Empowerment', img: '/images/category-empowerment.svg' },
];

export default function CategorySection() {
  return (
    <section className="categories py-[clamp(2rem,5vw,6rem)]">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-white">CATEGORIES</h2>
          <div className="mt-6 space-y-6">
            {['Entrepreneurship','Sustainability','Artisans','Empowerment','Travel'].map((c) => (
              <h3 key={c} className="text-white font-heading uppercase text-[clamp(1.25rem,2.5vw,2rem)] hover:text-mustard">
                {c}
              </h3>
            ))}
          </div>
        </div>

        <div>
          <div className="grid grid-cols-2 gap-4">
            {categories.map((cat) => (
              <div key={cat.title} className="overflow-hidden">
                <img src={cat.img} alt={cat.title} className="w-full h-48 object-cover sharp-corners" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
