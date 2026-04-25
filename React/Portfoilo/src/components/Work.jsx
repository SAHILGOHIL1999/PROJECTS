import React from 'react';

const Work = () => {
  const projects = [
    {
      title: "Shofy E-commerce",
      image: "https://ceymox.com/wp-content/uploads/2024/09/Shopify-White-Logo.jpg"
    },
    {
      title: "Hospital Management System",
      image: "https://media.licdn.com/dms/image/v2/C5612AQHXpElnKlgFTA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1631271495780?e=2147483647&v=beta&t=7X8xkG6SGNSTjwqTeNgVBuE3pCNxbYwNcraoBbnlZ44"
    },
    {
      title: "C++ Programming",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyKowMg0WmKycOmEGsy2iujcr4XMq5xgS-bQ&s"
    }
  ];

  return (
    <section id="work" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">Selected Work</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="group bg-white rounded-xl shadow-md overflow-hidden border border-slate-100 hover:shadow-xl transition duration-300">
              
              {/* Image Container */}
              <div className="h-52 overflow-hidden bg-slate-200">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Text Container */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 text-center group-hover:text-cyan-600 transition">
                  {p.title}
                </h3>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;