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
              <Image src="https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Chairman%20Emmanuel%20Patrick.jpg?updatedAt=1757347430203" alt="Chairman Emmanuel Patrick" width={260} height={220} className="rounded-lg mx-auto object-cover" />
              <h3 className="text-lg font-semibold mt-4">Chairman Emmanuel Patrick</h3>
              <p className="text-gray-600">Chairperson</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl text-center shadow-sm">
              <Image src="https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Chairman%20Marcus%20Julay%20Weah.jpg?updatedAt=1757347428765" alt="Chairman Marcus Julay Weah" width={260} height={220} className="rounded-lg mx-auto object-cover" />
              <h3 className="text-lg font-semibold mt-4">Chairman Marcus Julay Weah</h3>
              <p className="text-gray-600">1st Vice Chairperson for Administration</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl text-center shadow-sm">
              <Image src="https://via.placeholder.com/260x220?text=Cream+Milton+Ellis" alt="Chairman Cream Milton Ellis" width={260} height={220} className="rounded-lg mx-auto object-cover" />
              <h3 className="text-lg font-semibold mt-4">Chairman Cream Milton Ellis</h3>
              <p className="text-gray-600">2nd Vice Chairperson for International Affairs</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl text-center shadow-sm">
              <Image src="https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Mr.%20Isaac%20M.%20Supu.jpg?updatedAt=1757347429245" alt="Mr. Isaac M. Supu" width={260} height={220} className="rounded-lg mx-auto object-cover" />
              <h3 className="text-lg font-semibold mt-4">Mr. Isaac M. Supu</h3>
              <p className="text-gray-600">Secretary General</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl text-center shadow-sm">
              <Image src="https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Ms.%20Curlyn%20Darbieh.jpg?updatedAt=1757347430212" alt="Ms. Curlyn Darbieh" width={260} height={220} className="rounded-lg mx-auto object-cover" />
              <h3 className="text-lg font-semibold mt-4">Ms. Curlyn Darbieh</h3>
              <p className="text-gray-600">Chief Financial Officer</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl text-center shadow-sm">
              <Image src="https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/W.%20Praise%20Bloyuefloh.jpg?updatedAt=1757346347925" alt="W. Praise Bloyuefloh" width={260} height={220} className="rounded-lg mx-auto object-cover" />
              <h3 className="text-lg font-semibold mt-4">W. Praise Bloyuefloh</h3>
              <p className="text-gray-600">Chairperson, Central Summit Committee</p>
            </div>
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

      {/* Summit 2025 Summary */}
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
              FOLICEA Summit 2025 - A Historic Gathering
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-liberian-blue/5 to-liberian-red/5 rounded-2xl p-8 md:p-12 border border-liberian-blue/20 mb-12"
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg text-center border-t-4 border-liberian-red"
            >
              <Image
                src="https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Summit%20Photos/Picture2.jpg"
                alt="W. Praise Bloyuefloh"
                width={300}
                height={300}
                className="rounded-lg mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900">W. Praise Bloyuefloh</h3>
              <p className="text-gray-600">Chairperson, Central Summit Committee</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg text-center border-t-4 border-liberian-blue"
            >
              <Image
                src="https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Hon%20Emmanuel%20J%20Brown.jpg?updatedAt=1762694251207"
                alt="Emmanuel Brown"
                width={300}
                height={300}
                className="rounded-lg mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900">Hon. Emmanuel Brown</h3>
              <p className="text-gray-600">Key Summit Leader</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg text-center border-t-4 border-liberian-red"
            >
              <Image
                src="https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Chairman%20Emmanuel%20Patrick.jpg?updatedAt=1757347430203"
                alt="Emmanuel Patrick"
                width={300}
                height={300}
                className="rounded-lg mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900">Chairman Emmanuel Patrick</h3>
              <p className="text-gray-600">Acting FOLICEA Chairman</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Summit Highlights */}
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
