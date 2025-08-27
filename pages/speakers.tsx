import { motion } from 'framer-motion';
import Image from 'next/image';

const SpeakersPage = () => {
  const featuredSpeakers = [
    {
      name: "H.E. Dr. Jeremiah Kpan Koung",
      title: "Vice President of Liberia",
              image: "https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/VP%20Koon.jpg?updatedAt=1756252471149",
      bio: "His Excellency Dr. Jeremiah Kpan Koung serves as the Vice President of Liberia, bringing extensive experience in governance and public service to the FOLICEA Summit.",
      topics: ["Liberian Diaspora Engagement", "Government Relations", "Development Strategies"],
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Hon. Richard Nagbe Koon",
      title: "Speaker of the House of Representatives, 55th Legislature, Republic of Liberia",
      image: "https://ik.imagekit.io/folicea/Richard%20Nagbe%20Koon.webp?updatedAt=1755893148873",
      bio: "Hon. Richard Nagbe Koon is the Speaker of Liberia's House of Representatives and a seasoned academic and financial expert. With dual MBAs in Accounting and ongoing PhD studies in Public Finance, he brings extensive experience from academia, international organizations, and corporate finance. As Speaker, he champions economic stability, youth empowerment, and sustainable development in Liberia.",
      topics: ["Economic Stability", "Youth Empowerment", "Sustainable Development"],
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Emmanuel Patrick",
      title: "Acting Chairperson, FOLICEA & Former Chairperson, LIBCOR",
      image: "https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/emmanuel%20P.jpg?updatedAt=1756227156834",
      bio: "Emmanuel Patrick is the former chairperson of Liberians in Rwanda (LIBCOR) and the current acting chairperson of FOLICEA. At the summit, Chairman Patrick will lead the federation to election, marking a historic moment in the organization's development.",
      topics: ["FOLICEA Leadership", "Federation Elections", "Community Governance"],
      social: {
        linkedin: "#",
        twitter: "#"
      }
    }
  ];

  const additionalSpeakers = [
    {
      name: "Prof. Sarah Johnson",
      title: "Academic & Researcher",
      image: "https://ik.imagekit.io/folicea/Logo.png.jpg?updatedAt=1755871491816",
      bio: "Professor Johnson specializes in diaspora studies and African development, bringing academic insights to community development.",
      topics: ["Diaspora Studies", "Academic Research", "Development Theory"]
    },
    {
      name: "Mr. Emmanuel Doe",
      title: "Entrepreneur & Business Leader",
      image: "https://ik.imagekit.io/folicea/Logo.png.jpg?updatedAt=1755871491816",
      bio: "Mr. Doe is a successful entrepreneur who has built businesses across East Africa, sharing insights on economic empowerment.",
      topics: ["Entrepreneurship", "Business Development", "Economic Empowerment"]
    },
    {
      name: "Ms. Grace Williams",
      title: "Cultural Ambassador",
      image: "https://ik.imagekit.io/folicea/Logo.png.jpg?updatedAt=1755871491816",
      bio: "Ms. Williams works to preserve and promote Liberian cultural heritage through various initiatives and programs.",
      topics: ["Cultural Heritage", "Arts & Culture", "Community Engagement"]
    },
    {
      name: "Dr. Michael Brown",
      title: "Development Expert",
      image: "https://ik.imagekit.io/folicea/Logo.png.jpg?updatedAt=1755871491816",
      bio: "Dr. Brown has extensive experience in international development, focusing on sustainable community development projects.",
      topics: ["Sustainable Development", "Project Management", "Capacity Building"]
    },
    {
      name: "Ms. Patricia Taylor",
      title: "Youth Advocate",
      image: "https://ik.imagekit.io/folicea/Logo.png.jpg?updatedAt=1755871491816",
      bio: "Ms. Taylor is passionate about youth empowerment and creating opportunities for young Liberians in the diaspora.",
      topics: ["Youth Development", "Education", "Leadership Training"]
    },
    {
      name: "Mr. David Wilson",
      title: "Technology & Innovation",
      image: "https://ik.imagekit.io/folicea/Logo.png.jpg?updatedAt=1755871491816",
      bio: "Mr. Wilson is a technology entrepreneur who focuses on digital solutions for community development and connectivity.",
      topics: ["Technology", "Digital Innovation", "Community Tech"]
    }
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
              Featured Speakers
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto">
              Hear from distinguished leaders, experts, and community advocates 
              who will share their insights and experiences at FOLICEA Summit 2025.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Speakers */}
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
              Special Guests of Honor
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Distinguished leaders who will grace our inaugural summit with their presence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredSpeakers.map((speaker, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden card-hover"
              >
                <div className="relative h-80">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute bottom-2 left-3 right-3 text-white">
                    <h3 className="text-lg font-bold mb-1 leading-tight">{speaker.name}</h3>
                    <p className="text-sm opacity-90 leading-tight">{speaker.title}</p>
                  </div>
                </div>
                
                <div className="p-4">
                  <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                    {speaker.bio}
                  </p>
                  
                  <div className="mb-3">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Speaking Topics:</h4>
                    <div className="flex flex-wrap gap-1">
                      {speaker.topics.map((topic, topicIndex) => (
                        <span
                          key={topicIndex}
                          className="px-2 py-1 bg-liberian-red/10 text-liberian-red rounded-full text-xs font-medium"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={speaker.social.linkedin}
                      className="text-liberian-blue hover:text-blue-700 transition-colors text-sm"
                    >
                      LinkedIn
                    </a>
                    <a
                      href={speaker.social.twitter}
                      className="text-liberian-blue hover:text-blue-700 transition-colors text-sm"
                    >
                      Twitter
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Speakers */}
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
              Summit Speakers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experts and leaders from various fields who will share their knowledge and insights
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalSpeakers.map((speaker, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6 card-hover"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{speaker.name}</h3>
                    <p className="text-liberian-red font-medium">{speaker.title}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm">
                  {speaker.bio}
                </p>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Topics:</h4>
                  <div className="flex flex-wrap gap-1">
                    {speaker.topics.map((topic, topicIndex) => (
                      <span
                        key={topicIndex}
                        className="px-2 py-1 bg-liberian-blue/10 text-liberian-blue rounded-full text-xs"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Speaker Categories */}
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
              Speaker Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our speakers represent diverse expertise areas to provide comprehensive insights
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white rounded-xl shadow-lg card-hover"
            >
              <div className="w-12 h-12 bg-liberian-red rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg">G</div>
              <h3 className="text-xl font-semibold mb-3">Government Leaders</h3>
              <p className="text-gray-600">
                High-ranking officials and policymakers sharing insights on governance and international relations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white rounded-xl shadow-lg card-hover"
            >
              <div className="w-12 h-12 bg-liberian-blue rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg">B</div>
              <h3 className="text-xl font-semibold mb-3">Business Leaders</h3>
              <p className="text-gray-600">
                Entrepreneurs and business executives sharing strategies for economic empowerment and growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white rounded-xl shadow-lg card-hover"
            >
              <div className="w-12 h-12 bg-liberian-red rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg">C</div>
              <h3 className="text-xl font-semibold mb-3">Community Advocates</h3>
              <p className="text-gray-600">
                Community leaders and activists working to strengthen diaspora bonds and cultural preservation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white rounded-xl shadow-lg card-hover"
            >
              <div className="w-12 h-12 bg-liberian-blue rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg">A</div>
              <h3 className="text-xl font-semibold mb-3">Academic Experts</h3>
              <p className="text-gray-600">
                Researchers and scholars providing academic insights on diaspora studies and development.
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
              Don't Miss These Inspiring Speakers
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Register now to hear from these distinguished speakers and be part of 
              the conversation that will shape our community's future
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/registration" className="bg-white text-liberian-red hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
                Register Now
              </a>
              <a href="/agenda" className="border-2 border-white text-white hover:bg-white hover:text-liberian-red font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300">
                View Agenda
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SpeakersPage;
