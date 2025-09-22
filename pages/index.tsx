import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, ArrowRight, Star, Trophy, Globe } from 'lucide-react';
import Countdown from '../components/Countdown';
import HeroSlider from '../components/HeroSlider';
import type { GetStaticProps } from 'next';
import { urlFor, getSingleDocument, getDocuments } from '../lib/sanity.client';

// Define types for our data
interface HomeData {
  title: string;
  subtitle: string;
  heroSlides: Array<{
    image: any;
    alt: string;
  }>;
  eventDate: string;
  eventVenue: string;
  eventAttendees: string;
  welcomeTitle: string;
  welcomeText: string;
  summitTheme: string;
  themePoints: Array<{
    title: string;
    description: string;
  }>;
  features: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
}

interface Speaker {
  _id: string;
  name: string;
  title: string;
  image: any;
  bio: string;
  topics: string[];
  social: {
    linkedin: string;
    twitter: string;
  };
  featured: boolean;
  order: number;
}

interface Partner {
  name: string;
  logo: any;
  url: string;
}

interface HomeProps {
  homeData: HomeData;
  speakers: Speaker[];
  partners: Partner[];
}

const HomePage = ({ homeData, speakers, partners }: HomeProps) => {
  // Map icon strings to actual components
  const getIconComponent = (iconName: string) => {
    const icons: Record<string, JSX.Element> = {
      Users: <Users className="w-8 h-8" />,
      Star: <Star className="w-8 h-8" />,
      Calendar: <Calendar className="w-8 h-8" />,
      MapPin: <MapPin className="w-8 h-8" />,
      Trophy: <Trophy className="w-8 h-8" />,
      Globe: <Globe className="w-8 h-8" />
    };
    return icons[iconName] ?? <Star className="w-8 h-8" />;
  };

  // Default features if none are provided from Sanity
  const defaultFeatures = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Connect & Engage",
      description: "Strengthen ties within the Liberian diaspora across East Africa."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Learn & Share",
      description: "Exchange knowledge, best practices, and success stories."
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Shape Leadership",
      description: "Participate in democratic elections for FOLICEA leaders."
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Network & Collaborate",
      description: "Build partnerships for community growth and economic empowerment."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Celebrate Culture",
      description: "Experience Liberia's rich heritage and East Africa's diversity."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Explore Innovation",
      description: "Discover entrepreneurial and tech-driven solutions for diaspora development."
    }
  ];

  // Default speakers if none are provided from Sanity
  const defaultSpeakers = [
    {
      name: "H.E.",
      title: "hhh",
      image: "https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Logo.png.jpg?updatedAt=1756227162403",
      bio: "",
      topics: [],
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Hon.jjjj",
      title: "Sj",
      image: "https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Logo.png.jpg?updatedAt=1756227162403",
      bio: "",
      topics: [],
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Emmanuel Patrick",
      title: "Acting Chairperson, FOLICEA & Former Chairperson, LIBCOR",
      image: "https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/emmanuel%20P.jpg?updatedAt=1756227156834",
      bio: "",
      topics: [],
      social: { linkedin: "#", twitter: "#" }
    }
  ];

  // Default partners if none are provided from Sanity
  const defaultPartners = [
    { name: 'Liberian Community in Rwanda (LIBCOR)', logo: 'https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/libcor%20logo.jpg?updatedAt=1757333453787', url: '#' },
    { name: 'Association of Liberians in Uganda', logo: 'https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/uganda%20logo.jpg?updatedAt=1757333453230', url: '#' },
    { name: 'Liberian Community in Kenya', logo: 'https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/kenya%20logo.jpg?updatedAt=1757333451766', url: '#' },
    { name: 'Liberian Community in Tanzania', logo: 'https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/tan%20logo.jpg?updatedAt=1757333452646', url: '#' },
  ];

  // Sponsors (hardcoded for now)
  const sponsors = [
    { name: 'Sponsor 1', url: '#' },
    { name: 'Sponsor 2', url: '#' },
    { name: 'Sponsor 3', url: '#' },
    { name: 'Sponsor 4', url: '#' },
    { name: 'Sponsor 5', url: '#' },
    { name: 'Sponsor 6', url: '#' },
  ];

  // Use data from Sanity or fallback to defaults
  const featuresData = homeData?.features?.length > 0 
    ? homeData.features.map(feature => ({
        icon: getIconComponent(feature.icon),
        title: feature.title,
        description: feature.description
      }))
    : defaultFeatures;

  const speakersData = speakers?.length > 0 ? speakers : defaultSpeakers;
  const partnersData = partners?.length > 0 ? partners : defaultPartners;

  return (
    <div>
      {/* Hero Section with Slider */}
      <section className="relative min-h-screen">
        <HeroSlider slides={homeData?.heroSlides} />
        
        {/* Hero Content Overlay */}
        <div className="absolute inset-0 z-10 flex flex-col justify-center pt-32 pb-8">
          <div className="container-custom text-center text-white flex-1 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-6xl mx-auto px-4"
            >
              {/* Main Title */}
              <div className="mb-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6">
                  {homeData?.title || "FOLICEA Summit 2025"}
                </h1>
                
                <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed">
                  {homeData?.subtitle || "Federation of Liberian Communities in East Africa"}
                </p>
              </div>

              {/* Countdown */}
              <div className="mb-8 sm:mb-10">
                <Countdown />
              </div>

              {/* Call to Action */}
              <div className="mb-8 sm:mb-10">
                <p className="text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
                  Don't miss this historic gathering of the Liberian diaspora in East Africa
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="py-8 sm:py-12 bg-gradient-to-r from-liberian-blue to-liberian-red text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
              Event Details
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center"
            >
              <Calendar className="w-6 h-6 mx-auto mb-2 text-white/90" />
              <h3 className="text-base sm:text-lg font-semibold mb-1">Date</h3>
              <p className="text-xs sm:text-sm text-white/90">{homeData?.eventDate || "November 28 - 30, 2025"}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center"
            >
              <MapPin className="w-6 h-6 mx-auto mb-2 text-white/90" />
              <h3 className="text-base sm:text-lg font-semibold mb-1">Venue</h3>
              <p className="text-xs sm:text-sm text-white/90">{homeData?.eventVenue || "Kampala, Uganda"}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center"
            >
              <Users className="w-6 h-6 mx-auto mb-2 text-white/90" />
              <h3 className="text-base sm:text-lg font-semibold mb-1">Attendees</h3>
              <p className="text-xs sm:text-sm text-white/90">{homeData?.eventAttendees || "Liberians across East Africa & Friends"}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About FOLICEA Section */}
      <section className="section-padding bg-white pt-16 sm:pt-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {homeData?.welcomeTitle || "Welcome to the FOLICEA Summit"}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {homeData?.welcomeText || "The leading gathering for Liberians in East Africa, fostering unity, networking, and community development."}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-liberian-blue/10 to-liberian-red/10 rounded-2xl p-6 md:p-8 mb-10"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Summit Theme
            </h3>
            <p className="text-xl md:text-2xl text-gray-800 text-center max-w-4xl mx-auto mb-6 font-semibold">
              {homeData?.summitTheme || "\"From Diaspora to Homeland: Strengthening Community Ties for National Development\""}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {(homeData?.themePoints || [
                { title: "Unity and Representation", description: "Of the Liberian diaspora" },
                { title: "Diaspora Investment", description: "And economic empowerment" },
                { title: "Entrepreneurship & Innovation", description: "Tech-driven solutions" },
                { title: "Democratic Governance", description: "And strategic planning" },
                { title: "Leadership Elections", description: "Institutional strengthening" }
              ]).map((point, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-start gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-liberian-red/10 text-liberian-red font-semibold">{index + 1}</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">{point.title}</h4>
                    <p className="text-sm text-gray-600">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="text-center space-x-3">
            <a href="https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/CSC%20Logistic%20Note.pdf?updatedAt=1758307249045" className="btn-primary text-lg px-8 py-4" target="_blank" rel="noopener noreferrer">
              Download Logistics Note (PDF)
            </a>
            <Link href="/contact" className="inline-flex items-center px-6 py-4 rounded-lg border border-white/60 text-white hover:bg-white hover:text-liberian-red transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Why Attend Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Attend FOLICEA Summit 2025?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Join us for an unforgettable experience that will strengthen our community bonds and create lasting impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuresData.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg card-hover"
              >
                <div className="text-liberian-red mb-3">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Speakers Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Speakers
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Learn from industry leaders and community champions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {speakersData.slice(0, 3).map((speaker, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image 
                    src={typeof speaker.image === 'string' ? speaker.image : urlFor(speaker.image).url()} 
                    alt={speaker.name}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{speaker.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{speaker.title}</p>
                  <div className="flex space-x-2">
                    {speaker.social?.linkedin && (
                      <a href={speaker.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    )}
                    {speaker.social?.twitter && (
                      <a href={speaker.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/speakers" className="btn-primary">
              View All Speakers
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Partner Organizations */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition

// studio/schemaTypes/index.js
import home from './home'
import about from './about'
import agenda from './agenda'
import speaker from './speaker'
import news from './news'
import pitchCompetition from './pitchCompetition'
import contact from './contact'
import registration from './registration'

export const schemaTypes = [
  home,
  about,
  agenda,
  speaker,
  news,
  pitchCompetition,
  contact,
  registration
]


const HomePage = () => {
  // Trigger redeploy with environment variables
  // FOLICEA Summit 2025 - Homepage
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Connect & Engage",
      description: "Strengthen ties within the Liberian diaspora across East Africa."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Learn & Share",
      description: "Exchange knowledge, best practices, and success stories."
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Shape Leadership",
      description: "Participate in democratic elections for FOLICEA leaders."
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Network & Collaborate",
      description: "Build partnerships for community growth and economic empowerment."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Celebrate Culture",
      description: "Experience Liberia’s rich heritage and East Africa’s diversity."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Explore Innovation",
      description: "Discover entrepreneurial and tech-driven solutions for diaspora development."
    }
  ];

  const speakers = [
    {
      name: "H.E.",
      title: "hhh",
      image: "https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Logo.png.jpg?updatedAt=1756227162403",
      bio: "",
      topics: [],
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Hon.jjjj",
      title: "Sj",
      image: "https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Logo.png.jpg?updatedAt=1756227162403",
      bio: "",
      topics: [],
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Emmanuel Patrick",
      title: "Acting Chairperson, FOLICEA & Former Chairperson, LIBCOR",
      image: "https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/emmanuel%20P.jpg?updatedAt=1756227156834",
      bio: "",
      topics: [],
      social: { linkedin: "#", twitter: "#" }
    }
  ];

  const partners = [
    { name: 'Liberian Community in Rwanda (LIBCOR)', logo: 'https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/libcor%20logo.jpg?updatedAt=1757333453787', url: '#' },
    { name: 'Association of Liberians in Uganda', logo: 'https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/uganda%20logo.jpg?updatedAt=1757333453230', url: '#' },
    { name: 'Liberian Community in Kenya', logo: 'https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/kenya%20logo.jpg?updatedAt=1757333451766', url: '#' },
    { name: 'Liberian Community in Tanzania', logo: 'https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/tan%20logo.jpg?updatedAt=1757333452646', url: '#' },
  ];

  const sponsors = [
    { name: 'Sponsor 1', url: '#' },
    { name: 'Sponsor 2', url: '#' },
    { name: 'Sponsor 3', url: '#' },
    { name: 'Sponsor 4', url: '#' },
    { name: 'Sponsor 5', url: '#' },
    { name: 'Sponsor 6', url: '#' },
  ];



  return (
    <div>
      {/* Hero Section with Slider */}
      <section className="relative min-h-screen">
        <HeroSlider />
        
        {/* Hero Content Overlay */}
        <div className="absolute inset-0 z-10 flex flex-col justify-center pt-32 pb-8">
          <div className="container-custom text-center text-white flex-1 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-6xl mx-auto px-4"
            >
              {/* Main Title */}
              <div className="mb-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6">
                  FOLICEA Summit 2025
                </h1>
                
                <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed">
                  Federation of Liberian Communities in East Africa
                </p>
              </div>



              {/* Countdown */}
              <div className="mb-8 sm:mb-10">
                <Countdown />
              </div>

              {/* Call to Action */}
              <div className="mb-8 sm:mb-10">
                <p className="text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
                  Don't miss this historic gathering of the Liberian diaspora in East Africa
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="py-8 sm:py-12 bg-gradient-to-r from-liberian-blue to-liberian-red text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
              Event Details
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center"
            >
              <Calendar className="w-6 h-6 mx-auto mb-2 text-white/90" />
              <h3 className="text-base sm:text-lg font-semibold mb-1">Date</h3>
              <p className="text-xs sm:text-sm text-white/90">November 28 - 30, 2025</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center"
            >
              <MapPin className="w-6 h-6 mx-auto mb-2 text-white/90" />
              <h3 className="text-base sm:text-lg font-semibold mb-1">Venue</h3>
              <p className="text-xs sm:text-sm text-white/90">Kampala, Uganda</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center"
            >
              <Users className="w-6 h-6 mx-auto mb-2 text-white/90" />
              <h3 className="text-base sm:text-lg font-semibold mb-1">Attendees</h3>
              <p className="text-xs sm:text-sm text-white/90">Liberians across East Africa & Friends</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About FOLICEA Section */}
      <section className="section-padding bg-white pt-16 sm:pt-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Welcome to the FOLICEA Summit
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The leading gathering for Liberians in East Africa, fostering unity, networking, and community development.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-liberian-blue/10 to-liberian-red/10 rounded-2xl p-6 md:p-8 mb-10"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Summit Theme
            </h3>
            <p className="text-xl md:text-2xl text-gray-800 text-center max-w-4xl mx-auto mb-6 font-semibold">
              “From Diaspora to Homeland:  Strengthening Community Ties for National Development”
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-start gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-liberian-red/10 text-liberian-red font-semibold">1</span>
                <div>
                  <h4 className="font-semibold text-gray-900">Unity and Representation</h4>
                  <p className="text-sm text-gray-600">Of the Liberian diaspora</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-start gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-liberian-red/10 text-liberian-red font-semibold">2</span>
                <div>
                  <h4 className="font-semibold text-gray-900">Diaspora Investment</h4>
                  <p className="text-sm text-gray-600">And economic empowerment</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-start gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-liberian-red/10 text-liberian-red font-semibold">3</span>
                <div>
                  <h4 className="font-semibold text-gray-900">Entrepreneurship & Innovation</h4>
                  <p className="text-sm text-gray-600">Tech-driven solutions</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-start gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-liberian-red/10 text-liberian-red font-semibold">4</span>
                <div>
                  <h4 className="font-semibold text-gray-900">Democratic Governance</h4>
                  <p className="text-sm text-gray-600">And strategic planning</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-start gap-3 sm:col-span-2 lg:col-span-1">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-liberian-red/10 text-liberian-red font-semibold">5</span>
                <div>
                  <h4 className="font-semibold text-gray-900">Leadership Elections</h4>
                  <p className="text-sm text-gray-600">Institutional strengthening</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="text-center space-x-3">
            <a href="https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/CSC%20Logistic%20Note.pdf?updatedAt=1758307249045" className="btn-primary text-lg px-8 py-4" target="_blank" rel="noopener noreferrer">
              Download Logistics Note (PDF)
            </a>
            <Link href="/contact" className="inline-flex items-center px-6 py-4 rounded-lg border border-white/60 text-white hover:bg-white hover:text-liberian-red transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>



      {/* Why Attend Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Attend FOLICEA Summit 2025?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Join us for an unforgettable experience that will strengthen our community bonds and create lasting impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg card-hover"
              >
                <div className="text-liberian-red mb-3">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Speakers Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured Speakers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from distinguished leaders and experts who will share their insights and experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {speakers.map((speaker, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-2xl p-[1px] bg-gradient-to-r from-liberian-blue/50 via-liberian-red/50 to-liberian-blue/50 shadow-xl hover:shadow-2xl transition-shadow"
              >
                <div className="relative bg-white rounded-2xl overflow-hidden">
                  <div className="relative h-64">
                    <Image src={speaker.image} alt={speaker.name} fill className="object-cover" />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4">
                      <h3 className="text-white text-lg font-bold">{speaker.name}</h3>
                      <p className="text-white/90 text-sm">{speaker.title}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/speakers" className="inline-flex items-center px-5 py-3 rounded-full border border-gray-300 text-gray-800 hover:border-liberian-red hover:text-liberian-red transition-colors shadow-sm">
              View All Speakers
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Become a Sponsor Section */}
      <section className="py-8 sm:py-12 bg-gradient-to-r from-liberian-blue to-liberian-red text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sponsorship Opportunities
            </h2>
            <p className="text-lg max-w-3xl mx-auto">
              Explore sponsor packages and partner with us to make FOLICEA Summit 2025 a success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Users2 className="w-12 h-12 mx-auto mb-3 text-white/80" />
              <h3 className="text-xl font-semibold mb-2">Network Access</h3>
              <p className="text-white/80 text-sm">Connect with influential leaders and professionals from across East Africa</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Trophy className="w-12 h-12 mx-auto mb-3 text-white/80" />
              <h3 className="text-xl font-semibold mb-2">Brand Visibility</h3>
              <p className="text-white/80 text-sm">Showcase your organization to a targeted audience of decision-makers</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Globe className="w-12 h-12 mx-auto mb-3 text-white/80" />
              <h3 className="text-xl font-semibold mb-2">Social Impact</h3>
              <p className="text-white/80 text-sm">Support community development and diaspora engagement initiatives</p>
            </motion.div>
          </div>

          <div className="text-center space-x-3">
            <a href="https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Sponsorship%20Proposal.pdf?updatedAt=1757776444961" target="_blank" rel="noopener noreferrer" className="bg-white text-liberian-red hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg text-base transition-all duration-300 transform hover:scale-105">
              Sponsorship Opportunities (PDF)
            </a>
            <Link href="/contact" className="inline-flex items-center px-6 py-3 rounded-lg border border-white/60 text-white hover:bg-white hover:text-liberian-red transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Partners & Sponsors Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Collaborating with leading Liberian communities to maximize impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-lg text-center card-hover"
              >
                <div className="h-20 mb-4 flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-full max-w-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const nextSibling = target.nextSibling as HTMLElement;
                      if (nextSibling) {
                        nextSibling.style.display = 'block';
                      }
                    }}
                  />
                  <div className="hidden text-liberian-red font-semibold text-lg">
                    {partner.name}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {partner.name}
                </h3>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Valued Sponsors
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              We are grateful for the support of our partners who make this summit possible.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {sponsors.map((sponsor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-lg text-center card-hover"
                >
                  <div className="h-16 mb-4 flex items-center justify-center">
                    <img
                      src="https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Logo.png.jpg?updatedAt=1756227162403"
                      alt={sponsor.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {sponsor.name}
                  </h3>
                  <Link href={sponsor.url} target="_blank" rel="noopener noreferrer" className="text-liberian-red hover:text-liberian-blue font-medium text-sm mt-1 inline-block">
                    Sponsor Link
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 gradient-bg">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to Join Us?
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-6 max-w-2xl mx-auto">
              Secure your spot at the most anticipated Liberian diaspora gathering in East Africa
            </p>
            <Link href="/registration" className="bg-white text-liberian-red hover:bg-gray-100 font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-lg text-base sm:text-lg transition-all duration-300 transform hover:scale-105">
              Register Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
    export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  try {
    // Fetch home page data
    const homeData = await getSingleDocument('home');
    
    // Fetch featured speakers
    const speakers = await sanityClient.fetch(`
      *[_type == "speaker" && featured == true] | order(order asc)
    `);
    
    // Fetch partners
    const partners = await getDocuments('partner');
    
    return {
      props: {
        homeData: homeData || {},
        speakers: speakers || [],
        partners: partners || [],
      },
      // Revalidate every hour
      revalidate: 3600,
    };
  } catch (error) {
    console.error("Error fetching data from Sanity:", error);
    return {
      props: {
        homeData: {},
        speakers: [],
        partners: [],
      },
      revalidate: 60, // Try again sooner if there was an error
    };
    export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  try {
    // Fetch home page data
    const homeData = await getSingleDocument('home');
    
    // Fetch featured speakers
    const speakers = await sanityClient.fetch(`
      *[_type == "speaker" && featured == true] | order(order asc)
    `);
    
    // Fetch partners
    const partners = await getDocuments('partner');
    
    return {
      props: {
        homeData: homeData || {},
        speakers: speakers || [],
        partners: partners || [],
      },
      // Revalidate every hour
      revalidate: 3600,
    };
  } catch (error) {
    console.error("Error fetching data from Sanity:", error);
    return {
      props: {
        homeData: {},
        speakers: [],
        partners: [],
      },
      revalidate: 60, // Try again sooner if there was an error
    };
  }
};

  }
};

  );
};
export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  try {
    // Fetch home page data
    const homeData = await getSingleDocument('home');
    
    // Fetch featured speakers
    const speakers = await sanityClient.fetch(`
      *[_type == "speaker" && featured == true] | order(order asc)
    `);
    
    // Fetch partners
    const partners = await getDocuments('partner');
    
    return {
      props: {
        homeData: homeData || {},
        speakers: speakers || [],
        partners: partners || [],
      },
      // Revalidate every hour
      revalidate: 3600,
    };
  } catch (error) {
    console.error("Error fetching data from Sanity:", error);
    return {
      props: {
        homeData: {},
        speakers: [],
        partners: [],
      },
      revalidate: 60, // Try again sooner if there was an error
    };
  }
};


export const getStaticProps: GetStaticProps = async () => {
  // Fetch single home document
  const homeData = await getSingleDocument('home');

  // Fetch speakers and partners
  const speakers = await getDocuments('speaker');
  const partners = await getDocuments('partner');

  return {
    props: {
      homeData: homeData || null,
      speakers: Array.isArray(speakers) ? speakers : [],
      partners: Array.isArray(partners) ? partners : [],
    },
    revalidate: 60, // ISR for freshness
  };
};

export default HomePage;


