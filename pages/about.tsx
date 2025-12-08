import { motion } from 'framer-motion';
import Image from 'next/image';
import { Users, Target, Heart, Globe, Award, Star } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Unity",
      description: "Building strong bonds within the Liberian diaspora across East Africa."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Development Focus",
      description: "Promoting sustainable development and economic empowerment."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Cultural Heritage",
      description: "Preserving and celebrating our rich Liberian cultural heritage."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Connection",
      description: "Connecting Liberians worldwide for mutual growth and support."
    }
  ];

  const objectives = [
    "Officially launch the Federation of Liberians in East Africa (FOLICEA)",
    "Provide a platform for business networking, investment opportunities, and entrepreneurship development",
    "Explore technology and innovation as tools for diaspora economic growth",
    "Conduct General Assembly elections to inaugurate FOLICEA’s first democratically elected leadership",
    "Promote cultural exchange and understanding",
    "Advocate for Liberian interests in East Africa"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-liberian-blue to-liberian-red">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Us
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto">
              Federation of Liberian Communities in East Africa - Uniting our diaspora, 
              strengthening our bonds, and building a brighter future together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership and Remarks */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Leadership</h2>
            <p className="text-xl text-gray-600">Guiding FOLICEA with vision and commitment</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Emmanuel Patrick */}
            <div className="relative overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-sm">
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <Image src="https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Chairman%20Emmanuel%20Patrick.jpg?updatedAt=1757347430203" alt="Chairman Emmanuel Patrick" width={64} height={64} className="object-cover w-full h-full" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Chairman Emmanuel Patrick</h3>
                    <p className="text-gray-600 text-sm">Chairperson</p>
                  </div>
                </div>
                <div className="prose max-w-none text-gray-700 text-justify space-y-4">
                  <p>Distinguished Platform Guests, Partners and Sponsors, Fellow Liberians, Ladies and Gentlemen, I stand before you deeply honored, humbled, and inspired by this historic moment, the Inaugural Summit of Liberians in East Africa.</p>
                  <p>Today, we gather not merely as individuals who happen to live abroad, but as one people, bound by a shared history, a shared destiny, and a shared pride. I am a Liberian unapologetically and unequivocally.</p>
                  <p>I was born and raised in the land of the free—a land that, despite its challenges, still stands tall as a symbol of African resilience and hope. Liberia is a nation with an amazing culture, a beautiful landscape, and a richness of spirit that cannot be measured by global rankings.</p>
                </div>
              </div>
            </div>

            {/* Praise Bloyuefloh */}
            <div className="relative overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-sm">
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <Image src="https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Summit%20Photos/Picture2.jpg?updatedAt=1765096104785" alt="W. Praise Bloyuefloh" width={64} height={64} className="object-cover w-full h-full" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">W. Praise Bloyuefloh</h3>
                    <p className="text-gray-600 text-sm">Chairperson, Central Summit Committee</p>
                  </div>
                </div>
                <div className="prose max-w-none text-gray-700 text-justify space-y-4">
                  <p>This summit is more than a meeting. It is a vision coming to life. A platform created to deepen regional cooperation, amplify our collective voice, and inspire meaningful action in areas such as youth development, entrepreneurship, leadership, innovation, investment, and community engagement.</p>
                  <p>Over the next three days, we will engage in powerful conversations, panel discussions, networking sessions, a business pitch competition, and a thanksgiving service to close. Each activity has been intentionally designed to strengthen our ties and create pathways for growth both individually and collectively.</p>
                  <p>As chairperson of the Central Summit Committee, I want to express my deepest appreciation to every delegate who traveled from near and far, and to the hardworking committee members who made this summit possible. Your presence here is a testament to your dedication to progress and unity.</p>
                  <p>Let us begin these three days with open hearts, open minds, and a shared determination to build something lasting.</p>
                  <p>On behalf of the Central Summit Committee, I officially declare the FOLICEA Inaugural Summit open.</p>
                  <p>Welcome to Day One and let the journey begin.</p>
                  <p>Thank you.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors (moved below leadership cards) */}
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
            {[ 
              { name: 'Brownerica', logo: 'https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Brownerica.png?updatedAt=1762242409473' },
              { name: "Bel's Beauty", logo: 'https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/bel\'s%20beauty.jpg?updatedAt=1762242408469' },
              { name: "Charlotte's Kitchen", logo: 'https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/charlottes%20kitchen.jpg?updatedAt=1762242408305' }
            ].map((s, i) => (
              <div key={i} className="group relative bg-gradient-to-br from-white via-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-200 text-center overflow-hidden">
                <div className="relative w-full h-40 mb-6">
                  <Image src={s.logo} alt={s.name} fill className="object-contain" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{s.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
              To unite and empower Liberian communities across East Africa through collaboration, advocacy, cultural preservation, 
              and sustainable development initiatives that enhance the welfare, identity, and solidarity of all Liberians residing in the region. 
             </p>
              <p className="text-lg text-gray-600">
                We strive to be a bridge between Liberia and East Africa, facilitating 
                meaningful exchanges that benefit both our community and the broader 
                African continent.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Image
                src="https://ik.imagekit.io/folicea/dar-1%20(1).jpg?updatedAt=1755892415418"
                alt="Liberian Community"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our mission and shape our community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-liberian-red hover:text-white transition-all duration-300 card-hover"
              >
                <div className="text-liberian-red mb-4 group-hover:text-white">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 group-hover:text-white/90">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
      {/* Summit Highlights */}
      <section className="section-padding bg-white hidden">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Summit Highlights & Outcomes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What we achieved through this historic gathering
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {objectives.map((objective, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl"
              >
                <Star className="w-6 h-6 text-liberian-red mt-1 flex-shrink-0" />
                <p className="text-gray-700">{objective}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Uganda */}
      <section className="section-padding hidden">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Uganda?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The Pearl of Africa offers the perfect setting for our historic gathering
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-liberian-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Strategic Location</h3>
              <p className="text-gray-600">
                Uganda's central location in East Africa makes it easily accessible 
                for Liberians from across the region.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-liberian-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Warm Hospitality</h3>
              <p className="text-gray-600">
                Known for its welcoming people and rich cultural heritage, 
                Uganda provides the perfect environment for our community gathering.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-liberian-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Economic Hub</h3>
              <p className="text-gray-600">
                Kampala serves as a major economic and business center, 
                offering excellent opportunities for networking and collaboration.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-bg hidden">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Stay Connected With FOLICEA
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              The summit has concluded, but our work continues. Sign up to receive updates on future FOLICEA initiatives, regional chapter activities, and the 2026 Summit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:foliceasummit@gmail.com" className="bg-white text-liberian-red hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
                Get Updates
              </a>
              <a href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-liberian-red font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300">
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
