'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { User, Briefcase, Car, Utensils, Camera, Upload, X } from 'lucide-react';

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
  yearsOfExperience: string;
  expectations: string;
  contributions: string;
  
  // Travel and Accommodation
  arrivalDate: string;
  arrivalTime: string;
  modeOfTravel: string;
  flightBusNumber: string;
  roomPreference: string;
  mobilityAccess: boolean;
  
  // Dietary Preferences and T-Shirt
  foodPreference: string;
  foodAllergies: string;
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
             formData.append('yearsOfExperience', data.yearsOfExperience || 'Not specified');
      formData.append('expectations', data.expectations);
      formData.append('contributions', data.contributions);
      formData.append('arrivalDate', data.arrivalDate);
      formData.append('arrivalTime', data.arrivalTime);
      formData.append('modeOfTravel', data.modeOfTravel);
      formData.append('flightBusNumber', data.flightBusNumber || 'Not specified');
             formData.append('roomPreference', data.roomPreference);
      formData.append('mobilityAccess', data.mobilityAccess ? 'Yes' : 'No');
             formData.append('foodPreference', data.foodPreference || 'Not specified');
      formData.append('foodAllergies', data.foodAllergies || 'None');
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
             <h3 className="font-semibold text-green-800 mb-2">✅ Registration Complete</h3>
             <p className="text-sm text-green-700">
               Your registration and photo have been successfully submitted via Basin. You will receive a confirmation email shortly.
             </p>
           </div>
          <p className="text-sm text-gray-500 mb-6">
            To complete your registration, please send your payment via MoMo to: 0792109775, or use MoMo Code: XYZ123. 
            After payment, kindly send a screenshot to our WhatsApp: +231 776 038 583. 
            For any inquiries, please call: +250 792 100 775.
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
            <div className="bg-gradient-to-r from-liberian-blue to-liberian-red text-white rounded-2xl p-6 mb-6">
              <h2 className="text-2xl font-bold mb-3">Registration Fee: $100 USD</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div>
                  <h3 className="text-lg font-semibold mb-2">What's Included:</h3>
                  <ul className="space-y-1 text-base">
                    <li>• Conference materials and badge</li>
                    <li>• Welcome dinner and networking events</li>
                    <li>• Coffee breaks and refreshments</li>
                    <li>• FOLICEA Summit 2025 T-shirt</li>
                    <li>• Certificate of participation</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Payment Methods:</h3>
                  <ul className="space-y-1 text-base">
                    <li>• Mobile Money: 0792109775</li>
                    <li>• MoMo Code: XYZ123</li>
                    <li>• Bank Transfer (details available)</li>
                  </ul>
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
                    Phone Number *
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
                    Current Country *
                  </label>
                  <input
                    type="text"
                    {...register('currentCountry', { required: 'Current country is required' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-liberian-red focus:border-transparent"
                    placeholder="Enter your current country"
                  />
                  {errors.currentCountry && (
                    <p className="text-red-500 text-sm mt-1">{errors.currentCountry.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    {...register('city', { required: 'City is required' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-liberian-red focus:border-transparent"
                    placeholder="Enter your city"
                  />
                  {errors.city && (
                    <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
                  )}
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
                    Organization/Company
                  </label>
                  <input
                    type="text"
                    {...register('organization')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-liberian-red focus:border-transparent"
                    placeholder="Enter your organization or company name"
                  />
                </div>

                                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-2">
                     Years of Experience
                   </label>
                   <select
                     {...register('yearsOfExperience')}
                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-liberian-red focus:border-transparent"
                   >
                     <option value="">Select years of experience (optional)</option>
                     <option value="0-2">0-2 years</option>
                     <option value="3-5">3-5 years</option>
                     <option value="6-10">6-10 years</option>
                     <option value="11-15">11-15 years</option>
                     <option value="16-20">16-20 years</option>
                     <option value="20+">20+ years</option>
                   </select>
                 </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What are your expectations from this summit? *
                </label>
                <textarea
                  {...register('expectations', { required: 'Expectations are required' })}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-liberian-red focus:border-transparent"
                  placeholder="Please share what you hope to gain from attending the FOLICEA Summit"
                />
                {errors.expectations && (
                  <p className="text-red-500 text-sm mt-1">{errors.expectations.message}</p>
                )}
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  How do you plan to contribute to the Liberian diaspora community? *
                </label>
                <textarea
                  {...register('contributions', { required: 'Contributions are required' })}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-liberian-red focus:border-transparent"
                  placeholder="Please describe how you plan to contribute to the community"
                />
                {errors.contributions && (
                  <p className="text-red-500 text-sm mt-1">{errors.contributions.message}</p>
                )}
              </div>
            </div>

            {/* Travel and Accommodation Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Car className="w-6 h-6 mr-3 text-liberian-red" />
                Travel and Accommodation
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-2">
                     Arrival Date *
                   </label>
                   <input
                     type="date"
                     min="2025-01-01"
                     max="2025-12-31"
                     {...register('arrivalDate', { 
                       required: 'Arrival date is required',
                       validate: (value) => {
                         const date = new Date(value);
                         const year = date.getFullYear();
                         if (year !== 2025) {
                           return 'Arrival date must be in 2025';
                         }
                         return true;
                       }
                     })}
                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-liberian-red focus:border-transparent"
                   />
                   {errors.arrivalDate && (
                     <p className="text-red-500 text-sm mt-1">{errors.arrivalDate.message}</p>
                   )}
                 </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Arrival Time *
                  </label>
                  <input
                    type="time"
                    {...register('arrivalTime', { required: 'Arrival time is required' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-liberian-red focus:border-transparent"
                  />
                  {errors.arrivalTime && (
                    <p className="text-red-500 text-sm mt-1">{errors.arrivalTime.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mode of Travel *
                  </label>
                  <select
                    {...register('modeOfTravel', { required: 'Mode of travel is required' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-liberian-red focus:border-transparent"
                  >
                    <option value="">Select mode of travel</option>
                    <option value="Air">Air</option>
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
                     <option value="Single">Single Room</option>
                     <option value="Double">Double Room (Shared)</option>
                     <option value="No Accommodation">No Accommodation Needed</option>
                   </select>
                   {errors.roomPreference && (
                     <p className="text-red-500 text-sm mt-1">{errors.roomPreference.message}</p>
                   )}
                 </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    {...register('mobilityAccess')}
                    className="w-4 h-4 text-liberian-red border-gray-300 rounded focus:ring-liberian-red"
                  />
                  <label className="ml-2 text-sm text-gray-700">
                    I require mobility assistance or accessibility accommodations
                  </label>
                </div>
              </div>
            </div>

            {/* Dietary Preferences and T-Shirt Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Utensils className="w-6 h-6 mr-3 text-liberian-red" />
                Dietary Preferences and T-Shirt
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                 <div>
                   <label className="block text-sm font-medium text-gray-700 mb-2">
                     Food Preference
                   </label>
                   <select
                     {...register('foodPreference')}
                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-liberian-red focus:border-transparent"
                   >
                     <option value="">Select food preference (optional)</option>
                     <option value="Non-Vegetarian">Non-Vegetarian</option>
                     <option value="Vegetarian">Vegetarian</option>
                     <option value="Vegan">Vegan</option>
                     <option value="Halal">Halal</option>
                     <option value="Other">Other</option>
                   </select>
                 </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Any food allergies?
                  </label>
                  <input
                    type="text"
                    {...register('foodAllergies')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-liberian-red focus:border-transparent"
                    placeholder="e.g., nuts, shellfish, etc."
                  />
                </div>

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
                      <p className="mb-4">Please upload a passport size photo (JPG, PNG) for your summit badge.</p>
                      
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
