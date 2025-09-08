import { motion } from 'framer-motion';

const PitchingCompetitionPage = () => {
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
              Theme: “Clean Monrovia, Green Future: Resolving the Waste Management Crisis”
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

      <section className="section-padding">
        <div className="container-custom max-w-5xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2>Competition Info</h2>
            <p>
              The Liberian in East Africa Summit will host a Pitching Competition designed to spark innovation and practical
              solutions to one of Liberia’s most pressing challenges — the waste management crisis in Monrovia.
            </p>

            <h3>Objective</h3>
            <p>
              To identify and support groundbreaking ideas, technologies, and community-driven models that can transform
              Monrovia’s waste management system into a sustainable, efficient, and environmentally friendly framework.
            </p>

            <h3>Who Can Pitch?</h3>
            <ul>
              <li>Liberian entrepreneurs, innovators, and students in East Africa.</li>
              <li>Diaspora professionals with innovative solutions.</li>
              <li>Startups, NGOs, and social enterprises with scalable waste management projects.</li>
            </ul>

            <h3>Focus Areas for Pitches</h3>
            <ul>
              <li>Recycling & Upcycling – Converting waste into usable products or raw materials.</li>
              <li>Waste-to-Energy – Technologies that transform waste into power or biogas.</li>
              <li>Community Engagement Models – Grassroots initiatives for waste collection, education, and behavioral change.</li>
              <li>Digital Solutions – Platforms or apps for waste tracking, collection coordination, or incentive-based systems.</li>
              <li>Policy & Business Innovation – Scalable business models or advocacy frameworks that can influence better waste governance.</li>
            </ul>

            <h3>Competition Format</h3>
            <ul>
              <li>Round 1: Concept submission (short proposal) from October 5-30, 2025.</li>
              <li>Round 2: Live 15–20 minutes pitch before a panel of judges at the Summit.</li>
              <li>Q&A Session: Judges and audience engage participants for clarification.</li>
            </ul>

            <h3>Judging Criteria</h3>
            <ul>
              <li>Innovation & Creativity – How unique is the solution?</li>
              <li>Feasibility & Sustainability – Can it work long-term in Monrovia?</li>
              <li>Scalability & Impact – Potential to grow and benefit communities.</li>
              <li>Presentation & Clarity – Effectiveness in pitching the idea.</li>
            </ul>

            <h3>Prizes & Opportunities</h3>
            <ul>
              <li>Startup Capital support for the winning idea.</li>
              <li>Mentorship from experts in waste management and entrepreneurship.</li>
              <li>Opportunity to pilot or connect with partners in Liberia and East Africa.</li>
              <li>Recognition as Waste Innovation Champion at the Summit.</li>
            </ul>

            <h3>Call to Action</h3>
            <p>
              If you are passionate about building a cleaner, greener Monrovia, this is your chance to make a difference.
              Step forward, pitch your idea, and be part of shaping a sustainable future.
            </p>
          </div>
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
