import React, { useState } from 'react';
import { Button } from './ui/Button';
import { MapPin, Phone, Clock, CheckCircle, Navigation } from 'lucide-react';
import { Reveal } from './ui/Reveal';

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  phone?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    phone: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
      isValid = false;
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
      isValid = false;
    }

    // Basic phone validation: allows +, -, (), space, and digits. Min length 10.
    // Only validate if phone is provided (optional)
    const phoneRegex = /^[0-9+\-\s()]{10,}$/;
    if (formData.phone.trim() && !phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number (min 10 digits)';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please tell us how we can help';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      
      // Simulate API call
      try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSuccess(true);
        setFormData({ firstName: '', lastName: '', phone: '', message: '' });
        setErrors({});
        
        // Reset success message after 5 seconds
        setTimeout(() => setIsSuccess(false), 5000);
      } catch (error) {
        console.error("Submission error", error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-serif text-4xl font-medium text-slate-900 mb-4">Book Your Dental Visit Today</h2>
              <p className="text-slate-600 text-lg">Call now and receive expert dental care in a calm and professional setting.</p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Info & Form */}
          <Reveal delay={0.2}>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="text-2xl font-serif font-medium text-slate-900 mb-8">Get In Touch</h3>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center text-primary-900 flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Phone</h4>
                    <a href="tel:+919876543210" className="text-slate-600 hover:text-primary-600 transition-colors">+91 98765 43210</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center text-primary-900 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Location</h4>
                    <p className="text-slate-600">
                      Dentist Madonna Building,<br/>
                      Above Post Office,<br/>
                      Cansaulim Market, Goa
                    </p>
                  </div>
                </div>
                 <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center text-primary-900 flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Areas Served</h4>
                    <p className="text-slate-600">We welcome patients from Cansaulim and nearby regions across Goa.</p>
                  </div>
                </div>
              </div>

              {isSuccess ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center animate-fade-in">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-medium text-green-900 mb-2">Request Received!</h4>
                  <p className="text-green-700">
                    Thank you for contacting us. We will get back to you shortly to confirm your appointment.
                  </p>
                  <Button 
                    variant="outline" 
                    className="mt-6 border-green-600 text-green-700 hover:bg-green-100"
                    onClick={() => setIsSuccess(false)}
                  >
                    Send Another Request
                  </Button>
                </div>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <input 
                        type="text" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First Name *" 
                        className={`w-full px-4 py-3 rounded-lg border bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-200 ${
                          errors.firstName ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-slate-200'
                        }`} 
                      />
                      {errors.firstName && <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>}
                    </div>
                    <div>
                      <input 
                        type="text" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last Name *" 
                        className={`w-full px-4 py-3 rounded-lg border bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-200 ${
                          errors.lastName ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-slate-200'
                        }`} 
                      />
                       {errors.lastName && <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>}
                    </div>
                  </div>
                  
                  <div>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number (Optional)" 
                      className={`w-full px-4 py-3 rounded-lg border bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-200 ${
                        errors.phone ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-slate-200'
                      }`} 
                    />
                    {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                  </div>

                  <div>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you? *" 
                      rows={3} 
                      className={`w-full px-4 py-3 rounded-lg border bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-200 ${
                        errors.message ? 'border-red-300 focus:border-red-500 focus:ring-red-200' : 'border-slate-200'
                      }`}
                    ></textarea>
                    {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full shadow-lg shadow-primary-900/10 hover:shadow-primary-900/20"
                    isLoading={isSubmitting}
                  >
                    Request Appointment
                  </Button>
                </form>
              )}
            </div>
          </Reveal>

          {/* Map/Directions */}
          <Reveal delay={0.4} className="h-full">
            <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden shadow-xl bg-slate-100 group border border-slate-200">
               {/* Map Placeholder Image */}
               <img 
                src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=800" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[10%] group-hover:grayscale-0" 
                alt="Clinic Location" 
               />
               
               {/* Overlay */}
               <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/20" />
               
               {/* Center Action Button */}
               <div className="absolute inset-0 flex items-center justify-center">
                  <a 
                    href="https://maps.google.com/?q=Dentist+Madonna+Building+Cansaulim+Goa" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white text-slate-900 px-8 py-4 rounded-full shadow-xl font-medium flex items-center gap-3 hover:bg-white transition-all transform hover:scale-105 hover:shadow-2xl group/btn"
                  >
                      <span className="p-2 bg-red-50 rounded-full group-hover/btn:bg-red-100 transition-colors">
                        <MapPin className="w-6 h-6 text-red-500" />
                      </span>
                      <div>
                        <span className="block text-sm text-slate-500 font-normal">Open in Maps</span>
                        <span className="block text-lg font-bold">Get Directions</span>
                      </div>
                      <Navigation className="w-5 h-5 text-slate-400 ml-2 group-hover/btn:text-slate-900 group-hover/btn:translate-x-1 transition-all" />
                  </a>
               </div>
               
               {/* Bottom Info */}
               <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg transform translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">Clinic Address</p>
                  <p className="text-slate-900 text-sm font-medium">Dentist Madonna Building, Above Post Office, Cansaulim Market, Goa</p>
               </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};