'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Upload, Calendar, MapPin, User, Building, Briefcase, Car, Bed, Utensils, Shirt } from 'lucide-react';
import { useDropzone } from 'react-dropzone';

interface RegistrationForm {
  // Personal Information
  profilePhoto: File | null;
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
}

const RegistrationPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState<File | null>(null);
  const [profilePhotoPreview, setProfilePhotoPreview] = useState<string>('');

  const { register, handleSubmit, formState: { errors }, reset } = useForm<RegistrationForm>();

  const onDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      setProfilePhoto(file);
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png']
    },
    maxFiles: 1,
    maxSize: 5242880 // 5MB
  });

  const onSubmit = async (data: RegistrationForm) => {
    setIsSubmitting(true);
    
    try {
      // Create a comprehensive registration message
      const registrationMessage = `
FOLICEA Summit 2025 Registration

Personal Information:
- Name: ${data.firstName} ${data.lastName}
- Email: ${data.email}
- Phone: ${data.phone}
- Date of Birth: ${data.dateOfBirth}
- Nationality: ${data.nationality}
- Current Country: ${data.currentCountry}
- City: ${data.city}

Professional Background:
- Occupation: ${data.occupation}
- Organization: ${data.organization || 'Not specified'}
- Years of Experience: ${data.yearsOfExperience}

Travel & Accommodation:
- Arrival Date: ${data.arrivalDate}
- Arrival Time: ${data.arrivalTime}
- Mode of Travel: ${data.modeOfTravel}
- Flight/Bus Number: ${data.flightBusNumber || 'Not specified'}
- Room Preference: ${data.roomPreference}
- Mobility Access: ${data.mobilityAccess ? 'Yes' : 'No'}

Preferences:
- Food Preference: ${data.foodPreference}
- Food Allergies: ${data.foodAllergies || 'None'}
- T-Shirt Size: ${data.tshirtSize}
- T-Shirt Color: ${data.tshirtColor}

Expectations: ${data.expectations}

Contributions: ${data.contributions}

Profile Photo: ${profilePhoto ? `Uploaded - ${profilePhoto.name} (${(profilePhoto.size / 1024 / 1024).toFixed(2)} MB)` : 'Not uploaded'}

Registration submitted at: ${new Date().toISOString()}
      `;

      // Try JSON approach first (like the working contact form)
      const jsonData = {
        access_key: 'e74266af-617b-4d91-8b63-b34274a06806',
        name: `${data.firstName} ${data.lastName}`,
        email: data.email,
        subject: 'FOLICEA Summit 2025 Registration',
        message: registrationMessage
      };

      console.log('Submitting registration form as JSON...');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
      });

      console.log('Response status:', response.status);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Web3Forms response:', result);
      
      if (result.success) {
        setSubmitSuccess(true);
        reset();
        setProfilePhoto(null);
        setProfilePhotoPreview('');
      } else {
        throw new Error(`Registration failed: ${result.message || 'Unknown error'}`);
      }
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
          Thank you for registering for the FOLICEA Summit 2025! You will receive a confirmation email shortly after your payment is completed.
          </p>
          <p className="text-sm text-gray-500 mb-6">
          To complete your registration, please send your payment via MoMo to: 0792109775, or use MoMo Code: XYZ123. 
          After payment, kindly send a screenshot to our WhatsApp: +231 776 038 583. 
          For any inquiries, please call: +250 792 100 775.
          </p>
          <button
            onClick={() => setSubmitSuccess(false)}
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
                    <li className="flex items-center">
                      <span className="text-green-300 mr-2">✓</span>
                      2 nights accommodation
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-300 mr-2">✓</span>
                      Breakfast & lunch
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-300 mr-2">✓</span>
                      T-shirt & Cap
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-300 mr-2">✓</span>
                      Summit bag
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Additional Benefits:</h3>
                  <ul className="space-y-1 text-base">
                    <li className="flex items-center">
                      <span className="text-green-300 mr-2">✓</span>
                      Summit materials
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-300 mr-2">✓</span>
                      Sightseeing Tour
                      Enjoy a guided tour of Uganda’s top tourist attractions on the final day of the summit.
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-300 mr-2">✓</span>
                      Networking opportunities
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-300 mr-2">✓</span>
                      Cultural experiences
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

                     <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl shadow-xl p-8">
            {/* Personal Information Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <User className="w-6 h-6 mr-3 text-liberian-red" />
                Personal Information
              </h2>
              
              {/* Profile Photo Upload */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Profile Photo * (White background preferred)
                </label>
                <div
                  {...getRootProps()}
                  className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
                    isDragActive ? 'border-liberian-red bg-red-50' : 'border-gray-300 hover:border-liberian-red'
                  }`}
                >
                  <input {...getInputProps()} />
                  {profilePhotoPreview ? (
                    <div className="space-y-4">
                      <img
                        src={profilePhotoPreview}
                        alt="Profile preview"
                        className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-liberian-red"
                      />
                      <p className="text-sm text-gray-600">Click to change photo</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <Upload className="w-12 h-12 mx-auto text-gray-400" />
                      <p className="text-gray-600">
                        {isDragActive ? 'Drop the photo here' : 'Click to upload or drag and drop'}
                      </p>
                      <p className="text-sm text-gray-500">PNG, JPG, JPEG up to 10MB</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    {...register('firstName', { required: 'First name is required' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-liberian-red focus:border-transparent"
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
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date of Birth * (mm/dd/yyyy)
                  </label>
                  <input
                    type="date"
                    {...register('dateOfBirth', { required: 'Date of birth is required' })}
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
                  />
                  {errors.nationality && (
                    <p className="text-red-500 text-sm mt-1">{errors.nationality.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Country *
                  </label>
                  <select
                    {...register('currentCountry', { required: 'Current country is required' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-liberian-red focus:border-transparent"
                  >
                    <option value="">Select Country</option>
                    <option value="Rwanda">Rwanda</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Tanzania">Tanzania</option>
                    <option value="Uganda">Uganda</option>
                    <option value="Ethiopia">Ethiopia</option>
                    <option value="Burundi">Burundi</option>
                    <option value="Comoros">Comoros</option>
                    <option value="South Sudan">South Sudan</option>
                    <option value="Zambia">Zambia</option>
                    <option value="Somalia">Somalia</option>
                    <option value="Mozambique">Mozambique</option>
                    <option value="Madagascar">Madagascar</option>
                    <option value="Mauritius">Mauritius</option>
                    <option value="Seychelles">Seychelles</option>
                    <option value="Malawi">Malawi</option>
                    <option value="Liberia">Liberia</option>
                    <option value="Other">Other</option>
                  </select>
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
                  />
                  {errors.city && (
                    <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Professional Background Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Briefcase className="w-6 h-6 mr-3 text-liberian-red" />
                Professional Background and Expectations
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
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Years of Professional Experience *
                  </label>
                  <select
                    {...register('yearsOfExperience', { required: 'Years of experience is required' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-liberian-red focus:border-transparent"
                  >
                    <option value="">Select Experience Level</option>
                    <option value="0-2">0-1 years</option>
                    <option value="0-2">2-3 years</option>
                    <option value="3-5">4-5 years</option>
                    <option value="6-10">6-10 years</option>
                    <option value="11-15">11-15 years</option>
                    <option value="16+">16+ years</option>
                  </select>
                  {errors.yearsOfExperience && (
                    <p className="text-red-500 text-sm mt-1">{errors.yearsOfExperience.message}</p>
                  )}
                </div>
              </div>

              <div className="mt-6 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What do you expect to learn or gain from this summit? *
                  </label>
                  <textarea
                    {...register('expectations', { required: 'Expectations are required' })}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-liberian-red focus:border-transparent"
                    placeholder="Please describe your expectations..."
                  />
                  {errors.expectations && (
                    <p className="text-red-500 text-sm mt-1">{errors.expectations.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    How do you think you can contribute to the summit and the Liberian community in East Africa? *
                  </label>
                  <textarea
                    {...register('contributions', { required: 'Contributions are required' })}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-liberian-red focus:border-transparent"
                    placeholder="Please describe your potential contributions..."
                  />
                  {errors.contributions && (
                    <p className="text-red-500 text-sm mt-1">{errors.contributions.message}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Travel and Accommodation Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Car className="w-6 h-6 mr-3 text-liberian-red" />
                Travel and Accommodation
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Arrival Date * (mm/dd/yyyy)
                  </label>
                  <input
                    type="date"
                    {...register('arrivalDate', { required: 'Arrival date is required' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-liberian-red focus:border-transparent"
                  />
                  {errors.arrivalDate && (
                    <p className="text-red-500 text-sm mt-1">{errors.arrivalDate.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Arrival Time (--:-- --)
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
                    Mode of Travel * (Select Travel Mode)
                  </label>
                  <select
                    {...register('modeOfTravel', { required: 'Mode of travel is required' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-liberian-red focus:border-transparent"
                  >
                    <option value="">Select Travel Mode</option>
                    <option value="Flight">Flight</option>
                    <option value="Bus">Bus</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.modeOfTravel && (
                    <p className="text-red-500 text-sm mt-1">{errors.modeOfTravel.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Flight/Bus Number (if applicable)
                  </label>
                  <input
                    type="text"
                    {...register('flightBusNumber')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-liberian-red focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Room Preference * (Select Room Preference)
                  </label>
                  <select
                    {...register('roomPreference', { required: 'Room preference is required' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-liberian-red focus:border-transparent"
                  >
                    <option value="">Select Room Preference</option>
                    <option value="Single">Single Room</option>
                    <option value="Double">Double Room</option>
                    <option value="Shared">Shared Room</option>
                    <option value="No Accommodation">No Accommodation Needed</option>
                  </select>
                  <p className="text-sm text-gray-600 mt-1">
                    <span className="text-green-600 font-medium">Note:</span> Shared room is free. Single and Double rooms will be paid for by you.
                  </p>
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
                    Require Mobility Access
                  </label>
                </div>
              </div>
            </div>

            {/* Dietary Preferences and T-Shirt Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Utensils className="w-6 h-6 mr-3 text-liberian-red" />
                Dietary Preferences and T-Shirt
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Food Preference * (Select Food Preference)
                  </label>
                  <select
                    {...register('foodPreference', { required: 'Food preference is required' })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-liberian-red focus:border-transparent"
                  >
                    <option value="">Select Food Preference</option>
                    <option value="Regular">Regular</option>
                    <option value="Vegetarian">Vegetarian</option>
                    <option value="Local Ugandan Dishes">Local Ugandan Dishes</option>
                    <option value="Continental/Western Cuisine">Continental/Western Cuisine</option>
                    <option value="Local Liberian Dishes">Local Liberian Dishes</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.foodPreference && (
                    <p className="text-red-500 text-sm mt-1">{errors.foodPreference.message}</p>
                  )}
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
