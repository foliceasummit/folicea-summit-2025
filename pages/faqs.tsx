import { motion } from 'framer-motion';
import Image from 'next/image';
import { Lightbulb, Target, Users, Award, Star, Trophy, Briefcase, Globe } from 'lucide-react';

const PitchingCompetitionPage = () => {
  const focusAreas = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Recycling & Upcycling",
      description: "Converting waste into usable products or raw materials."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Waste-to-Energy",
      description: "Technologies that transform waste into power or biogas."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Engagement",
      description: "Grassroots initiatives for waste collection, education, and behavioral change."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Digital Solutions",
      description: "Platforms or apps for waste tracking, collection coordination, or incentive-based systems."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Policy & Business Innovation",
      description: "Scalable business models or advocacy frameworks that can influence better waste governance."
    }
  ];

  const judgingCriteria = [
    "Innovation & Creativity – How unique is the solution?",
    "Feasibility & Sustainability – Can it work long-term in Monrovia?",
    "Scalability & Impact – Potential to grow and benefit communities.",
    "Presentation & Clarity – Effectiveness in pitching the idea."
  ];

  const prizes = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Startup Capital Support",
      description: "Financial backing for the winning idea to get started."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Mentorship",
      description: "Guidance from waste management and entrepreneurship experts."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Partnership Opportunities",
      description: "Connect with partners in Liberia and East Africa for pilot programs."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Recognition",
      description: "Be recognized as Waste Innovation Champion at the Summit."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-liberian-blue to-liberian-red text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Pitching Competition
            </h1>
            <p className="text-xl max-w-4xl mx-auto">
              Theme: "Clean Monrovia, Green Future: Resolving the Waste Management Crisis"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img src="https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/premium_photo-1663088881507-209dbbb1fbc7.avif?updatedAt=1757359359986" alt="Innovation" className="rounded-xl shadow-lg object-cover w-full h-60" />
            <img src="https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/istockphoto-879264356-1024x1024.jpg?updatedAt=1757359185784" alt="Pitch" className="rounded-xl shadow-lg object-cover w-full h-60" />
            <img src="https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/WhatsApp%20Image%202025-09-08%20at%2016.58.55_46001bbd.jpg?updatedAt=1757359184811" alt="Audience" className="rounded-xl shadow-lg object-cover w-full h-60" />
          </div>
        </div>
      </section>

      {/* Competition Overview */}
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
              Competition Overview
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              The Liberian in East Africa Summit will host a Pitching Competition designed to spark innovation and practical
              solutions to one of Liberia's most pressing challenges — the waste management crisis in Monrovia.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Objective</h3>
              <p className="text-lg text-gray-600 mb-6">
                To identify and support groundbreaking ideas, technologies, and community-driven models that can transform
                Monrovia's waste management system into a sustainable, efficient, and environmentally friendly framework.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Who Can Pitch?</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <Star className="w-6 h-6 text-liberian-red mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Liberian entrepreneurs, innovators, and students in East Africa.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Star className="w-6 h-6 text-liberian-red mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Diaspora professionals with innovative solutions.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Star className="w-6 h-6 text-liberian-red mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Startups, NGOs, and social enterprises with scalable waste management projects.</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Image
                src="https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/premium_photo-1663088881507-209dbbb1fbc7.avif?updatedAt=1757359359986"
                alt="Innovation"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
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
              Focus Areas for Pitches
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Participants are encouraged to present solutions in these key areas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-liberian-red hover:text-white transition-all duration-300 card-hover"
              >
                <div className="text-liberian-red mb-4 group-hover:text-white">
                  {area.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {area.title}
                </h3>
                <p className="text-gray-600 group-hover:text-white/90">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Competition Format */}
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
              Competition Format
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How the competition will be structured
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-liberian-red text-white rounded-xl"
            >
              <div className="bg-white text-liberian-red w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Round 1: Concept Submission</h3>
              <p className="text-white/90">
                Short proposal submission from October 5-30, 2025
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-liberian-blue text-white rounded-xl"
            >
              <div className="bg-white text-liberian-blue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Round 2: Live Pitch</h3>
              <p className="text-white/90">
                15–20 minutes pitch before a panel of judges at the Summit
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-liberian-red text-white rounded-xl"
            >
              <div className="bg-white text-liberian-red w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Q&A Session</h3>
              <p className="text-white/90">
                Judges and audience engage participants for clarification
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Judging Criteria */}
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
              Judging Criteria
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How submissions will be evaluated
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {judgingCriteria.map((criterion, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl"
              >
                <Star className="w-6 h-6 text-liberian-red mt-1 flex-shrink-0" />
                <p className="text-gray-700">{criterion}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prizes & Opportunities */}
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
              Prizes & Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              What winners can expect to receive
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {prizes.map((prize, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-liberian-red hover:text-white transition-all duration-300 card-hover"
              >
                <div className="text-liberian-red mb-4 group-hover:text-white">
                  {prize.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {prize.title}
                </h3>
                <p className="text-gray-600 group-hover:text-white/90">
                  {prize.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding gradient-bg">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              If you are passionate about building a cleaner, greener Monrovia, this is your chance to make a difference.
              Step forward, pitch your idea, and be part of shaping a sustainable future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/registration" className="bg-white text-liberian-red hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
                Register for Competition
              </a>
              <a href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-liberian-red font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300">
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Judges */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Judges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-6 shadow-lg text-center">
              <img src="https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Hon.%20John%20Siaffa%20City%20Mayor%20of%20Monrovia%20City.jpg?updatedAt=1757359737423" alt="Hon. John Siaffa" className="w-full h-64 object-cover rounded-lg" />
              <h3 className="text-xl font-semibold mt-4">Hon. John Siaffa</h3>
              <p className="text-gray-600">City Mayor of Monrovia City</p>
              <p className="text-gray-600 text-sm mt-2">Public sector leader focused on urban development, public services, and sustainable city management in Monrovia.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 shadow-lg text-center">
              <img src="https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Hon.%20Cassell%20Kou%20%20CEO%20NEEV.jpg?updatedAt=1757359737901" alt="Hon. Cassell Kou" className="w-full h-64 object-cover rounded-lg" />
              <h3 className="text-xl font-semibold mt-4">Hon. Cassell Kou</h3>
              <p className="text-gray-600">CEO, NEEV</p>
              <p className="text-gray-600 text-sm mt-2">Entrepreneur and innovation advocate with experience building sustainable ventures and ecosystem partnerships.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PitchingCompetitionPage;
