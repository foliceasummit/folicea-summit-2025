'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { User, Briefcase, Car, Utensils, Camera, Upload, X, Smartphone, Banknote, CheckCircle2, MapPin, Package, Wallet } from 'lucide-react';

interface RegistrationForm {
  // Personal Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  nationality: string;
  currentCountry: string;
  city: string;
  
  // Professional Background
  occupation: string;
  organization: string;
  expectations: string;
  contributions: string;
  
  // Travel and Accommodation
  arrivalDate: string; // new
  modeOfTravel: string;
  flightBusNumber: string;
  roomPreference: string;
  
  // T-Shirt
  tshirtSize: string;
  tshirtColor: string;
  
  // Photo Upload
  photo: FileList;
}

const RegistrationPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [registeredData, setRegisteredData] = useState<{name: string, email: string} | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm<RegistrationForm>();

  const photoFile = watch('photo');

  // Handle photo preview
  useEffect(() => {
    if (photoFile && photoFile[0]) {
      const file = photoFile[0];
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setPhotoPreview(e.target?.result as string);
        };
        reader.readAsDataURL(file);
      }
    } else {
      setPhotoPreview(null);
    }
  }, [photoFile]);

  const onSubmit = async (data: RegistrationForm) => {
    setIsSubmitting(true);
    
    try {
      // Create FormData for Basin
      const formData = new FormData();
      
      // Add all form fields
      formData.append('firstName', data.firstName);
      formData.append('lastName', data.lastName);
      formData.append('email', data.email);
      formData.append('phone', data.phone);
      formData.append('dateOfBirth', data.dateOfBirth);
      formData.append('nationality', data.nationality);
      formData.append('currentCountry', data.currentCountry);
      formData.append('city', data.city);
      formData.append('occupation', data.occupation);
      formData.append('organization', data.organization || 'Not specified');
      formData.append('expectations', data.expectations || 'Not specified');
      formData.append('contributions', data.contributions || 'Not specified');
      formData.append('modeOfTravel', data.modeOfTravel);
      formData.append('flightBusNumber', data.flightBusNumber || 'Not specified');
      formData.append('roomPreference', data.roomPreference);
      formData.append('tshirtSize', data.tshirtSize);
      formData.append('tshirtColor', data.tshirtColor);
      
      // Add photo if selected
      if (data.photo && data.photo[0]) {
        formData.append('photo', data.photo[0]);
      }
      
      // Add subject and additional info
      formData.append('subject', 'FOLICEA Summit 2025 Registration');
      formData.append('_honey', ''); // Honeypot field for spam protection

      console.log('Submitting registration form with Basin...');

      const response = await fetch('https://usebasin.com/f/aaeddfe6fb21', {
        method: 'POST',
        body: formData,
      });

      console.log('Response status:', response.status);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Basin returns HTML, not JSON, so we don't try to parse it
      const responseText = await response.text();
      console.log('Basin response:', responseText);

      setSubmitSuccess(true);
      setRegisteredData({
        name: `${data.firstName} ${data.lastName}`,
        email: data.email
      });
      reset();
      setPhotoPreview(null);
      
    } catch (error) {
      console.error('Registration error:', error);
      alert(`Registration failed: ${error instanceof Error ? error.message : 'Please try again.'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-lg">
          <div className="text-green-500 text-6xl mb-4">✓</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Registration Successful!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for registering for the FOLICEA Summit 2025!
          </p>
                     <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
             <h3 className="font-semibold text-green-800 mb-2">✅ Registration pending – complete payment to confirm.</h3>
             <p className="text-sm text-green-700">
               Registration and photo submitted successfully. You’ll get a confirmation email soon. Your spot is confirmed after payment.
             </p>
           </div>
          <p className="text-sm text-gray-500 mb-6">
            Send your MoMo payment to +256 784 940 391 (Eunice Logose). 
            Share the screenshot on WhatsApp: +231 776 038 583. 
            Inquiries: +250 792 100 775 / +250 791 349 853.
          </p>
          <button
            onClick={() => {
              setSubmitSuccess(false);
              setRegisteredData(null);
            }}
            className="btn-primary w-full"
          >
            Register Another Person
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
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Register for FOLICEA Summit 2025
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Join us in Kampala, Uganda for this historic gathering
            </p>
            
            {/* Registration Fee Information */}
            <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
              {/* Header */}
              <div className="bg-white p-0 md:p-0">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-liberian-blue via-liberian-blue/90 to-liberian-red p-6 md:p-8">
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,white,transparent_25%),radial-gradient(circle_at_80%_30%,white,transparent_25%)]" />
                  <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-white text-sm mb-3">
                      <Wallet className="w-4 h-4" /> Summit Registration Fees
                    </div>
                    <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">Summit Registration Fees</h2>
                    <p className="text-white/90 mt-2 max-w-3xl">Delegates are kindly asked to pay the participation fee based on their country of residence and select their preferred summit package.</p>
                  </div>
                </div>
              </div>

              {/* Fees Grid - cards with accent borders */}
              <div className="bg-white p-4 md:p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Uganda */}
                  <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <MapPin className="w-4 h-4 text-liberian-red" /> Uganda Host Delegates
                    </div>
                    <div className="mt-3 grid grid-cols-1 gap-3">
                      <div className="flex items-center justify-between rounded-xl bg-gray-50 border border-gray-200 px-4 py-3">
                        <span className="text-gray-800 font-medium">Delegates Fee</span>
                        <span className="text-lg font-bold text-gray-900">USD 30</span>
                      </div>
                    </div>
                  </div>
                  {/* Kenya */}
                  <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <MapPin className="w-4 h-4 text-liberian-red" /> Kenya Delegates
                    </div>
                    <div className="mt-3 grid grid-cols-1 gap-3">
                      <div className="flex items-center justify-between rounded-xl bg-gray-50 border border-gray-200 px-4 py-3">
                        <span className="text-gray-800 font-medium">Delegates Fee</span>
                        <span className="text-lg font-bold text-gray-900">USD 60</span>
                      </div>
                    </div>
                  </div>
                  {/* Tanzania */}
                  <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <MapPin className="w-4 h-4 text-liberian-red" /> Tanzania Delegates
                    </div>
                    <div className="mt-3 grid grid-cols-1 gap-3">
                      <div className="flex items-center justify-between rounded-xl bg-gray-50 border border-gray-200 px-4 py-3">
                        <span className="text-gray-800 font-medium">Delegates Fee</span>
                        <span className="text-lg font-bold text-gray-900">USD 60</span>
                      </div>
                    </div>
                  </div>
                  {/* Rwanda */}
                  <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <MapPin className="w-4 h-4 text-liberian-red" /> Rwanda Delegates
                    </div>
                    <div className="mt-3 grid grid-cols-1 gap-3">
                      <div className="flex items-center justify-between rounded-xl bg-gray-50 border border-gray-200 px-4 py-3">
                        <span className="text-gray-800 font-medium">Delegates Fee</span>
                        <span className="text-lg font-bold text-gray-900">USD 60</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-liberian-blue font-semibold mt-3">Note: See summit packages for details</p>

                {/* Payment Methods + Packages */}
                <div className="mt-10 space-y-10">
                  {/* Payment Methods - feature cards */}
                  <div className="rounded-2xl border border-gray-200 p-6 bg-gradient-to-r from-liberian-blue/5 via-white to-liberian-blue/5">
                    <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                      <Wallet className="w-5 h-5 text-liberian-red" /> Payment Methods
                    </h3>
                    <p className="text-sm text-gray-700 mt-1">To confirm your participation, please use one of the following options:</p>

                    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Mobile Money */}
                      <div className="group relative flex items-start gap-4 rounded-xl p-5 bg-white/70 backdrop-blur border border-liberian-blue/20 shadow-sm hover:shadow-md transition-shadow">
                        <div className="h-12 w-12 rounded-xl bg-liberian-red/10 text-liberian-red flex items-center justify-center">
                          <Smartphone className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">Mobile Money (MTN Uganda)</p>
                          <p className="text-sm text-gray-600">+256 784 940 391 - Eunice Logose</p>
                        </div>
                      </div>

                      {/* Cash */}
                      <div className="group relative flex items-start gap-4 rounded-xl p-5 bg-white/70 backdrop-blur border border-liberian-blue/20 shadow-sm hover:shadow-md transition-shadow">
                        <div className="h-12 w-12 rounded-xl bg-gray-100 text-gray-700 flex items-center justify-center">
                          <Banknote className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">Cash (Uganda delegates only)</p>
                          <p className="text-sm text-gray-600">Pay at the registration desk</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 text-sm">
                      <p className="font-semibold text-gray-900">Important:</p>
                      <p className="text-gray-700">Proof of payment must be shared with the Central Summit Committee (CSC) on WhatsApp: <a href="https://wa.me/231776038583" target="_blank" rel="noopener noreferrer" className="text-liberian-red font-semibold">+231 776 038 583</a>.</p>
                    </div>
                  </div>

                  {/* Ways to Pay (via MTN Mobile Money no service charge) */}
                  <div className="rounded-2xl border border-gray-200 p-6 bg-white">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center tracking-tight">Ways to Pay (via MTN Mobile Money — no service charge)</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="rounded-xl border border-gray-200 p-4 flex items-start gap-3 bg-gray-50">
                        <Smartphone className="w-5 h-5 text-liberian-red mt-1" />
                        <div>
                          <p className="font-semibold text-gray-900">Rwanda</p>
                          <p className="text-sm text-gray-700">Dial <span className="font-mono">*182*1#</span> and follow the instructions.</p>
                        </div>
                      </div>
                      <div className="rounded-xl border border-gray-200 p-4 flex items-start gap-3 bg-gray-50">
                        <Smartphone className="w-5 h-5 text-liberian-red mt-1" />
                        <div>
                          <p className="font-semibold text-gray-900">Liberia</p>
                          <p className="text-sm text-gray-700">Dial <span className="font-mono">*156*1#</span> and follow the instructions.</p>
                        </div>
                      </div>
                      <div className="rounded-xl border border-gray-200 p-4 flex items-start gap-3 bg-gray-50">
                        <Smartphone className="w-5 h-5 text-liberian-red mt-1" />
                        <div>
                          <p className="font-semibold text-gray-900">Tanzania</p>
                          <p className="text-sm text-gray-700">Dial <span className="font-mono">*1</span> and follow the instructions.</p>
                        </div>
                      </div>
                      <div className="rounded-xl border border-gray-200 p-4 flex items-start gap-3 bg-gray-50">
                        <Smartphone className="w-5 h-5 text-liberian-red mt-1" />
                        <div>
                          <p className="font-semibold text-gray-900">Kenya</p>
                          <p className="text-sm text-gray-700">Dial <span className="font-mono">*1</span> and follow the instructions.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* How to register & pay */}
                  <div className="rounded-2xl border border-gray-200 p-6 bg-white">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center tracking-tight">How to register & pay (quick steps)</h3>
                    <ol className="list-decimal pl-6 md:pl-10 space-y-2 text-gray-700 text-sm max-w-3xl mx-auto text-left">
                      <li>Choose the Delegates Package (Package-01 or Package-02).</li>
                      <li>Pay the Delegates Fee for your country (see table above).</li>
                      <li>If selecting Package-02, also pay the transportation fare applicable to your country.</li>
                      <li>Share proof of payment (screenshot / transaction ID) to WhatsApp <a href="https://wa.me/231776038583" target="_blank" rel="noopener noreferrer" className="text-liberian-red font-semibold">+231 776 038 583</a> and await confirmation.</li>
                      <li>Collect your badge & summit pack at the Registration Desk on 27 Nov — 11:00 AM – 6:00 PM.</li>
                    </ol>
                  </div>

                  {/* Packages - two columns with icons (more attractive cards) */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Package-01 */}
                    <div className="group rounded-2xl p-[1px] bg-gradient-to-r from-liberian-blue/40 via-liberian-red/40 to-liberian-blue/40 shadow-xl">
                      <div className="rounded-2xl bg-white p-6 h-full">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <div className="h-10 w-10 rounded-xl bg-liberian-blue/10 text-liberian-blue flex items-center justify-center">
                              <Package className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Package 01 (Standard)</h3>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">Delegates are responsible for their own transportation.</p>
                        <ul className="space-y-2 text-gray-700 text-sm">
                          <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-liberian-blue"/> 4 days shared accommodation</li>
                          <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-liberian-blue"/> 4 days breakfast & lunch</li>
                          <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-liberian-blue"/> Summit T-shirt</li>
                          <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-liberian-blue"/> Branded summit materials (Notepad & Pen)</li>
                          <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-liberian-blue"/> Tour of Kampala historical sites</li>
                          <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-liberian-blue"/> Official Invitation</li>
                          <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-liberian-blue"/> Access to the Pitch Competition</li>
                          <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-liberian-blue"/> Networking opportunities</li>
                        </ul>
                      </div>
                    </div>

                    {/* Package-02 */}
                    <div className="group rounded-2xl p-[1px] bg-gradient-to-r from-liberian-blue/40 via-liberian-red/40 to-liberian-blue/40 shadow-xl">
                      <div className="rounded-2xl bg-white p-6 h-full">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <div className="h-10 w-10 rounded-xl bg-liberian-blue/10 text-liberian-blue flex items-center justify-center">
                              <Package className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Package 02 (With Transportation)</h3>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">Includes transportation + everything in Package-01</p>
                        <ul className="space-y-2 text-gray-700 text-sm">
                          <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-liberian-blue"/> Transportation fares (To & Fro)</li>
                          <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-liberian-blue"/> Rwanda → Kampala: USD 43 (round-trip)</li>
                          <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-liberian-blue"/> Kenya → Kampala: USD 73 (round-trip)</li>
                          <li className="flex items-center gap-3"><CheckCircle2 className="w-4 h-4 text-liberian-blue"/> Tanzania → Kampala: USD 73 (round-trip)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl shadow-lg p-8">
            {/* Personal Information Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <User className="w-6 h-6 mr-3 text-liberian-red" />
                Personal Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    {...register('firstName', { required: 'First name is required' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-liberian-red focus:border-transparent"
                    placeholder="Enter your first name"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    {...register('lastName', { required: 'Last name is required' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-liberian-red focus:border-transparent"
                    placeholder="Enter your last name"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
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
                    placeholder="Enter your email address"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    {...register('phone', { required: 'Phone number is required' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-liberian-red focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>

                                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-2">
                     Date of Birth *
                   </label>
                   <input
                     type="date"
                     min="1920-01-01"
                     max="2012-12-31"
                     {...register('dateOfBirth', { 
                       required: 'Date of birth is required',
                       validate: (value) => {
                         const date = new Date(value);
                         const year = date.getFullYear();
                         if (year < 1920 || year > 2012) {
                           return 'Date of birth must be between 1920 and 2012';
                         }
                         return true;
                       }
                     })}
                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-liberian-red focus:border-transparent"
                   />
                   {errors.dateOfBirth && (
                     <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth.message}</p>
                   )}
                 </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nationality *
                  </label>
                  <input
                    type="text"
                    {...register('nationality', { required: 'Nationality is required' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-liberian-red focus:border-transparent"
                    placeholder="Enter your nationality"
                  />
                  {errors.nationality && (
                    <p className="text-red-500 text-sm mt-1">{errors.nationality.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Country of Residence *
                  </label>
                  <input
                    type="text"
                    {...register('currentCountry', { required: 'Country of residence is required' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-liberian-red focus:border-transparent"
                    placeholder="Enter your country of residence"
                  />
                  {errors.currentCountry && (
                    <p className="text-red-500 text-sm mt-1">{errors.currentCountry.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    {...register('city')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-liberian-red focus:border-transparent"
                    placeholder="Enter your city (optional)"
                  />
                </div>
              </div>
            </div>

            {/* Professional Background Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Briefcase className="w-6 h-6 mr-3 text-liberian-red" />
                Professional Background
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Occupation *
                  </label>
                  <input
                    type="text"
                    {...register('occupation', { required: 'Occupation is required' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-liberian-red focus:border-transparent"
                    placeholder="e.g., Engineer, Teacher, Business Owner"
                  />
                  {errors.occupation && (
                    <p className="text-red-500 text-sm mt-1">{errors.occupation.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Organization/Institution
                  </label>
                  <input
                    type="text"
                    {...register('organization')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-liberian-red focus:border-transparent"
                    placeholder="Enter your organization or company name"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What are your expectations from this summit?
                </label>
                <textarea
                  {...register('expectations')}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-liberian-red focus:border-transparent"
                  placeholder="Please share what you hope to gain (optional)"
                />
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  How do you plan to contribute to the Liberian diaspora community?
                </label>
                <textarea
                  {...register('contributions')}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-liberian-red focus:border-transparent"
                  placeholder="Please describe how you plan to contribute (optional)"
                />
              </div>
            </div>

            {/* Travel and Accommodation Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Car className="w-6 h-6 mr-3 text-liberian-red" />
                Travel and Accommodation
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Arrival Date */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date of Arrival *
                  </label>
                  <input
                    type="date"
                    min="2025-11-20"
                    max="2025-12-10"
                    {...register('arrivalDate', { required: 'Arrival date is required' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-liberian-red focus:border-transparent"
                  />
                  {errors.arrivalDate && (
                    <p className="text-red-500 text-sm mt-1">{errors.arrivalDate.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mode of Travel
                  </label>
                  <select
                    {...register('modeOfTravel', { required: 'Mode of travel is required' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-liberian-red focus:border-transparent"
                  >
                    <option value="">Select mode of travel</option>
                    <option value="Air">Flight</option>
                    <option value="Bus">Bus</option>
                    <option value="Car">Car</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.modeOfTravel && (
                    <p className="text-red-500 text-sm mt-1">{errors.modeOfTravel.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Flight/Bus Number
                  </label>
                  <input
                    type="text"
                    {...register('flightBusNumber')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-liberian-red focus:border-transparent"
                    placeholder="Enter flight or bus number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Room Preference *
                  </label>
                  <select
                    {...register('roomPreference', { required: 'Room preference is required' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-liberian-red focus:border-transparent"
                  >
                    <option value="">Select room preference</option>
                    <option value="Single">Single Room (Extra Cost)</option>
                    <option value="Double">Double Room (Shared)</option>
                    <option value="Airbnb Shared">Airbnb apartment (Shared)</option>
                    <option value="No Accommodation">No Accommodation Needed</option>
                  </select>
                  {errors.roomPreference && (
                    <p className="text-red-500 text-sm mt-1">{errors.roomPreference.message}</p>
                  )}
                  <p className="text-xs text-gray-500 mt-2">Note: Private room will be at your own expense.</p>
                </div>

                {/* Removed Mobility Assistance Checkbox */}
              </div>
            </div>

            {/* T-Shirt Preferences Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                {/* Replaced utensils with shirt icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-3 text-liberian-red"><path d="M16.7 3.3 14 5H10L7.3 3.3a1 1 0 0 0-1.16.16L3 6l2 3v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9l2-3-3.14-2.54a1 1 0 0 0-1.16-.16Z"/></svg>
                T-Shirt Preferences
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    T-Shirt Size * (Select T-Shirt Size)
                  </label>
                  <select
                    {...register('tshirtSize', { required: 'T-shirt size is required' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-liberian-red focus:border-transparent"
                  >
                    <option value="">Select T-Shirt Size</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                    </select>
                  {errors.tshirtSize && (
                    <p className="text-red-500 text-sm mt-1">{errors.tshirtSize.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred T-Shirt Color * (Select Color)
                  </label>
                  <select
                    {...register('tshirtColor', { required: 'T-shirt color is required' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-liberian-red focus:border-transparent"
                  >
                    <option value="">Select Color</option>
                    <option value="White">White</option>
                    <option value="Black">Black</option>
                    <option value="Red">Red</option>
                    <option value="Blue">Blue</option>
                    </select>
                  {errors.tshirtColor && (
                    <p className="text-red-500 text-sm mt-1">{errors.tshirtColor.message}</p>
                  )}
                  <p className="text-xs text-gray-500 mt-2">Note: Black color only for the Central Summit Committee members.</p>
                </div>
              </div>
            </div>

            {/* Photo Upload Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Camera className="w-6 h-6 mr-3 text-liberian-red" />
                Profile Photo
              </h2>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-3 flex-1">
                    <h3 className="text-lg font-medium text-blue-800">Upload Your Passport Size Photo</h3>
                    <div className="mt-2 text-blue-700">
                      <p className="mb-4">Please upload a passport size photo with white background(JPG, PNG) for your summit badge.</p>
                      
                      {/* Photo Upload Input */}
                      <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Profile Photo *
                        </label>
                        <div className="flex items-center space-x-4">
                          <div className="flex-1">
                            <input
                              type="file"
                              accept="image/*"
                              {...register('photo', { required: 'Profile photo is required' })}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-liberian-red focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-liberian-red file:text-white hover:file:bg-liberian-blue"
                            />
                          </div>
                          {photoPreview && (
                            <button
                              type="button"
                              onClick={() => {
                                setPhotoPreview(null);
                                // Reset the file input
                                const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
                                if (fileInput) fileInput.value = '';
                              }}
                              className="p-2 text-red-500 hover:text-red-700"
                            >
                              <X className="w-5 h-5" />
                            </button>
                          )}
                        </div>
                        {errors.photo && (
                          <p className="text-red-500 text-sm mt-1">{errors.photo.message}</p>
                        )}
                      </div>

                      {/* Photo Preview */}
                      {photoPreview && (
                        <div className="mt-4">
                          <p className="text-sm font-medium text-gray-700 mb-2">Photo Preview:</p>
                          <div className="relative w-32 h-32 border-2 border-gray-300 rounded-lg overflow-hidden">
                            <img
                              src={photoPreview}
                              alt="Photo preview"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary text-lg px-12 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Registration'}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default RegistrationPage;
 