import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-slate-950 overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
          Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Digital Solutions</span>
        </h1>
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Software learner and developer specializing in building exceptional digital experiences.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="#work" className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold py-3 px-8 rounded-full transition duration-300">
            View Work
          </a>
          <a href="#contact" className="border border-slate-700 text-white hover:bg-slate-800 font-bold py-3 px-8 rounded-full transition duration-300">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;