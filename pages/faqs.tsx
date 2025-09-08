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

            <h3>Judges</h3>
            <ul>
              <li>Hon. John Siaffa — City Mayor of Monrovia City</li>
              <li>Hon. Cassell Kou — CEO NEEV</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PitchingCompetitionPage;
