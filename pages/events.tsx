import Link from 'next/link';
import { motion } from 'framer-motion';

const EventsPage = () => {
  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <nav className="text-sm text-gray-500 mb-2">Home » Events</nav>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Events</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Join exciting events that bring together diaspora members and local leaders for knowledge-sharing and collaboration. Explore events that unite the Liberian diaspora with opportunities for networking, cultural exchange, and economic growth here.
          </p>
        </motion.div>

        <section className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Folicea Summit 2025</h2>
          <div className="rounded-2xl bg-white border p-6 shadow-sm">
            <p className="text-gray-700">Highlights from the inaugural summit in Kampala, Uganda.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
          <div className="rounded-2xl bg-white border p-6 shadow-sm space-y-4">
            <p className="text-gray-700">Join us at our Upcoming Events as we reinforce the importance of the strategy plan and build stronger partnerships for the future. We invite collaboration with government agencies and ministries to coordinate efforts better, while also encouraging feedback and suggestions from the diaspora community.</p>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Key events include:</h3>
              <ul className="list-disc pl-6 text-gray-700 mt-2">
                <li>Folicea Summit 2026</li>
              </ul>
            </div>
            <div>
              <Link href="#" className="inline-flex items-center px-5 py-3 rounded-lg bg-liberian-red text-white hover:bg-liberian-blue transition-colors font-semibold">To register for an event, click here.</Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default EventsPage;
