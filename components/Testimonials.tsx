import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star } from 'lucide-react';
import { Reveal } from './ui/Reveal';

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <Reveal>
              <h2 className="font-serif text-4xl font-medium text-slate-900 mb-4">Patient Stories</h2>
              <p className="text-slate-600 text-lg">
                Don't just take our word for it. Hear from those who have experienced the Aura difference.
              </p>
            </Reveal>
          </div>
          
          <Reveal delay={0.2}>
            <div className="flex items-center gap-4 bg-white px-6 py-3 rounded-2xl shadow-sm border border-slate-100">
               <div className="text-right">
                  <p className="font-bold text-2xl text-slate-900 leading-none">4.9/5</p>
                  <p className="text-xs text-slate-500 mt-1">Based on 500+ reviews</p>
               </div>
               <div className="flex gap-1 text-yellow-400">
                  {[1,2,3,4,5].map(i => <Star key={i} fill="currentColor" className="w-5 h-5" />)}
               </div>
            </div>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <Reveal key={testimonial.id} delay={index * 0.1}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                <div className="flex gap-1 text-yellow-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} fill="currentColor" className="w-4 h-4" />
                  ))}
                </div>
                <p className="text-slate-700 italic mb-6 leading-relaxed flex-grow">"{testimonial.text}"</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                  <span className="font-medium text-slate-900">{testimonial.name}</span>
                  <span className="text-sm text-slate-400">{testimonial.date}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
};