import { motion } from 'framer-motion';

const VideoPage = () => {
  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Videos</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Summit highlight videos and recordings will appear here. Stay tuned.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="aspect-video w-full rounded-xl overflow-hidden bg-black/5 border border-gray-200 flex items-center justify-center text-gray-500">
            Video content coming soon
          </div>
        </div>
      </div>
    </main>
  );
};

export default VideoPage;
