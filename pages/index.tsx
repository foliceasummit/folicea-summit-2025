import Image from 'next/image';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users } from 'lucide-react';
import Countdown from '../components/Countdown';
import HeroSlider from '../components/HeroSlider';
import partnersLocal from '../data/partners';
import speakersLocal from '../data/speakers';

// Define types for our data

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
  speakers: Speaker[];
  partners: Partner[];
}

const HomePage = ({ partners }: HomeProps) => {


  // Default partners if none are provided from Sanity
  const defaultPartners: Partner[] = [
    { name: 'Liberian Community in Rwanda (LIBCOR)', logo: 'https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/libcor%20logo.jpg?updatedAt=1757333453787', url: '#' },
    { name: 'Association of Liberians in Uganda', logo: 'https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/uganda%20logo.jpg?updatedAt=1757333453230', url: '#' },
    { name: 'Liberian Community in Kenya', logo: 'https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/kenya%20logo.jpg?updatedAt=1757333451766', url: '#' },
    { name: 'Liberian Community in Tanzania', logo: 'https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/tan%20logo.jpg?updatedAt=1757333452646', url: '#' },
    { name: 'Empire TV', logo: 'https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/empire%20tv.png.jpg?updatedAt=1761596488173', url: '#' },
  ];

  // Default sponsors
  const defaultSponsors: Partner[] = [
    { name: 'Brownerica', logo: 'https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Brownerica.png?updatedAt=1762242409473', url: '#' },
    { name: "Bel's Beauty", logo: 'https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/bel\'s%20beauty.jpg?updatedAt=1762242408469', url: '#' },
    { name: "Charlotte's Kitchen", logo: 'https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/charlottes%20kitchen.jpg?updatedAt=1762242408305', url: '#' },
    { name: 'Rozeland Bar & Restaurant (Uganda)', logo: 'https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Rozeland%20Bar%20&%20Restaurant%20(Uganda).jpg?updatedAt=1762524071879', url: '#' },
  ];

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

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-4 rounded-lg border border-white/60 text-white hover:bg-white hover:text-liberian-red transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>



      {/* Messages Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-liberian-blue/5 to-liberian-red/5 rounded-2xl p-8 border border-liberian-blue/20"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                MESSAGE FROM THE Central Summit Committee CHAIRMAN
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Welcome to the FOLICEA Summit 2025. This historic gathering represents the collective vision of Liberians across East Africa to strengthen our bonds and drive meaningful development for our homeland and diaspora communities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-liberian-red/5 to-liberian-blue/5 rounded-2xl p-8 border border-liberian-red/20"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                MESSAGE FROM THE Acting CHAIRMAN folicea
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                We are excited to welcome you to this transformative summit. Together, we will celebrate our heritage, network with fellow Liberians, and create opportunities for economic empowerment and democratic participation that will benefit our community for years to come.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Sponsors</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">Our generous sponsors making this Summit possible</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {defaultSponsors.map((sponsor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-200 text-center overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-liberian-blue/5 via-transparent to-liberian-red/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="relative w-full h-40 mb-6">
                    <Image
                      src={typeof sponsor.logo === 'string' ? sponsor.logo : '/favicon.svg'}
                      alt={sponsor.name}
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{sponsor.name}</h3>
                  <a
                    href={sponsor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-liberian-blue to-liberian-red text-white text-sm font-medium rounded-lg hover:from-liberian-red hover:to-liberian-blue transition-all duration-300 transform hover:scale-105 shadow-md"
                  >
                    Visit Website
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
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
