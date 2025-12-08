import { motion } from 'framer-motion';
import Link from 'next/link';

const GalleryPage = () => {
  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Media Gallery</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore photos from the FOLICEA Inaugural Summit. A curated photo gallery will be published soon.
          </p>
        </motion.div>

        <div className="text-center">
          <Link
            href="https://www.facebook.com/profile.php?id=100063613104073"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-liberian-red text-white hover:bg-liberian-blue transition-colors font-semibold"
          >
            View Photos on Facebook
          </Link>
        </div>
      </div>
    </main>
  );
};

export default GalleryPage;
