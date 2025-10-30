import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, ArrowRight, Star, Trophy, Globe } from 'lucide-react';
import Countdown from '../components/Countdown';
import HeroSlider from '../components/HeroSlider';
import type { GetStaticProps } from 'next';
import partnersLocal from '../data/partners';
import speakersLocal from '../data/speakers';

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
  _id?: string;
  name: string;
  title: string;
  image: any;
  bio?: string;
  topics?: string[];
  social?: {
    linkedin?: string;
    twitter?: string;
  };
  featured?: boolean;
  order?: number;
}

interface Partner {
  name: string;
  logo: any;
  url: string;
}

interface HomeProps {
  homeData: Partial<HomeData> | null;
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
      Globe: <Globe className="w-8 h-8" />,
    };
    return icons[iconName] ?? <Star className="w-8 h-8" />;
  };

  // Default features if none are provided from Sanity
  const defaultFeatures = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Connect & Engage',
      description: 'Strengthen ties within the Liberian diaspora across East Africa.',
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Learn & Share',
      description: 'Exchange knowledge, best practices, and success stories.',
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Shape Leadership',
      description: 'Participate in democratic elections for FOLICEA leaders.',
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'Network & Collaborate',
      description: 'Build partnerships for community growth and economic empowerment.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Celebrate Culture',
      description: "Experience Liberia's rich heritage and East Africa's diversity.",
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Explore Innovation',
      description: 'Discover entrepreneurial and tech-driven solutions for diaspora development.',
    },
  ];

  // Default speakers if none are provided from Sanity
  const defaultSpeakers: Speaker[] = [
    {
      name: 'Hon. MacMillan Vaye',
      title: 'National Chairman Emeritus, Liberian Community in Rwanda (LIBCOR)',
      image: 'https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Hon.%20MacMillan%20Vaye.jpg?updatedAt=1761596038108',
      bio: '',
      topics: [],
      social: { linkedin: '#', twitter: '#' },
    },
    {
      name: 'Madam Grace Biah-Patrick',
      title: 'Gender & Climate Change Focal Point, UNFCCC – Environment Protection Agency',
      image: 'https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Madam%20Grace%20Biah-Patrick.jpg?updatedAt=1761596038136',
      bio: '',
      topics: [],
      social: { linkedin: '#', twitter: '#' },
    },
    {
      name: 'Emmanuel Patrick',
      title: 'Acting Chairperson, FOLICEA & Former Chairperson, LIBCOR',
      image: 'https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/emmanuel%20P.jpg?updatedAt=1756227156834',
      bio: '',
      topics: [],
      social: { linkedin: '#', twitter: '#' },
    },
  ];

  // Default partners if none are provided from Sanity
  const defaultPartners: Partner[] = [
    { name: 'Liberian Community in Rwanda (LIBCOR)', logo: 'https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/libcor%20logo.jpg?updatedAt=1757333453787', url: '#' },
    { name: 'Association of Liberians in Uganda', logo: 'https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/uganda%20logo.jpg?updatedAt=1757333453230', url: '#' },
    { name: 'Liberian Community in Kenya', logo: 'https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/kenya%20logo.jpg?updatedAt=1757333451766', url: '#' },
    { name: 'Liberian Community in Tanzania', logo: 'https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/tan%20logo.jpg?updatedAt=1757333452646', url: '#' },
    { name: 'Empire TV', logo: 'https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/empire%20tv.png.jpg?updatedAt=1761596488173', url: '#' },
  ];

  // Use data from Sanity or fallback to defaults
  const featuresData = (homeData?.features?.length ?? 0) > 0
    ? (homeData!.features as NonNullable<HomeData['features']>).map((feature) => ({
        icon: getIconComponent(feature.icon),
        title: feature.title,
        description: feature.description,
      }))
    : defaultFeatures;

  const speakersData = speakers?.length > 0 ? speakers : defaultSpeakers;
  const partnersData = partners?.length > 0 ? partners : defaultPartners;

  return (
    <div>
      {/* Hero Section with Slider */}
      <section className="relative min-h-screen">
        <HeroSlider slides={[]} />

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
                  {homeData?.title || 'FOLICEA Summit 2025'}
                </h1>

                <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed">
                  {homeData?.subtitle || 'Federation of Liberian Communities in East Africa'}
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
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">Event Details</h2>
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
              <p className="text-xs sm:text-sm text-white/90">{homeData?.eventDate || 'November 28 - 30, 2025'}</p>
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
              <p className="text-xs sm:text-sm text-white/90">{homeData?.eventVenue || 'Kampala, Uganda'}</p>
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
              <p className="text-xs sm:text-sm text-white/90">{homeData?.eventAttendees || 'Liberians across East Africa & Friends'}</p>
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
              {homeData?.welcomeTitle || 'Welcome to the FOLICEA Summit'}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {homeData?.welcomeText || 'The leading gathering for Liberians in East Africa, fostering unity, networking, and community development.'}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-liberian-blue/10 to-liberian-red/10 rounded-2xl p-6 md:p-8 mb-10"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center">Summit Theme</h3>
            <p className="text-xl md:text-2xl text-gray-800 text-center max-w-4xl mx-auto mb-6 font-semibold">
              {homeData?.summitTheme || '“From Diaspora to Homeland: Strengthening Community Ties for National Development”'}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {(homeData?.themePoints || [
                { title: 'Unity and Representation', description: 'Of the Liberian diaspora' },
                { title: 'Diaspora Investment', description: 'And economic empowerment' },
                { title: 'Entrepreneurship & Innovation', description: 'Tech-driven solutions' },
                { title: 'Democratic Governance', description: 'And strategic planning' },
                { title: 'Leadership Elections', description: 'Institutional strengthening' },
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
            <a
              href="https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/CSC%20Logistic%20Note.pdf?updatedAt=1758307249045"
              className="btn-primary text-lg px-8 py-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Logistics Note (PDF)
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-4 rounded-lg border border-white/60 text-white hover:bg-white hover:text-liberian-red transition-colors"
            >
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
                <div className="text-liberian-red mb-3">{feature.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Speakers</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">Learn from industry leaders and community champions</p>
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
                    src={typeof speaker.image === 'string' ? speaker.image : '/favicon.svg'}
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

          <div className="mt-8">
            <div className="flex justify-center">
              <Link href="/speakers" className="btn-primary inline-flex items-center">
                View All Speakers
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Partners</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">Our valued partners supporting the Summit</p>
          </motion.div>

          <div className="overflow-hidden">
            <div className="flex items-center gap-6 min-w-max animate-marquee">
              {[...partnersData, ...partnersData].map((partner, idx) => (
                <a
                  key={`${partner.name}-${idx}`}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 flex items-center justify-center flex-shrink-0"
                >
                  <div className="relative w-40 h-24">
                    <Image
                      src={typeof partner.logo === 'string' ? partner.logo : '/favicon.svg'}
                      alt={partner.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">Ready to Join Us?</h2>
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
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  // Use local data only (no CMS)
  const homeData = null;
  const speakers = Array.isArray(speakersLocal) ? (speakersLocal as Speaker[]) : [];
  const partners = Array.isArray(partnersLocal) ? (partnersLocal as Partner[]) : [];

  return {
    props: {
      homeData,
      speakers,
      partners,
    },
  };
};

export default HomePage;
