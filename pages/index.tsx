import Image from 'next/image';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import partnersLocal from '../data/partners';

// Define types for our data

interface Partner {
  name: string;
  logo: any;
  url: string;
}

interface HomeProps {
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

              {/* Summit Celebration */}
              <div className="mb-8 sm:mb-10">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 max-w-3xl mx-auto">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                    FOLICEA Summit 2025 — A Historic Success!
                  </h2>
                  <p className="text-lg sm:text-xl text-white/90 mb-8">
                    Thank you for making Kampala the heart of Liberian unity in East Africa. Together, we built bridges, elected leaders, and charted a path for our collective future.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
                    <Link
                      href="https://www.facebook.com/profile.php?id=100063613104073"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-liberian-red hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      View Summit Photos
                    </Link>
                    <Link
                      href="/contact"
                      className="bg-liberian-red/80 hover:bg-liberian-red text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 border border-white"
                    >
                      Download Report (Coming Soon)
                    </Link>
                    <Link
                      href="/contact"
                      className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-liberian-red font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      Join Mailing List
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Event Summary Section */}
      <section className="py-8 sm:py-12 bg-gradient-to-r from-liberian-blue to-liberian-red text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">Summit Summary</h2>
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
              <p className="text-xs sm:text-sm text-white/90">November 28 – 30, 2025</p>
              <p className="text-xs text-white/70 mt-2">The historic 3-day gathering that united Liberians</p>
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
              <p className="text-xs text-white/70 mt-2">Where community and commitment came together</p>
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
              <p className="text-xs sm:text-sm text-white/90">200+ Liberians & Friends from East Africa</p>
              <p className="text-xs text-white/70 mt-2">Leaders, youth, entrepreneurs, and diaspora champions</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Historic Gathering Summary (moved from About) */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              FOLICEA Summit 2025 - A Historic Gathering
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-liberian-blue/5 to-liberian-red/5 rounded-2xl p-8 md:p-10 border border-liberian-blue/20"
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The FOLICEA Summit 2025 was a historic gathering of Liberians from across East Africa, united in purpose to strengthen community ties and contribute meaningfully to national development. Held in Kampala, Uganda from <strong>November 28 - 30, 2025</strong>, under the theme <strong>"From Diaspora to Homeland: Strengthening Community Ties for National Development,"</strong> the summit brought together innovators, business owners, community leaders, entrepreneurs, journalists, youth representatives, and friends of Liberia to engage in dialogue, democratic leadership elections, and strategic planning for collective progress.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Through panels on diaspora investment, democratic governance, entrepreneurship, and cultural identity, participants forged new partnerships, shared innovative ideas, and reaffirmed their commitment to Liberia's future. The energy, collaboration, and sense of unity displayed throughout the three-day event marked a turning point for Liberian communities in East Africa.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The connections made and commitments shared in Kampala continue to inspire action. This summit was not an end but a beginning. Together, we are building a stronger, more engaged diaspora: <strong>one voice, one purpose, one people.</strong>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Summit Impact Section */}
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
              The Summit Made a Difference
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              FOLICEA Summit 2025 brought together leaders, innovators, and community members to strengthen ties, elect leadership, and build a stronger Liberian diaspora across East Africa. What we started in Kampala continues to inspire action and unity.
            </p>
          </motion.div>

          <div className="text-center">
            <Link
              href="/about"
              className="inline-flex items-center px-6 py-4 rounded-lg bg-liberian-red text-white hover:bg-liberian-blue transition-colors font-semibold"
            >
              Learn More About Our Impact
            </Link>
          </div>
        </div>
      </section>



      {/* Opening Remarks Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Opening Remarks</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Inspiring messages from our summit leaders</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* W. Praise Bloyuefloh Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-liberian-red/5 to-liberian-red/10 rounded-2xl p-6 sm:p-8 border border-liberian-red/20"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 flex-shrink-0">
                  <Image
                    src="https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Summit%20Photos/Picture2.jpg?updatedAt=1765096104785"
                    alt="W. Praise Bloyuefloh"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">W. Praise Bloyuefloh</h3>
                  <p className="text-sm text-gray-600">Chairperson, Central Summit Committee</p>
                </div>
              </div>
              <div className="prose prose-sm max-w-none text-gray-700 space-y-3 max-h-72 overflow-y-auto">
                <p className="text-sm">
                  Distinguished delegates, invited guests, partners, and fellow Liberians from across East Africa—welcome to the FOLICEA Inaugural Summit. Today marks a historic moment where Liberians across East Africa gather under one umbrella with one purpose: to unite and shape a stronger future for our communities and homeland.
                </p>
                <p className="text-sm">
                  This summit is more than a meeting. It is a vision coming to life—a platform created to deepen regional cooperation, amplify our collective voice, and inspire meaningful action in youth development, entrepreneurship, leadership, and community engagement.
                </p>
                <p className="text-sm">
                  On behalf of the Central Summit Committee, I officially declare the FOLICEA Inaugural Summit open.
                </p>
              </div>
            </motion.div>

            {/* Emmanuel Patrick Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-liberian-blue/5 to-liberian-blue/10 rounded-2xl p-6 sm:p-8 border border-liberian-blue/20"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 flex-shrink-0">
                  <Image
                    src="https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Hon%20Emmanuel%20J%20Brown.jpg?updatedAt=1762694251207"
                    alt="Chairman Emmanuel Patrick"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Chairman Emmanuel Patrick</h3>
                  <p className="text-sm text-gray-600">Chairperson, FOLICEA</p>
                </div>
              </div>
              <div className="prose prose-sm max-w-none text-gray-700 space-y-3 max-h-72 overflow-y-auto">
                <p className="text-sm">
                  I stand before you deeply honored by this historic moment—the Inaugural Summit of Liberians in East Africa. Today, we gather not merely as individuals living abroad, but as one people bound by a shared history, destiny, and pride.
                </p>
                <p className="text-sm">
                  Liberia is a nation with amazing culture, beautiful landscape, and richness of spirit. Our greatest resource has always been our people: hardworking, brilliant, courageous, and determined. We are part of a legacy that cannot be erased.
                </p>
                <p className="text-sm">
                  Let this summit ignite a movement of purpose, pride, and partnership. Together, we can build the Liberia we dream of. Because we are Liberians—unapologetically, unequivocally, and eternally.
                </p>
              </div>
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



      {/* Summit Update Section */}
      <section className="py-6 sm:py-8 gradient-bg">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
              The FOLICEA Summit 2025 Has Concluded
            </h2>
            <p className="text-base sm:text-lg text-white/90 mb-4 max-w-3xl mx-auto">
              Thank you for three inspiring days. Summit highlights and photos coming soon.
            </p>
            <Link href="/contact" className="inline-block bg-white text-liberian-red hover:bg-gray-100 font-semibold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
              Join Our Mailing List
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  // Use local data only (no CMS)
  const partners = Array.isArray(partnersLocal) ? (partnersLocal as Partner[]) : [];

  return {
    props: {
      partners,
    },
  };
};

export default HomePage;
