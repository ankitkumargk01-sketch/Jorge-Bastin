import React from 'react';
import { SERVICES } from '../constants';
import { Reveal } from './ui/Reveal';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-4xl font-medium text-slate-900 mb-4">Our Services</h2>
            <p className="text-slate-600 text-lg">
               We offer a wide range of treatments to ensure your oral health is taken care of from every angle.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.1}>
              <div 
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 h-full hover:-translate-y-1"
              >
                <div className="h-48 mb-6 overflow-hidden rounded-lg relative group">
                    <img 
                      src={service.imageUrl} 
                      alt={service.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/10 transition-colors duration-300" />
                </div>
                
                <h3 className="font-serif text-xl font-medium text-slate-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};