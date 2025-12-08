import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { GetStaticProps } from 'next';

import { newsItems } from '../data/newsData';

// News type for local data
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

function getImageSrc(image: any): string {
  if (!image) return '/favicon.svg';
  if (typeof image === 'string') return image;
  return '/favicon.svg';
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

              {/* Chairman and Acting Chairman Statements */}
              <div className="space-y-8 mb-12">
                <div className="relative overflow-hidden rounded-3xl bg-white supports-[backdrop-filter]:bg-white/90 backdrop-blur border border-gray-200 shadow-xl">
                  <div className="grid md:grid-cols-3">
                    <div className="md:col-span-1 relative h-64 md:h-full">
                      <Image src={"https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Summit%20Photos/Picture2.jpg?updatedAt=1765096104785"} alt="W. Praise Bloyuefloh" fill className="object-cover" />
                    </div>
                    <div className="md:col-span-2 p-6 sm:p-8">
                      <div className="mb-5">
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-liberian-red/10 text-liberian-red text-xs font-semibold uppercase tracking-wider">Day One Opening Statement</span>
                        <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-3 leading-tight">Opening Remarks by W. Praise Bloyuefloh</h3>
                        <p className="text-sm text-gray-500 mt-1">Chairperson, Central Summit Committee – FOLICEA Inaugural Summit</p>
                      </div>
                      <div className="prose max-w-none text-gray-700 space-y-4">
                        <p>Distinguished delegates, invited guests, partners, community leaders, and my fellow Liberians from across East Africa and beyond welcome to Day One of the FOLICEA Inaugural Summit.</p>
                        <p>Today marks a historic moment. For the first time, Liberians across East Africa have gathered under one umbrella Uganda, Rwanda, Kenya, Tanzania, and Liberia coming together with one purpose: to unite, to collaborate, and to shape a stronger future for our communities and our homeland.</p>
                        <p>This summit is more than a meeting. It is a vision coming to life. A platform created to deepen regional cooperation, amplify our collective voice, and inspire meaningful action in areas such as youth development, entrepreneurship, leadership, innovation, investment, and community engagement.</p>
                        <p>Over the next three days, we will engage in powerful conversations, panel discussions, networking sessions, a business pitch competition, and a thanksgiving service to close. Each activity has been intentionally designed to strengthen our ties and create pathways for growth both individually and collectively.</p>
                        <p>As chairperson of the Central Summit Committee, I want to express my deepest appreciation to every delegate who traveled from near and far, and to the hardworking committee members who made this summit possible. Your presence here is a testament to your dedication to progress and unity.</p>
                        <p>Let us begin these three days with open hearts, open minds, and a shared determination to build something lasting.</p>
                        <p>On behalf of the Central Summit Committee, I officially declare the FOLICEA Inaugural Summit open.</p>
                        <p>Welcome to Day One and let the journey begin.</p>
                        <p>Thank you.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-3xl bg-white supports-[backdrop-filter]:bg-white/90 backdrop-blur border border-gray-200 shadow-xl">
                  <div className="grid md:grid-cols-3">
                    <div className="md:col-span-1 relative h-64 md:h-full">
                      <Image src={"https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Chairman%20Emmanuel%20Patrick.jpg?updatedAt=1757347430203"} alt="Chairman Emmanuel Patrick" fill className="object-cover" />
                    </div>
                    <div className="md:col-span-2 p-6 sm:p-8">
                      <div className="mb-5">
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-liberian-blue/10 text-liberian-blue text-xs font-semibold uppercase tracking-wider">Official Remark</span>
                        <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-3 leading-tight">Official Remark of Chairman Emmanuel Patrick</h3>
                        <p className="text-sm text-gray-500 mt-1">On the Occasion of the Inaugural Liberians in East Africa Summit held in Kampala, Uganda — Date: March 22, 2025</p>
                      </div>
                      <div className="prose max-w-none text-gray-700 space-y-4">
                        <p>Distinguished Platform Guests, Partners and Sponsors, Fellow Liberians, Ladies and Gentlemen,</p>
                        <p>I stand before you deeply honored, humbled, and inspired by this historic moment, the Inaugural Summit of Liberians in East Africa.</p>
                        <p>Today, we gather not merely as individuals who happen to live abroad, but as one people, bound by a shared history, a shared destiny, and a shared pride.</p>
                        <p>I am a Liberian unapologetically and unequivocally.</p>
                        <p>I was born and raised in the land of the free a land that, despite its challenges, still stands tall as a symbol of African resilience, and hope.</p>
                        <p>Liberia is a nation with an amazing culture, a beautiful landscape, and a richness of spirit that cannot be measured by global rankings.</p>
                        <p>Ours is a land blessed with vast natural resources, yes iron, gold, rubber, timber, and fertile soil but our greatest resource has always been our people: hardworking, brilliant, courageous, and determined.</p>
                        <p>I walk with my head held high because I know that my motherland our Liberia is indeed the Mother of this Native Land, Africa.</p>
                        <p>From the soil of Monrovia and the spirit of our forebears emerged the idea of Pan-African freedom the notion that Africa could stand on its own, independent and dignified. Liberia was the first black republic on African soil, a beacon that inspired a continent. And today, as we stand here in East Africa a region that has welcomed us with open arms we carry that torch of freedom still burning bright.</p>
                        <p>My brothers and sisters, we are part of a legacy that cannot be erased. Our ancestors sowed the seeds of liberty in a world that once told them they were not free. They built, they dreamed, they fought and they triumphed. And even when tragedy struck, when civil unrest tore at the fabric of our nation, when families were scattered across continents, when it seemed that the world had forgotten us we did not give up.</p>
                        <p>We overcame. We overcame because the Liberian spirit does not surrender. We overcame because deep within us lies a song of faith a faith that no hardship can silence. We overcame because our hearts are united in the belief that better days will come.</p>
                        <p>And now, here we are gathered as sons and daughters of Liberia across East Africa: from Kenya, Uganda, Tanzania, Rwanda, and beyond. We are teachers, entrepreneurs, professionals, students, artists, and innovators, each of us carry the story of Liberia wherever we go.</p>
                        <p>This summit is not just a meeting; it is a homecoming. It is a reminder that no matter where we live, the red, white, and blue of our flag still beats in our hearts. It is a call to reconnect, to rebuild, and to reimagine what it means to be Liberian in the 21st century.</p>
                        <p>As the Chairperson of the Liberian Diaspora in East Africa, I see this gathering as the beginning of a new chapter. A chapter where we, the Diaspora, become not only ambassadors of our culture but also partners in Liberia’s transformation. Our nation needs us—our ideas, our skills, our investments, our voices. We can help strengthen education through scholarship programs; support small businesses through Diaspora investment; and advocate for governance that reflects transparency, unity, and progress.</p>
                        <p>We are not outsiders; we are Liberians abroad, and our role is vital. We must build bridges between our host nations and our homeland. We must mentor young Liberians—both here and at home—and remind them that their dreams are valid, their talents are needed, and their identity is powerful.</p>
                        <p>Let this summit ignite a movement—a movement of purpose, pride, and partnership. Let us establish a strong network of Liberians in East Africa that supports one another socially, economically, and emotionally. Let us tell our stories, celebrate our achievements, and lift each other up. For even as it sometimes seems that Liberia has been left behind by the rest of the world, we know in our hearts: we shall overcome again. Our best days are not behind us; they are ahead of us. And they begin with gatherings like this one, where hope is reborn, unity is restored, and faith is renewed.</p>
                        <p>So today, I invite every Liberian here to rise—not just physically, but spiritually—to rise with confidence, with love for country, and with the conviction that together, we can build the Liberia we dream of.</p>
                        <p>May this summit mark the dawn of a stronger Diaspora and a stronger Liberia. May we always walk with our heads held high, knowing who we are, where we come from, and what we stand for. Because we are Liberians—unapologetically, unequivocally, and eternally.</p>
                        <p>Thank you. May God bless Liberia, and may God bless all of you.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {featured.map((item) => (
                <div key={item._id} className="relative overflow-hidden rounded-3xl bg-white border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-2xl mb-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative h-80 lg:h-[28rem]">
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
                    <Image src={getImageSrc(item.image)} alt={item.title} fill className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
  const news = newsItems.map((n) => ({
    _id: n.id,
    title: n.title,
    excerpt: n.excerpt,
    image: n.image,
    date: n.date,
    category: n.category,
    featured: n.featured || false,
    slug: { current: n.id },
  }));

  return {
    props: { news },
  };
};

export default NewsPage;