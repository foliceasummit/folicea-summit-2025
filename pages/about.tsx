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
              About FOLICEA
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto">
              Federation of Liberian Communities in East Africa - Uniting our diaspora, 
              strengthening our bonds, and building a brighter future together.
            </p>
          </motion.div>
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

      {/* Summit 2025 */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Image
                src="https://ik.imagekit.io/folicea/kampala-road.webp?updatedAt=1755892414846"
                alt="Kampala City"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                FOLICEA Summit 2025
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                The inaugural FOLICEA Summit 2025 represents a historic milestone in 
                our community's journey. This three-day gathering in Kampala, Uganda, 
                will bring together Liberians from across East Africa and beyond.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Through keynote speeches, panel discussions, Workshop, networking sessions, and 
                cultural celebrations, we will strengthen our bonds, share knowledge, 
                and chart a course for our community's future.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-liberian-red text-white p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-2">When</h3>
                  <p>November 28 - 30, 2025</p>
                </div>
                <div className="bg-liberian-blue text-white p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-2">Where</h3>
                  <p>Kampala Serena Hotel, Uganda</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Objectives */}
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
              Summit Objectives
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What we aim to achieve through this historic gathering
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
      <section className="section-padding">
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
      <section className="section-padding gradient-bg">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Us in This Historic Gathering
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Be part of the first-ever FOLICEA Summit and help shape the future 
              of the Liberian diaspora in East Africa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/registration" className="bg-white text-liberian-red hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
                Register Now
              </a>
              <a href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-liberian-red font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300">
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Acting Leadership */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Acting Leadership</h2>
            <p className="text-xl text-gray-600">Current acting team guiding FOLICEA ahead of the Summit</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl text-center shadow-sm">
              <Image src="https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/emmanuel%20P.jpg?updatedAt=1756227156834" alt="Emmanuel Patrick" width={280} height={220} className="rounded-lg mx-auto object-cover" />
              <h3 className="text-xl font-semibold mt-4">Emmanuel Patrick</h3>
              <p className="text-gray-600">Acting Chairperson, FOLICEA</p>
              <p className="text-gray-600 mt-2">Email: foliceasummit@gmail.com</p>
              <p className="text-gray-600">Phone: +250 792 100 775</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl text-center shadow-sm">
              <Image src="https://ik.imagekit.io/folicea/Richard%20Nagbe%20Koon.webp?updatedAt=1755893148873" alt="W. Praise Bloyuefloh" width={280} height={220} className="rounded-lg mx-auto object-cover" />
              <h3 className="text-xl font-semibold mt-4">W. Praise Bloyuefloh</h3>
              <p className="text-gray-600">Chairperson, Central Summit Committee</p>
              <p className="text-gray-600 mt-2">Email: foliceasummit@gmail.com</p>
              <p className="text-gray-600">Phone: +250 791 349 853</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl text-center shadow-sm">
              <Image src="https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/VP%20Koon.jpg?updatedAt=1756252471149" alt="Isaac M. Supu" width={280} height={220} className="rounded-lg mx-auto object-cover" />
              <h3 className="text-xl font-semibold mt-4">Isaac M. Supu</h3>
              <p className="text-gray-600">Acting Secretary, FOLICEA</p>
              <p className="text-gray-600 mt-2">Email: foliceasummit@gmail.com</p>
              <p className="text-gray-600">Phone: +250 792 100 775</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
