'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, Users, MapPin, BookOpen, Briefcase, Award, Coffee, Utensils } from 'lucide-react';

const AgendaPage = () => {
  const agenda = [
    {
      day: "Day 1",
      date: "November 28, 2025",
      title: "Official Launch of the Federation",
      theme: "Unity, Identity, and a Shared Vision",
      events: [
        {
          time: "08:00 - 09:00",
          title: "Registration & Networking",
          description: "Check-in and networking with fellow delegates",
          type: "Registration"
        },
        {
          time: "09:00 - 09:30",
          title: "Opening Prayer and National Anthems",
          description: "Liberia & Host Country national anthems and prayers",
          type: "Ceremony"
        },
        {
          time: "09:30 - 10:15",
          title: "Welcome Address and Recognition of Guests",
          description: "By Committee Chair John Meyer",
          type: "Welcome",
          speakers: ["Committee Chair John Meyer"]
        },
        {
          time: "10:15 - 10:45",
          title: "Special Statement from the Acting Chairman",
          description: "Mr. Emmanuel Patrick",
          type: "Statement",
          speakers: ["Mr. Emmanuel Patrick"]
        },
        {
          time: "10:45 - 11:15",
          title: "Keynote Address: The Power of Diaspora Unity",
          description: "Mr. James Sawa",
          type: "Keynote",
          speakers: ["Mr. James Sawa"]
        },
        {
          time: "11:15 - 12:00",
          title: "Official Launch of FOLICEA",
          description: "Official launch ceremony of the Federation",
          type: "Launch"
        },
        {
          time: "12:00 - 12:15",
          title: "Cultural Performance",
          description: "Traditional cultural entertainment",
          type: "Performance"
        },
        {
          time: "12:15 - 13:15",
          title: "Panel Discussion: Strengthening Community Ties Across Borders",
          description: "Interactive discussion on community building",
          type: "Panel"
        },
        {
          time: "13:15 - 14:00",
          title: "Lunch & Cultural Showcase",
          description: "Traditional Liberian cuisine and cultural entertainment",
          type: "Lunch"
        },
        {
          time: "14:00 - 15:30",
          title: "Presentation of FOLICEA Constitution & Structure",
          description: "Detailed presentation of federation constitution and organizational structure",
          type: "Presentation"
        },
        {
          time: "15:30 - 16:30",
          title: "Breakout Discussions by Country Clusters",
          description: "Group discussions organized by country representation",
          type: "Workshop"
        },
        {
          time: "16:30 - 17:00",
          title: "Closing Remarks",
          description: "Day 1 closing and preview of Day 2",
          type: "Closing"
        }
      ]
    },
    {
      day: "Day 2",
      date: "November 29, 2025",
      title: "Business, Investment & Tech Innovation Seminars",
      theme: "Empowering the Diaspora Economy",
      events: [
        {
          time: "08:30 - 09:00",
          title: "Arrival and Registration",
          description: "Check-in for Day 2 participants",
          type: "Registration"
        },
        {
          time: "09:00 - 09:15",
          title: "Opening Remarks",
          description: "Day 2 opening and agenda overview",
          type: "Opening"
        },
        {
          time: "09:15 - 10:30",
          title: "Business & Investment Forum",
          description: "Diaspora Investment Opportunities, Navigating Regional Trade Platforms, Partnership with Local Enterprises",
          type: "Forum"
        },
        {
          time: "10:30 - 11:00",
          title: "Coffee Break & Networking",
          description: "Refreshments and informal networking",
          type: "Break"
        },
        {
          time: "11:00 - 12:30",
          title: "Panel Discussion: Diaspora Investment & Regional Trade",
          description: "Diaspora investment, regional trade, SMEs support, Liberia–East Africa business relations",
          type: "Panel"
        },
        {
          time: "12:30 - 13:30",
          title: "Lunch",
          description: "Networking lunch session",
          type: "Lunch"
        },
        {
          time: "13:30 - 15:00",
          title: "Entrepreneurship & Innovation Seminar",
          description: "Access to Startup Capital, Leveraging Digital Platforms, Youth Innovation & Fintech",
          type: "Seminar"
        },
        {
          time: "15:00 - 16:00",
          title: "Workshop: Building Scalable Diaspora Ventures",
          description: "Interactive workshop on building sustainable business ventures",
          type: "Workshop"
        },
        {
          time: "16:00 - 17:00",
          title: "Exhibition & Product Demo",
          description: "Open session showcasing diaspora products and innovations",
          type: "Exhibition"
        }
      ]
    },
    {
      day: "Day 3",
      date: "November 30, 2025",
      title: "General Assembly Elections and Inauguration",
      theme: "Democratic Leadership for Diaspora Development",
      events: [
        {
          time: "08:00 - 09:00",
          title: "Assembly Accreditation & Voter Validation",
          description: "Registration and validation of voting delegates",
          type: "Registration"
        },
        {
          time: "09:00 - 09:30",
          title: "Opening Remarks & Electoral Guidelines",
          description: "Election procedures and guidelines presentation",
          type: "Opening"
        },
        {
          time: "09:30 - 11:00",
          title: "Candidate Presentations and Debates",
          description: "Candidates present their vision and engage in debates",
          type: "Election"
        },
        {
          time: "11:00 - 13:00",
          title: "Voting & Tallying of Results",
          description: "Democratic voting process and result compilation",
          type: "Election"
        },
        {
          time: "13:00 - 14:00",
          title: "Lunch Break",
          description: "Lunch while results are being tallied",
          type: "Lunch"
        },
        {
          time: "14:00 - 14:30",
          title: "Announcement of Election Results",
          description: "Official announcement of elected leadership",
          type: "Election"
        },
        {
          time: "14:30 - 15:30",
          title: "Inauguration Ceremony of Elected Leaders",
          description: "Official swearing-in of new FOLICEA leadership",
          type: "Inauguration"
        },
        {
          time: "15:30 - 16:00",
          title: "Presentation of Strategic Plan (2025–2027)",
          description: "Presentation of FOLICEA's strategic roadmap",
          type: "Presentation"
        },
        {
          time: "16:00 - 16:30",
          title: "Official Closing & Vote of Thanks",
          description: "Summit closing ceremony and acknowledgments",
          type: "Closing"
        },
        {
          time: "16:30 - 17:00",
          title: "Group Photos & Departure",
          description: "Group photographs and farewell",
          type: "Closing"
        }
      ]
    }
  ];

  const getEventIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case 'registration':
        return <Users className="w-5 h-5" />;
      case 'ceremony':
      case 'launch':
      case 'inauguration':
        return <Award className="w-5 h-5" />;
      case 'keynote':
      case 'statement':
        return <BookOpen className="w-5 h-5" />;
      case 'panel':
      case 'forum':
      case 'seminar':
        return <Briefcase className="w-5 h-5" />;
      case 'workshop':
        return <BookOpen className="w-5 h-5" />;
      case 'break':
        return <Coffee className="w-5 h-5" />;
      case 'lunch':
        return <Utensils className="w-5 h-5" />;
      case 'performance':
      case 'exhibition':
        return <Users className="w-5 h-5" />;
      case 'election':
        return <Award className="w-5 h-5" />;
      default:
        return <Calendar className="w-5 h-5" />;
    }
  };

  const getEventColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'registration':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'ceremony':
      case 'launch':
      case 'inauguration':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'keynote':
      case 'statement':
        return 'bg-liberian-red text-white border-liberian-red';
      case 'panel':
      case 'forum':
      case 'seminar':
        return 'bg-liberian-blue text-white border-liberian-blue';
      case 'workshop':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'break':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'lunch':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'performance':
      case 'exhibition':
        return 'bg-pink-100 text-pink-800 border-pink-200';
      case 'election':
        return 'bg-indigo-100 text-indigo-800 border-indigo-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
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
              Three days of meaningful dialogue, networking, and collaboration
            </p>
          </motion.div>
        </div>
      </section>

      {/* Agenda Content */}
      <section className="section-padding">
        <div className="container-custom">
          {agenda.map((day, dayIndex) => (
            <motion.div
              key={dayIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: dayIndex * 0.2 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              {/* Day Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center bg-liberian-red text-white px-6 py-3 rounded-full mb-4">
                  <Calendar className="w-5 h-5 mr-2" />
                  {day.day}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {day.title}
                </h2>
                <p className="text-xl text-liberian-red font-semibold mb-2">
                  {day.date}
                </p>
                <p className="text-lg text-gray-600">
                  Theme: {day.theme}
                </p>
              </div>

              {/* Events Timeline */}
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-liberian-red"></div>
                
                {/* Events */}
                <div className="space-y-8">
                  {day.events.map((event, eventIndex) => (
                    <motion.div
                      key={eventIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: eventIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="relative flex items-start"
                    >
                      {/* Timeline Dot */}
                      <div className="absolute left-6 w-4 h-4 bg-liberian-red rounded-full border-4 border-white shadow-lg"></div>
                      
                      {/* Event Content */}
                      <div className="ml-16 bg-white rounded-xl shadow-lg p-6 flex-1 hover:shadow-xl transition-shadow duration-300">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                          {/* Time */}
                          <div className="flex items-center text-liberian-red font-semibold">
                            <Clock className="w-4 h-4 mr-2" />
                            {event.time}
                          </div>
                          
                          {/* Event Type Badge */}
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getEventColor(event.type)}`}>
                            {getEventIcon(event.type)}
                            <span className="ml-1">{event.type}</span>
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {event.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 mb-4">
                          {event.description}
                        </p>

                        {/* Speakers */}
                        {event.speakers && event.speakers.length > 0 && (
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Users className="w-4 h-4" />
                            <span>Speakers: {event.speakers.join(', ')}</span>
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
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-liberian-blue to-liberian-red">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Join Us?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Don't miss this historic opportunity to be part of the FOLICEA Summit 2025. 
              Register now and secure your place in this transformative event.
            </p>
            <a
              href="/registration"
              className="inline-flex items-center bg-white text-liberian-red px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Register Now
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AgendaPage;
