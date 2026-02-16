import React from 'react';
import { DOCTORS } from '../constants';
import { Award } from 'lucide-react';
import { Reveal } from './ui/Reveal';

export const About: React.FC = () => {
  const doctor = DOCTORS[0];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Clinic */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
           <Reveal className="order-2 lg:order-1 relative">
              <div className="absolute -inset-4 bg-primary-100 rounded-2xl transform -rotate-2 transition-transform duration-500 hover:rotate-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800" 
                alt="Clinic Interior" 
                className="relative rounded-2xl shadow-lg w-full object-cover h-[400px] hover:shadow-xl transition-shadow duration-300"
              />
           </Reveal>
           <div className="order-1 lg:order-2">
              <Reveal delay={0.2}>
                <h2 className="font-serif text-4xl font-medium text-slate-900 mb-6">Welcome to Dr. Rowena’s Dental Clinic</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Dr. Rowena’s Dental Clinic provides comprehensive dental care with a strong focus on patient comfort, hygiene, and long-lasting results. We combine modern dental practices with a caring approach to ensure every patient receives the best treatment in a relaxed environment.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Whether you need routine care or advanced procedures, we are committed to helping you achieve a healthy, confident smile.
                </p>
              </Reveal>
           </div>
        </div>

        {/* Meet the Doctor */}
        <Reveal delay={0.3}>
          <div className="bg-slate-50 rounded-3xl p-8 lg:p-12 transition-colors hover:bg-slate-100/80">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="md:col-span-1">
                      <img 
                          src={doctor.imageUrl} 
                          alt={doctor.name} 
                          className="w-full aspect-[3/4] object-cover rounded-2xl shadow-md transform transition-transform duration-500 hover:scale-[1.02]"
                      />
                  </div>
                  <div className="md:col-span-2">
                      <div className="inline-block px-4 py-1.5 bg-primary-100 text-primary-800 rounded-full text-sm font-semibold mb-4">
                          Meet Your Dentist
                      </div>
                      <h3 className="font-serif text-3xl font-medium text-slate-900 mb-4">{doctor.name}</h3>
                      <p className="text-slate-600 text-lg leading-relaxed mb-6">
                          {doctor.bio}
                      </p>

                      {/* Credentials Section */}
                      {doctor.credentials && doctor.credentials.length > 0 && (
                        <div className="mb-8 p-6 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                          <div className="flex items-center gap-2 mb-4">
                            <Award className="w-5 h-5 text-primary-600" />
                            <h4 className="font-serif text-lg font-medium text-slate-900">Professional Credentials</h4>
                          </div>
                          <ul className="grid sm:grid-cols-2 gap-3">
                            {doctor.credentials.map((cred, index) => (
                              <li key={index} className="flex items-start gap-2 text-slate-600 text-sm">
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                                <span>{cred}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                          <div>
                              <p className="font-bold text-3xl text-primary-900">10+</p>
                              <p className="text-sm text-slate-500">Years Experience</p>
                          </div>
                           <div>
                              <p className="font-bold text-3xl text-primary-900">1k+</p>
                              <p className="text-sm text-slate-500">Happy Patients</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};