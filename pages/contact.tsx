'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';
import GoogleMap from '../components/GoogleMap';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactForm>();

  const faqs = [
    {
      question: "When is the FOLICEA Summit 2025?",
      answer: "The summit will be held from November 28-30, 2025 in Kampala, Uganda."
    },
    {
      question: "What is included in the registration fee?",
      answer: "Visit the Registration Page to see the packages."
    },
    {
      question: "How can I register for the summit?",
      answer: "Visit our registration page and complete the online form with payment."
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept Mobile Money, bank transfers, and other digital payment methods."
    },
    {
      question: "Is accommodation provided?",
      answer: "Yes, shared accommodation is included. Private rooms are available at additional cost."
    }
  ];

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    
    try {
      // Use Web3Forms - free, reliable, works with Vercel
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'e74266af-617b-4d91-8b63-b34274a06806',
          name: data.name,
          email: data.email,
          phone: data.phone,
          subject: data.subject,
          message: data.message,
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setSubmitSuccess(true);
        reset();
      } else {
        throw new Error('Contact form submission failed');
      }
    } catch (error) {
      console.error('Contact error:', error);
      alert('Message sending failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-lg">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Message Sent!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for your message. We'll get back to you as soon as possible. FOLICEA CSC
          </p>
          <button
            onClick={() => setSubmitSuccess(false)}
            className="btn-primary w-full"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with the FOLICEA Central Summit Committee. We're here to help!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      {...register('name', { required: 'Name is required' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-liberian-red focus:border-transparent"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-liberian-red focus:border-transparent"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    {...register('phone')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-liberian-red focus:border-transparent"
                    placeholder="+1234567890"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    {...register('subject', { required: 'Subject is required' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-liberian-red focus:border-transparent"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    {...register('message', { required: 'Message is required' })}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-liberian-red focus:border-transparent"
                    placeholder="Tell us how we can help you..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>

              <div className="mt-6">
                <h3 className="font-semibold text-gray-900 mb-4">Frequently Asked Questions</h3>
                <p className="text-sm text-gray-600 mb-4">Find answers to common questions about the FOLICEA Summit 2025.</p>
                
                <div className="space-y-3">
                  {faqs.map((faq, index) => (
                    <div key={index} className="rounded-lg border border-gray-200 bg-white overflow-hidden">
                      <button
                        onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                        className="w-full p-3 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                      >
                        <h4 className="font-medium text-gray-900 text-sm">{faq.question}</h4>
                        {openFAQ === index ? (
                          <ChevronUp className="w-4 h-4 text-gray-500" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-gray-500" />
                        )}
                      </button>
                      {openFAQ === index && (
                        <div className="px-3 pb-3">
                          <p className="text-xs text-gray-600">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* General Contact */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-liberian-red mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <a 
                        href="mailto:foliceasummit@gmail.com" 
                        className="text-liberian-red hover:text-red-700 transition-colors"
                      >
                        foliceasummit@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <Phone className="w-6 h-6 text-liberian-red mt-1" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <div className="space-y-1">
                        <a 
                          href="tel:+250792109775" 
                          className="text-liberian-red hover:text-red-700 transition-colors block"
                        >
                          +250 792 109 775 | +250 791 349 853
                        </a>
                        <a 
                          href="https://wa.me/231776038583" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-liberian-red hover:text-red-700 transition-colors block flex items-center"
                        >
                          <MessageCircle className="w-4 h-4 mr-2" />
                          WhatsApp: +231 776 038 583
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-liberian-red mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Response Time</h3>
                      <p className="text-gray-600">We typically respond within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Venue Information */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Event Venue</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-liberian-red mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">International University of East Africa (IUEA)</h3>
                      <p className="text-gray-600">Kampala, Uganda</p>
                      <p className="text-sm text-gray-500 mt-1">
                        IUEA in the heart of Kampala
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-liberian-red mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900">Event Schedule</h3>
                      <p className="text-gray-600">November 28 - 30, 2025</p>
                      <p className="text-sm text-gray-500 mt-1">
                        Registration opens at 8:00 AM each day
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Event Venue Location</h2>
                <GoogleMap 
                  latitude={0.3476} 
                  longitude={32.5825} 
                  zoom={15}
                  title="International University of East Africa (IUEA)"
                />
                <div className="mt-4 text-center">
                  <a 
                    href="https://maps.google.com/?q=Kampala+Serena+Hotel,Kampala,Uganda" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-liberian-red hover:text-liberian-blue font-semibold transition-colors"
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Open in Google Maps
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-gradient-to-r from-liberian-blue to-liberian-red rounded-2xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
                <div className="space-y-3">
                  <a href="/registration" className="block hover:underline transition-colors">
                    → Register for the Summit
                  </a>
                  <a href="/agenda" className="block hover:underline transition-colors">
                    → View Event Agenda
                  </a>
                  <a href="/speakers" className="block hover:underline transition-colors">
                    → Meet Our Speakers
                  </a>
                  <a href="/about" className="block hover:underline transition-colors">
                    → Learn About FOLICEA
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
