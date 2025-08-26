import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, Star, Award } from 'lucide-react';

const AgendaPage = () => {
  const agenda = [
    {
      day: "Day 1",
      date: "November 28, 2025",
      title: "Opening Ceremony & Welcome",
      theme: "Building Bridges",
      events: [
        {
          time: "08:00 - 09:00",
          title: "Registration & Welcome Coffee",
          description: "Check-in and networking with fellow delegates",
          type: "Registration"
        },
        {
          time: "09:00 - 10:30",
          title: "Opening Ceremony",
          description: "Official opening with national anthems, prayers, and welcome addresses",
          type: "Ceremony",
          speakers: ["H.E. Dr. Jeremiah Kpan Koung", "Hon. Richard Nagbe Koon"]
        },
        {
          time: "10:30 - 11:00",
          title: "Coffee Break & Networking",
          description: "Refreshments and informal networking",
          type: "Break"
        },
        {
          time: "11:00 - 12:30",
          title: "Keynote Address: The Liberian Diaspora in East Africa",
          description: "Exploring our community's journey and future opportunities",
          type: "Keynote",
          speakers: ["H.E. Dr. Jeremiah Kpan Koung"]
        },
        {
          time: "12:30 - 14:00",
          title: "Lunch & Cultural Performance",
          description: "Traditional Liberian cuisine and cultural entertainment",
          type: "Lunch"
        },
        {
          time: "14:00 - 15:30",
          title: "Panel Discussion: Strengthening Diaspora Bonds",
          description: "Strategies for building stronger community connections",
          type: "Panel",
          speakers: ["Community Leaders", "Diaspora Experts"]
        },
        {
          time: "15:30 - 16:00",
          title: "Afternoon Break",
          description: "Refreshments and networking",
          type: "Break"
        },
        {
          time: "16:00 - 17:30",
          title: "Workshop: Community Leadership Development",
          description: "Interactive session on effective community leadership",
          type: "Workshop"
        },
        {
          time: "18:00 - 20:00",
          title: "Welcome Dinner & Cultural Night",
          description: "Evening of celebration with traditional music and dance",
          type: "Dinner"
        }
      ]
    },
    {
      day: "Day 2",
      date: "November 29, 2025",
      title: "Professional Development & Networking",
      theme: "Empowering Growth",
      events: [
        {
          time: "08:00 - 09:00",
          title: "Morning Coffee & Networking",
          description: "Start the day with networking opportunities",
          type: "Networking"
        },
        {
          time: "09:00 - 10:30",
          title: "Keynote: Economic Empowerment in the Diaspora",
          description: "Strategies for financial success and business development",
          type: "Keynote",
          speakers: ["Business Leaders", "Economic Experts"]
        },
        {
          time: "10:30 - 11:00",
          title: "Coffee Break",
          description: "Refreshments and networking",
          type: "Break"
        },
        {
          time: "11:00 - 12:30",
          title: "Panel: Entrepreneurship & Business Opportunities",
          description: "Exploring business opportunities across East Africa",
          type: "Panel",
          speakers: ["Entrepreneurs", "Business Consultants"]
        },
        {
          time: "12:30 - 14:00",
          title: "Lunch & Speed Networking",
          description: "Structured networking sessions during lunch",
          type: "Lunch"
        },
        {
          time: "14:00 - 15:30",
          title: "Workshop: Digital Skills for the Modern Economy",
          description: "Hands-on training in digital tools and platforms",
          type: "Workshop"
        },
        {
          time: "15:30 - 16:00",
          title: "Afternoon Break",
          description: "Refreshments and networking",
          type: "Break"
        },
        {
          time: "16:00 - 17:30",
          title: "Roundtable: Youth Development & Education",
          description: "Addressing educational needs and youth empowerment",
          type: "Roundtable"
        },
        {
          time: "18:00 - 20:00",
          title: "Business Networking Dinner",
          description: "Formal networking dinner with business leaders",
          type: "Dinner"
        }
      ]
    },
    {
      day: "Day 3",
      date: "November 30, 2025",
      title: "Cultural Exchange & Heritage",
      theme: "Preserving Our Heritage",
      events: [
        {
          time: "08:00 - 09:00",
          title: "Morning Coffee & Cultural Display",
          description: "Traditional Liberian artifacts and cultural presentations",
          type: "Cultural"
        },
        {
          time: "09:00 - 10:30",
          title: "Keynote: Preserving Liberian Cultural Heritage",
          description: "The importance of cultural preservation in the diaspora",
          type: "Keynote",
          speakers: ["Cultural Ambassadors", "Heritage Experts"]
        },
        {
          time: "10:30 - 11:00",
          title: "Coffee Break",
          description: "Refreshments and cultural discussions",
          type: "Break"
        },
        {
          time: "11:00 - 12:30",
          title: "Panel: Cultural Exchange & Integration",
          description: "Balancing cultural preservation with local integration",
          type: "Panel",
          speakers: ["Cultural Leaders", "Integration Experts"]
        },
        {
          time: "12:30 - 14:00",
          title: "Traditional Lunch & Cultural Performances",
          description: "Liberian traditional dishes and live performances",
          type: "Lunch"
        },
        {
          time: "14:00 - 15:30",
          title: "Workshop: Traditional Arts & Crafts",
          description: "Hands-on session with traditional Liberian arts",
          type: "Workshop"
        },
        {
          time: "15:30 - 16:00",
          title: "Afternoon Break",
          description: "Refreshments and cultural networking",
          type: "Break"
        },
        {
          time: "16:00 - 17:30",
          title: "Cultural Showcase & Talent Show",
          description: "Community members showcase their talents",
          type: "Showcase"
        },
        {
          time: "18:00 - 20:00",
          title: "Cultural Gala Dinner",
          description: "Elegant dinner with traditional and modern entertainment",
          type: "Dinner"
        }
      ]
    },
    {
      day: "Day 4",
      date: "December 1, 2025",
      title: "Future Planning & Closing",
      theme: "Building Our Future",
      events: [
        {
          time: "08:00 - 09:00",
          title: "Morning Coffee & Reflection",
          description: "Time to reflect on the summit experience",
          type: "Reflection"
        },
        {
          time: "09:00 - 10:30",
          title: "Keynote: The Future of FOLICEA",
          description: "Vision and roadmap for the organization's future",
          type: "Keynote",
          speakers: ["FOLICEA Leadership", "Strategic Planners"]
        },
        {
          time: "10:30 - 11:00",
          title: "Coffee Break",
          description: "Final networking opportunities",
          type: "Break"
        },
        {
          time: "11:00 - 12:30",
          title: "Strategic Planning Session",
          description: "Working groups to develop action plans",
          type: "Planning"
        },
        {
          time: "12:30 - 14:00",
          title: "Farewell Lunch",
          description: "Final meal together with summit highlights",
          type: "Lunch"
        },
        {
          time: "14:00 - 15:30",
          title: "Commitment Ceremony & Pledges",
          description: "Delegates make commitments to community development",
          type: "Ceremony"
        },
        {
          time: "15:30 - 16:00",
          title: "Afternoon Break",
          description: "Final refreshments and networking",
          type: "Break"
        },
        {
          time: "16:00 - 17:30",
          title: "Closing Ceremony & Awards",
          description: "Recognition of contributions and official closing",
          type: "Ceremony"
        },
        {
          time: "18:00 - 20:00",
          title: "Farewell Reception",
          description: "Celebration of successful summit completion",
          type: "Reception"
        }
      ]
    }
  ];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'Keynote':
        return 'bg-liberian-red text-white';
      case 'Panel':
        return 'bg-liberian-blue text-white';
      case 'Workshop':
        return 'bg-green-600 text-white';
      case 'Ceremony':
        return 'bg-purple-600 text-white';
      case 'Lunch':
        return 'bg-orange-600 text-white';
      case 'Dinner':
        return 'bg-pink-600 text-white';
      case 'Break':
        return 'bg-gray-500 text-white';
      default:
        return 'bg-gray-600 text-white';
    }
  };

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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Summit Agenda
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto">
              Four days of inspiring sessions, networking, and cultural exchange 
              that will strengthen our community bonds and create lasting impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Agenda Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Event Schedule
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive program designed to engage, inspire, and empower our community
            </p>
          </motion.div>

          <div className="space-y-12">
            {agenda.map((day, dayIndex) => (
              <motion.div
                key={dayIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: dayIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                {/* Day Header */}
                <div className="bg-gradient-to-r from-liberian-blue to-liberian-red text-white p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-2">
                        {day.day}
                      </h3>
                      <p className="text-lg opacity-90 mb-2">{day.date}</p>
                      <p className="text-xl font-semibold">{day.title}</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                        Theme: {day.theme}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Events */}
                <div className="p-8">
                  <div className="space-y-6">
                    {day.events.map((event, eventIndex) => (
                      <motion.div
                        key={eventIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: eventIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="flex flex-col lg:flex-row lg:items-start space-y-4 lg:space-y-0 lg:space-x-6 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                      >
                        <div className="lg:w-32 flex-shrink-0">
                          <div className="flex items-center space-x-2 text-liberian-red font-semibold">
                            <Clock className="w-4 h-4" />
                            <span>{event.time}</span>
                          </div>
                        </div>

                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                            <h4 className="text-lg font-semibold text-gray-900 mb-2 sm:mb-0">
                              {event.title}
                            </h4>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getEventTypeColor(event.type)}`}>
                              {event.type}
                            </span>
                          </div>
                          
                          <p className="text-gray-600 mb-3">
                            {event.description}
                          </p>

                          {event.speakers && (
                            <div className="flex items-center space-x-2">
                              <Users className="w-4 h-4 text-liberian-blue" />
                              <span className="text-sm text-liberian-blue font-medium">
                                Speakers: {event.speakers.join(', ')}
                              </span>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types Legend */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Event Types
            </h2>
            <p className="text-gray-600">
              Understanding the different types of sessions and activities
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {[
              { type: 'Keynote', color: 'bg-liberian-red' },
              { type: 'Panel', color: 'bg-liberian-blue' },
              { type: 'Workshop', color: 'bg-green-600' },
              { type: 'Ceremony', color: 'bg-purple-600' },
              { type: 'Lunch', color: 'bg-orange-600' },
              { type: 'Dinner', color: 'bg-pink-600' },
              { type: 'Break', color: 'bg-gray-500' },
              { type: 'Other', color: 'bg-gray-600' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`${item.color} text-white w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center text-xs font-bold`}>
                  {item.type.charAt(0)}
                </div>
                <p className="text-sm text-gray-600">{item.type}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Venue Information */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Venue Information
            </h2>
            <p className="text-gray-600">
              Everything you need to know about the summit location
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-center space-x-4 mb-6">
                <MapPin className="w-8 h-8 text-liberian-red" />
                <h3 className="text-2xl font-bold text-gray-900">Kampala Serena Hotel</h3>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>📍 Kintu Road, Kampala, Uganda</p>
                <p>🏨 5-star luxury hotel in the heart of Kampala</p>
                <p>📞 +256 414 309000</p>
                <p>🌐 www.serenahotels.com</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-center space-x-4 mb-6">
                <Calendar className="w-8 h-8 text-liberian-blue" />
                <h3 className="text-2xl font-bold text-gray-900">Event Details</h3>
              </div>
              <div className="space-y-4 text-gray-600">
                <p>📅 November 28 - December 1, 2025</p>
                <p>⏰ Daily: 8:00 AM - 8:00 PM</p>
                <p>🎫 Registration required</p>
                <p>🍽️ Meals included in registration</p>
              </div>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Join This Historic Event?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Don't miss out on this opportunity to connect, learn, and grow with 
              the Liberian diaspora community in East Africa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/registration" className="bg-white text-liberian-red hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
                Register Now
              </a>
              <a href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-liberian-red font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300">
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AgendaPage;
