import { motion } from 'framer-motion';
import Image from 'next/image';
import type { GetStaticProps } from 'next';
import { getDocuments, urlFor } from '../lib/sanity.client';

// Speaker type aligned with Sanity schema
export type Speaker = {
  name: string;
  title?: string;
  image?: any; // Sanity image or URL string
  bio?: string;
  topics?: string[];
  social?: { linkedin?: string; twitter?: string };
  featured?: boolean;
  order?: number;
};

interface SpeakersPageProps {
  speakers: Speaker[];
}

function getImageSrc(image: any, w = 1200, h = 800): string {
  if (!image) return '/favicon.svg';
  if (typeof image === 'string') return image;
  try {
    return urlFor(image).width(w).height(h).url();
  } catch {
    return '/favicon.svg';
  }
}

const SpeakersPage = ({ speakers }: SpeakersPageProps) => {
  // Sort: featured desc, order asc (undefined last), name asc
  const speakersSorted = [...(speakers || [])].sort((a, b) => {
    const fa = a.featured ? 1 : 0;
    const fb = b.featured ? 1 : 0;
    if (fb - fa !== 0) return fb - fa;
    const oa = typeof a.order === 'number' ? a.order : Number.MAX_SAFE_INTEGER;
    const ob = typeof b.order === 'number' ? b.order : Number.MAX_SAFE_INTEGER;
    if (oa - ob !== 0) return oa - ob;
    return (a.name || '').localeCompare(b.name || '');
  });

  const featuredSpeakers = speakersSorted.filter(s => s.featured);
  const additionalSpeakers = speakersSorted.filter(s => !s.featured);

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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Featured Speakers</h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto">
              Hear from distinguished leaders, experts, and community advocates who will share their insights and experiences at FOLICEA Summit 2025.
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Special Guests of Honor</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Distinguished leaders who will grace our inaugural summit with their presence</p>
          </motion.div>

          {featuredSpeakers.length === 0 ? (
            <p className="text-center text-gray-500">No featured speakers yet. Add some in Sanity Studio.</p>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredSpeakers.map((speaker, index) => (
                <motion.div
                  key={`${speaker.name}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group rounded-2xl p-[1px] bg-gradient-to-r from-liberian-blue/50 via-liberian-red/50 to-liberian-blue/50 shadow-xl hover:shadow-2xl transition-shadow"
                >
                  <div className="relative bg-white rounded-2xl overflow-hidden">
                    <div className="relative h-64">
                      <Image src={getImageSrc(speaker.image, 1200, 800)} alt={speaker.name || 'Speaker'} fill className="object-cover" />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4">
                        <h3 className="text-white text-lg font-bold">{speaker.name}</h3>
                        <p className="text-white/90 text-sm">{speaker.title}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Summit Speakers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Experts and leaders from various fields who will share their knowledge and insights</p>
          </motion.div>

          {additionalSpeakers.length === 0 ? (
            <p className="text-center text-gray-500">No additional speakers yet. Add some in Sanity Studio.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {additionalSpeakers.map((speaker, index) => (
                <motion.div
                  key={`${speaker.name}-more-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-xl p-6 card-hover"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                      <Image src={getImageSrc(speaker.image, 128, 128)} alt={speaker.name || 'Speaker'} fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{speaker.name}</h3>
                      <p className="text-liberian-red font-medium">{speaker.title}</p>
                    </div>
                  </div>

                  {speaker.bio && (
                    <p className="text-gray-600 mb-4 text-sm">{speaker.bio}</p>
                  )}

                  {!!(speaker.topics && speaker.topics.length) && (
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Topics:</h4>
                      <div className="flex flex-wrap gap-1">
                        {speaker.topics!.map((topic, topicIndex) => (
                          <span key={topicIndex} className="px-2 py-1 bg-liberian-blue/10 text-liberian-blue rounded-full text-xs">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          )}
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Speaker Categories</h2>
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
              <p className="text-gray-600">High-ranking officials and policymakers sharing insights on governance and international relations.</p>
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
              <p className="text-gray-600">Entrepreneurs and business executives sharing strategies for economic empowerment and growth.</p>
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
              <p className="text-gray-600">Community leaders and activists working to strengthen diaspora bonds and cultural preservation.</p>
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
              <p className="text-gray-600">Researchers and scholars providing academic insights on diaspora studies and development.</p>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Don't Miss These Inspiring Speakers</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Register now to hear from these distinguished speakers and be part of the conversation that will shape our community's future
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/registration" className="bg-white text-liberian-red hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">Register Now</a>
              <a href="/agenda" className="border-2 border-white text-white hover:bg-white hover:text-liberian-red font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300">View Agenda</a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // Fetch all speakers from Sanity
  const speakers = await getDocuments('speaker');

  return {
    props: {
      speakers: Array.isArray(speakers) ? speakers : [],
    },
    revalidate: 60, // ISR for freshness
  };
};

export default SpeakersPage;