import Link from 'next/link';
import { motion } from 'framer-motion';

const GetInvolvedPage = () => {
  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <nav className="text-sm text-gray-500 mb-2">Home » Get Involved</nav>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get Involved</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Be part of a growing movement to support and uplift the diaspora community in East Africa. From attending events to contributing your expertise, there are many ways to make a difference. Join us today and help drive progress and positive change.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="#" className="group block bg-white rounded-2xl p-6 shadow-sm border hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-liberian-red">Sign up as a member</h3>
            <p className="text-gray-600">Join FOLICEA to connect, grow, and contribute to community impact.</p>
          </Link>
          <Link href="/events" className="group block bg-white rounded-2xl p-6 shadow-sm border hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-liberian-red">Register for an Event</h3>
            <p className="text-gray-600">Attend events that promote collaboration, leadership, and opportunity.</p>
          </Link>
          <Link href="#" className="group block bg-white rounded-2xl p-6 shadow-sm border hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-liberian-red">Participate in Our Advocacy Campaign</h3>
            <p className="text-gray-600">Support initiatives that elevate the Liberian diaspora across East Africa.</p>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default GetInvolvedPage;
