import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 bg-slate-950 rounded-3xl p-12 shadow-2xl">
        <h2 className="text-3xl font-bold text-white mb-2">Get In Touch</h2>
        <p className="text-slate-400 mb-8">Have a project in mind or want to talk tech? Send me a message.</p>
        
        <form className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input type="text" placeholder="Name" className="w-full bg-slate-900 text-white p-4 rounded-xl border border-slate-800 focus:border-cyan-500 outline-none" />
            <input type="email" placeholder="Email" className="w-full bg-slate-900 text-white p-4 rounded-xl border border-slate-800 focus:border-cyan-500 outline-none" />
          </div>
          <textarea placeholder="Message" rows="5" className="w-full bg-slate-900 text-white p-4 rounded-xl border border-slate-800 focus:border-cyan-500 outline-none"></textarea>
          <button className="w-full bg-cyan-500 text-slate-950 font-bold py-4 rounded-xl hover:bg-cyan-400 transition">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;