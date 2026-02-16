import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
               <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-slate-900 font-serif font-bold text-lg">R</span>
               </div>
               <span className="font-serif text-2xl font-bold text-white tracking-tight">
                  Dr. Rowena’s<span className="text-primary-500">.</span>
               </span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Quality Dentistry with Care.
            </p>
             <p className="text-sm leading-relaxed">
              Dentist Madonna Building,<br/>
              Above Post Office,<br/>
              Cansaulim Market, Goa
            </p>
          </div>

          <div>
            <h3 className="text-white font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

           <div>
            <h3 className="text-white font-medium mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>General Dentistry</li>
              <li>Restorative Treatments</li>
              <li>Cosmetic Dentistry</li>
              <li>Diagnostics</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} Dr. Rowena’s Dental Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};