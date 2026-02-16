import React from 'react';
import { Button } from './ui/Button';
import { Calendar, Phone } from 'lucide-react';
import { Reveal } from './ui/Reveal';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-primary-100 blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-accent-100 blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="max-w-2xl">
            <Reveal delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary-100 text-primary-800 text-xs font-semibold tracking-wide uppercase mb-6">
                <span className="w-2 h-2 rounded-full bg-primary-600 animate-pulse" />
                Serving Goa
              </div>
            </Reveal>
            
            <Reveal delay={0.2}>
              <h1 className="font-serif text-5xl lg:text-6xl font-medium text-slate-900 leading-[1.1] mb-6">
                Complete Dental Care for a <br />
                <span className="text-primary-900 italic">Healthier Smile</span>
              </h1>
            </Reveal>
            
            <Reveal delay={0.3}>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
                Professional, gentle, and modern dental treatments for individuals and families in Goa.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a href="tel:+919876543210" className="w-full sm:w-auto">
                   <Button size="lg" className="w-full sm:w-auto shadow-lg shadow-primary-900/20">
                      <Phone className="mr-2 w-4 h-4" /> Call Now
                   </Button>
                </a>
                <Button variant="outline" size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
                  <Calendar className="mr-2 w-4 h-4" /> Book Appointment
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Image Content */}
          <Reveal delay={0.5} className="hidden lg:block h-full">
            <div className="relative lg:h-[600px] w-full group">
              <div className="absolute inset-0 bg-primary-900/5 rounded-2xl transform rotate-3 scale-95 origin-bottom-right transition-transform duration-500 group-hover:rotate-6" />
              <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800" 
                  alt="Friendly Dentist" 
                  className="w-full h-full object-cover scale-100 transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8 text-white">
                  <p className="font-serif text-2xl italic">"Gentle dentistry you can trust."</p>
                </div>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};