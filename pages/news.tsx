'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Newspaper, Users, Trophy, Globe } from 'lucide-react';
import Link from 'next/link';

const NewsPage = () => {
  const newsItems = [
    {
      id: 1,
      title: "FOLICEA Summit 2025 Registration Now Open",
      excerpt: "We are excited to announce that registration for the FOLICEA Summit 2025 is now officially open. Early bird registration is available until October 31, 2025.",
      date: "December 15, 2024",
      category: "Announcement",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      featured: false
    },
    {
      id: 2,
      title: "Mr. W. Praise Bloyuefloh to Lead Central Summit Committee",
      excerpt: "FOLICEA appoints Mr. W. Praise Bloyuefloh as Chairperson of the Central Summit Committee for the inaugural FOLICEA Summit 2025 in Kampala.",
      date: "September 6, 2025",
      category: "Press Release",
      image: "https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Praise.jpg?updatedAt=1757333456399",
      featured: true
    },
    {
      id: 3,
      title: "Partnership Announcement: African Union",
      excerpt: "We are thrilled to announce our partnership with the African Union for the FOLICEA Summit 2025. This collaboration will strengthen our mission.",
      date: "December 5, 2024",
      category: "Partnerships",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 4,
      title: "Summit Agenda Released",
      excerpt: "The complete agenda for the FOLICEA Summit 2025 has been released. The four-day event will feature keynote speeches, workshops, and networking sessions.",
      date: "November 30, 2024",
      category: "Agenda",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 5,
      title: "Sponsorship Opportunities Available",
      excerpt: "We are offering various sponsorship packages for organizations interested in supporting the FOLICEA Summit 2025 and connecting with our community.",
      date: "November 25, 2024",
      category: "Sponsorship",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 6,
      title: "Venue Confirmed: Kampala Serena Hotel",
      excerpt: "We are pleased to confirm that the FOLICEA Summit 2025 will be held at the prestigious Kampala Serena Hotel in Uganda's capital city.",
      date: "November 20, 2024",
      category: "Venue",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const categories = [
    { name: "All", count: newsItems.length },
    { name: "Announcement", count: 1 },
    { name: "Speakers", count: 1 },
    { name: "Partnerships", count: 1 },
    { name: "Agenda", count: 1 },
    { name: "Sponsorship", count: 1 },
    { name: "Venue", count: 1 }
  ];

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Latest News & Updates
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Stay informed about the latest developments, announcements, and updates regarding the FOLICEA Summit 2025.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured News */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured News</h2>
            
            {newsItems.filter(item => item.featured).map((item) => (
              <div key={item.id} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-64 lg:h-full">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-liberian-red text-white px-3 py-1 rounded-full text-sm font-medium">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center text-gray-500 text-sm mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      {item.date}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {item.excerpt}
                    </p>
                    <Link
                      href={`/news/${item.id}`}
                      className="inline-flex items-center text-liberian-red hover:text-liberian-blue font-semibold transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

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
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={category.name}
                  className="px-6 py-3 bg-gray-100 hover:bg-liberian-red hover:text-white rounded-full font-medium transition-all duration-300"
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* All News */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">All News</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.filter(item => !item.featured).map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 * index }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-48">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-liberian-red text-white px-3 py-1 rounded-full text-sm font-medium">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-gray-500 text-sm mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      {item.date}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {item.excerpt}
                    </p>
                    <Link
                      href={`/news/${item.id}`}
                      className="inline-flex items-center text-liberian-red hover:text-liberian-blue font-semibold transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
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
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
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

export default NewsPage;
