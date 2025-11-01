import { motion } from 'framer-motion';
import Image from 'next/image';
import type { GetStaticProps } from 'next';
import speakersLocal from '../data/speakers';

// Speaker type for local data
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
  // For local data we expect string URLs; keep fallback icon if missing
  return '/favicon.svg';
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
  const summitSpeakers = additionalSpeakers.slice(0, 6);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-liberian-blue to-liberian-red">
        <div className="container-custom">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Summit Speakers</h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto">
              Experts and leaders from various fields who will share their knowledge and insights.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Speakers */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Special Guests of Honor</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Distinguished leaders who will grace our inaugural summit with their presence</p>
          </div>

          {featuredSpeakers.length === 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Minimal placeholder cards to avoid empty state */}
              {[0,1,2].map((i) => (
                <div key={i} className="rounded-2xl p-[1px] bg-gradient-to-r from-liberian-blue/20 via-liberian-red/20 to-liberian-blue/20 shadow">
                  <div className="relative bg-white rounded-2xl overflow-hidden">
                    <div className="relative h-64 bg-gray-100" />
                    <div className="p-4">
                      <div className="h-4 w-40 bg-gray-200 rounded mb-2" />
                      <div className="h-3 w-24 bg-gray-200 rounded" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredSpeakers.map((speaker, index) => (
                <div
                  key={`${speaker.name}-${index}`}
                  className="group rounded-2xl p-[1px] bg-gradient-to-r from-liberian-blue/50 via-liberian-red/50 to-liberian-blue/50 shadow-xl"
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
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Additional Speakers */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Summit Speakers & Panelists</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Experts and leaders from various fields who will share their knowledge and insights.</p>
          </div>

          {summitSpeakers.length === 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
              {[0,1,2,3,4,5].map(i => (
                <div key={i} className="relative bg-white rounded-3xl border border-gray-100 shadow-lg overflow-hidden animate-pulse">
                  <div className="relative h-60 bg-gray-200" />
                  <div className="p-6 space-y-4">
                    <div className="h-4 w-2/3 bg-gray-200 rounded" />
                    <div className="h-3 w-1/3 bg-gray-200 rounded" />
                    <div className="h-3 w-full bg-gray-200 rounded" />
                    <div className="h-3 w-1/2 bg-gray-200 rounded" />
                    <div className="h-3 w-1/4 bg-gray-200 rounded" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
              {summitSpeakers.map((speaker, index) => {
                const socialEntries = Object.entries(speaker.social || {}).filter(([, value]) => typeof value === 'string' && value);
                return (
                  <div
                    key={`${speaker.name}-summit-${index}`}
                    className="relative group bg-white rounded-3xl border border-gray-100 shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                  >
                    <div className="p-6 sm:p-8 text-center space-y-4">
                      <div className="flex justify-center">
                        <div className="relative w-40 h-40 rounded-full overflow-hidden bg-gray-100 shadow-md">
                          <Image src={getImageSrc(speaker.image, 512, 512)} alt={speaker.name || 'Speaker'} fill className="object-cover" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{speaker.name}</h3>
                        {speaker.title && <p className="text-sm text-liberian-red font-medium">{speaker.title}</p>}
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-[0.3em] mb-2">Bio</p>
                        <p className="text-sm text-gray-600 leading-relaxed">{speaker.bio || 'Bio coming soon.'}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Speaker Categories */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Speaker Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our speakers represent diverse expertise areas to provide comprehensive insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-liberian-red rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg">G</div>
              <h3 className="text-xl font-semibold mb-3">Government Leaders</h3>
              <p className="text-gray-600">High-ranking officials and policymakers sharing insights on governance and international relations.</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-liberian-blue rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg">B</div>
              <h3 className="text-xl font-semibold mb-3">Business Leaders</h3>
              <p className="text-gray-600">Entrepreneurs and business executives sharing strategies for economic empowerment and growth.</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-liberian-red rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg">C</div>
              <h3 className="text-xl font-semibold mb-3">Community Advocates</h3>
              <p className="text-gray-600">Community leaders and activists working to strengthen diaspora bonds and cultural preservation.</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-liberian-blue rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg">A</div>
              <h3 className="text-xl font-semibold mb-3">Academic Experts</h3>
              <p className="text-gray-600">Researchers and scholars providing academic insights on diaspora studies and development.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-bg">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Don't Miss These Inspiring Speakers</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Register now to hear from these distinguished speakers and be part of the conversation that will shape our community's future
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/registration" className="bg-white text-liberian-red hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">Register Now</a>
            <a href="/agenda" className="border-2 border-white text-white hover:bg-white hover:text-liberian-red font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300">View Agenda</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // Use local speakers only (no CMS)
  const speakers = Array.isArray(speakersLocal) ? speakersLocal : [];

  return {
    props: {
      speakers,
    },
  };
};

export default SpeakersPage;