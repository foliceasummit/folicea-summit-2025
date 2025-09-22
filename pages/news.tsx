import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { GetStaticProps } from 'next';
import { getDocuments, urlFor } from '../lib/sanity.client';

// News type aligned with Sanity schema
export type NewsItem = {
  _id: string;
  title: string;
  excerpt: string;
  image?: any; // Sanity image object or string URL
  date?: string; // YYYY-MM-DD
  category?: string;
  featured?: boolean;
  slug?: { current: string };
};

interface Props {
  news: NewsItem[];
}

function getImageSrc(image: any, w = 1600, h = 900): string {
  if (!image) return '/favicon.svg';
  if (typeof image === 'string') return image;
  try {
    return urlFor(image).width(w).height(h).url();
  } catch {
    return '/favicon.svg';
  }
}

// Build dynamic category list with counts
const buildCategories = (items: NewsItem[]) => {
  const counts = items.reduce<Record<string, number>>((acc, item) => {
    const cat = item.category || 'General';
    acc[cat] = (acc[cat] || 0) + 1;
    return acc;
  }, {});
  const categories = Object.entries(counts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => a.name.localeCompare(b.name));
  return [{ name: 'All', count: items.length }, ...categories];
};

const NewsPage = ({ news }: Props) => {
  const sortedAll = [...(news || [])].sort((a, b) => {
    const da = a.date ? Date.parse(a.date) : 0;
    const db = b.date ? Date.parse(b.date) : 0;
    return db - da; // newest first
  });

  const categories = buildCategories(sortedAll);
  const featured = sortedAll.filter((i) => i.featured);
  const regular = sortedAll.filter((i) => !i.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-liberian-blue to-liberian-red text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Latest News & Updates</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Stay informed about the latest developments, announcements, and updates regarding the FOLICEA Summit 2025.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured News */}
      {featured.length > 0 && (
        <section className="section-padding">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured News</h2>

              {featured.map((item) => (
                <div key={item._id} className="relative overflow-hidden rounded-3xl bg-white border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-2xl mb-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative h-64 lg:h-full">
                      <Image src={getImageSrc(item.image)} alt={item.title} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0" />
                      <div className="absolute top-4 left-4 flex gap-2">
                        {item.category && (
                          <span className="bg-liberian-red text-white px-3 py-1 rounded-full text-sm font-medium">{item.category}</span>
                        )}
                        {item.date && (
                          <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                            <Calendar className="w-4 h-4 mr-2" /> {item.date}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{item.excerpt}</p>
                      <Link href={`/news/${item.slug?.current || ''}`} className="inline-flex items-center w-fit rounded-full bg-liberian-red text-white px-5 py-2.5 font-semibold shadow hover:bg-liberian-blue transition-colors">
                        Read More <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Categories */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">News Categories</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <span
                  key={category.name}
                  className="px-5 py-2.5 rounded-full border border-gray-200 bg-gray-50 text-gray-700"
                >
                  {category.name} ({category.count})
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* All News */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">All News</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regular.map((item, index) => (
                <motion.div
                  key={item._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.08 * index }}
                  className="group relative overflow-hidden rounded-2xl bg-white/70 supports-[backdrop-filter]:bg-white/60 backdrop-blur border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative aspect-[16/9]">
                    <Image src={getImageSrc(item.image, 1200, 675)} alt={item.title} fill className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
                    <div className="absolute top-3 left-3">
                      {item.category && (
                        <span className="bg-liberian-red text-white px-3 py-1 rounded-full text-xs font-medium">{item.category}</span>
                      )}
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center text-gray-500 text-sm mb-2">
                      <Calendar className="w-4 h-4 mr-2" /> {item.date}
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 line-clamp-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{item.excerpt}</p>
                    <Link href={`/news/${item.slug?.current || ''}`} className="inline-flex items-center text-liberian-red hover:text-liberian-blue font-semibold">
                      Read More <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-gradient-to-r from-liberian-blue to-liberian-red text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest news and updates about the FOLICEA Summit 2025.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex">
                <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white" />
                <button className="bg-white text-liberian-red px-6 py-3 rounded-r-lg font-semibold hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const news = await getDocuments('news');
  return {
    props: {
      news: Array.isArray(news) ? news : [],
    },
    revalidate: 60,
  };
};

export default NewsPage;