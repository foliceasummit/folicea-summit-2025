import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, ArrowRight, Star, Users2, Trophy, Globe } from 'lucide-react';
import Countdown from '../components/Countdown';
import HeroSlider from '../components/HeroSlider';

const HomePage = () => {
  // Trigger redeploy with environment variables
  // FOLICEA Summit 2025 - Homepage
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Strengthen Diaspora Engagement",
      description: "Build stronger connections within the Liberian diaspora community across East Africa."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Facilitate Networking",
      description: "Connect with professionals, entrepreneurs, and community leaders for mutual growth."
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Discuss Development Strategies",
      description: "Explore innovative approaches to community development and economic empowerment."
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Share Knowledge & Best Practices",
      description: "Learn from successful initiatives and share your own experiences with the community."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Promote Cultural Exchange",
      description: "Celebrate our rich Liberian heritage while embracing the diversity of East Africa."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Build Lasting Partnerships",
      description: "Form strategic alliances that will benefit both individuals and the broader community."
    }
  ];

  const speakers = [
    {
      name: "H.E. Dr. Jeremiah Kpan Koung",
      title: "Vice President of Liberia",
              image: "https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/VP%20Koon.jpg?updatedAt=1756252471149"
    },
    {
      name: "Hon. Richard Nagbe Koon",
      title: "Speaker of the House of Representatives, 55th Legislature, Republic of Liberia",
      image: "https://ik.imagekit.io/folicea/Richard%20Nagbe%20Koon.webp?updatedAt=1755893148873"
    },
    {
      name: "Emmanuel Patrick",
      title: "Acting Chairperson, FOLICEA & Former Chairperson, LIBCOR",
      image: "https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/emmanuel%20P.jpg?updatedAt=1756227156834"
    }
  ];

  const partners = [
    { name: 'LIBCOR', logo: 'https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/libcor%20logo.jpg?updatedAt=1757333453787', url: '#' },
    { name: 'Uganda', logo: 'https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/uganda%20logo.jpg?updatedAt=1757333453230', url: '#' },
    { name: 'Kenya', logo: 'https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/kenya%20logo.jpg?updatedAt=1757333451766', url: '#' },
    { name: 'Tanzania', logo: 'https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/tan%20logo.jpg?updatedAt=1757333452646', url: '#' },
  ];

  const sponsors = [
    { name: 'Sponsor 1', logo: 'https://logo.clearbit.com/google.com', url: 'https://www.google.com' },
    { name: 'Sponsor 2', logo: 'https://logo.clearbit.com/microsoft.com', url: 'https://www.microsoft.com' },
    { name: 'Sponsor 3', logo: 'https://logo.clearbit.com/cocacola.com', url: 'https://www.coca-cola.com' },
    { name: 'Sponsor 4', logo: 'https://logo.clearbit.com/visa.com', url: 'https://www.visa.com' },
    { name: 'Sponsor 5', logo: 'https://logo.clearbit.com/safaricom.co.ke', url: 'https://www.safaricom.co.ke' },
    { name: 'Sponsor 6', logo: 'https://logo.clearbit.com/mtn.com', url: 'https://www.mtn.com' },
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
              <h3 className="text-base sm:text-lg font-semibold mb-1">Date & Time</h3>
                              <p className="text-xs sm:text-sm text-white/90">December 5 - 7, 2025</p>
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
              <p className="text-xs sm:text-sm text-white/90">Kampala Serena Hotel, Uganda</p>
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
              The FOLICEA Summit is the premier gathering for the Liberian diaspora in East Africa. Our mission is to foster unity, promote professional networking, and drive community-led development initiatives.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-liberian-blue/10 to-liberian-red/10 rounded-2xl p-8 md:p-12 mb-16"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              "Unity in Diversity: Charting a Course for a Stronger Future"
            </h3>
            <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
              This year's theme will explore critical topics through engaging keynotes, interactive workshops, and cultural showcases.
            </p>
          </motion.div>

          <div className="text-center">
            <Link href="/about" className="btn-primary text-lg px-8 py-4">
              Learn More About FOLICEA
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
                className="bg-white rounded-xl overflow-hidden shadow-lg card-hover"
              >
                <div className="relative h-80 bg-gray-100">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {speaker.name}
                  </h3>
                  <p className="text-liberian-red font-medium">
                    {speaker.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/speakers" className="btn-outline">
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
              Become a Sponsor
            </h2>
            <p className="text-lg max-w-3xl mx-auto">
              Join us in supporting the Liberian diaspora community and gain valuable exposure to our network of professionals, leaders, and entrepreneurs.
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

          <div className="text-center">
            <Link href="/contact" className="bg-white text-liberian-red hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg text-base transition-all duration-300 transform hover:scale-105">
              Sponsorship Opportunities
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
              Collaborating with leading organizations to maximize impact.
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
                <div className="h-16 mb-4 flex items-center justify-center">
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
                      src={sponsor.logo}
                      alt={sponsor.name}
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
                      {sponsor.name}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {sponsor.name}
                  </h3>
                  <Link href={sponsor.url} target="_blank" rel="noopener noreferrer" className="text-liberian-red hover:text-liberian-blue font-medium text-sm mt-1 inline-block">
                    Visit Website
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
  );
};

export default HomePage;
