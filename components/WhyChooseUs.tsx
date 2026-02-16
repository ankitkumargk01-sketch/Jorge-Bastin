import React from 'react';
import { WHY_CHOOSE_US } from '../constants';
import { CheckCircle2, Heart } from 'lucide-react';
import { Reveal } from './ui/Reveal';

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Why Choose Us List */}
            <div>
                <Reveal>
                  <h2 className="font-serif text-4xl font-medium text-slate-900 mb-6">Why Choose Us</h2>
                </Reveal>
                <div className="space-y-4">
                    {WHY_CHOOSE_US.map((item, index) => (
                        <Reveal key={index} delay={index * 0.1}>
                          <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-primary-100 hover:bg-primary-50/50 transition-colors duration-300">
                              <CheckCircle2 className="w-6 h-6 text-primary-600 flex-shrink-0" />
                              <span className="text-lg text-slate-700 font-medium">{item}</span>
                          </div>
                        </Reveal>
                    ))}
                </div>
            </div>

            {/* Patient Comfort */}
            <Reveal delay={0.4}>
              <div className="bg-primary-900 text-white p-8 sm:p-12 rounded-3xl relative overflow-hidden group shadow-2xl shadow-primary-900/20">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none transition-transform duration-700 group-hover:scale-125"></div>
                  
                  <div className="relative z-10">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                          <Heart className="w-6 h-6 text-white" />
                      </div>
                      
                      <h3 className="font-serif text-3xl font-medium mb-6">Gentle Dentistry You Can Trust</h3>
                      <p className="text-primary-100 text-lg leading-relaxed mb-8">
                          We understand that dental visits can feel stressful. Our clinic focuses on making treatments painless, easy, and clearly explained so you always feel confident about your care.
                      </p>
                      
                      <button 
                        onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} 
                        className="inline-flex items-center justify-center px-6 py-3 border border-white/30 rounded-lg font-medium hover:bg-white hover:text-primary-900 transition-all hover:shadow-lg hover:-translate-y-0.5"
                      >
                          Book Your Visit Today
                      </button>
                  </div>
              </div>
            </Reveal>
        </div>

      </div>
    </section>
  );
};