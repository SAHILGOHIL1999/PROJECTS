import React from 'react';

const About = () => {
  const skills = ["React", "C++", "Tailwind CSS", "JavaScript", "Data Structures", "Vite"];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="w-full h-96 bg-slate-200 rounded-2xl overflow-hidden shadow-2xl">
            {/* Replace with your actual image */}
            <div className="flex items-center justify-center h-full text-slate-400">Profile Image</div>
          </div>
        </div>
        
        <div>
          <h2 className="text-4xl font-bold text-slate-900 mb-6 underline decoration-cyan-500 decoration-4">About Me</h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            I'm a software development enthusiast with a deep interest in both high-level front-end frameworks 
            and low-level system logic. Whether it's crafting an e-commerce UI or optimizing C++ algorithms, 
            I enjoy the challenge of solving complex problems.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill) => (
              <div key={skill} className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-cyan-500 rounded-full"></span>
                <span className="text-slate-700 font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;