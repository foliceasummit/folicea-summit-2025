'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, MapPin, BookOpen, Briefcase, Award, Coffee, Utensils, Globe } from 'lucide-react';

const AgendaPage = () => {
  const [activeDay, setActiveDay] = useState(0);
  const agenda = [
    {
      day: "Day 1",
      date: "November 28, 2025",
      title: "Official Launch of the Federation",
      theme: "Unity, Identity, and a Shared Vision",
      events: [
        { time: "08:00 - 09:00", title: "Registration, Networking & Breakfast", description: "Check-in and networking with fellow delegates", type: "Registration" },
        { time: "09:00 - 09:15", title: "Opening Prayer & National Anthems", description: "Liberia & Host Country anthems and prayers", type: "Ceremony" },
        { time: "09:15 - 09:30", title: "Welcome Address", description: "By Central Organizing Committee Chairperson", type: "Opening" },
        { time: "09:30 - 09:45", title: "Recognition of Guests", description: "By Central Organizing Committee Member", type: "Ceremony" },
        { time: "09:45 - 09:55", title: "Spoken Words", description: "By …………….", type: "Performance" },
        { time: "09:55 - 10:15", title: "Special Statement from the Acting Chairman", description: "Mr. Emmanuel Patrick", type: "Statement" },
        { time: "10:15 - 10:50", title: "Keynote Address: The Power of Diaspora Unity", description: "By …………….", type: "Keynote" },
        { time: "10:50 - 11:00", title: "Poem", description: "By …………….", type: "Performance" },
        { time: "11:00 - 11:30", title: "Official Launch of FOLICEA", description: "Launch ceremony of the Federation", type: "Launch" },
        { time: "11:30 - 12:00", title: "Cultural Performance", description: "Traditional cultural entertainment", type: "Performance" },
        { time: "12:00 - 12:30", title: "Presentation of FOLICEA Constitution & Structure", description: "Federation constitution and organizational structure", type: "Presentation" },
        { time: "12:30 - 13:30", title: "Lunch & Cultural Showcase", description: "Liberian cuisine and entertainment", type: "Lunch" },
        { time: "13:30 - 15:30", title: "Pitch Competition", description: "Business Pitch: Clean Monrovia, Green Future – Resolving the Waste Management Crisis", type: "Panel" },
        { time: "15:30 - 15:45", title: "Cultural Performance", description: "Traditional cultural entertainment", type: "Performance" },
        { time: "15:45 - 16:40", title: "Breakout Discussions by Country Clusters", description: "Group discussions organized by country representation", type: "Workshop" },
        { time: "16:40 - 17:15", title: "Remarks", description: "By …………….", type: "Closing" },
        { time: "17:15 - 17:30", title: "Closing Remarks", description: "By …………….", type: "Closing" },
        { time: "17:30 - 18:00", title: "Group Photos", description: "", type: "Closing" }
      ]
    },
    {
      day: "Day 2",
      date: "November 29, 2025",
      title: "Business, Investment & Tech Innovation Seminars",
      theme: "Empowering the Diaspora Economy",
      events: [
        { time: "08:00 - 08:55", title: "Registration, Networking & Breakfast", description: "Check-in and networking with fellow delegates", type: "Registration" },
        { time: "08:55 - 09:10", title: "Opening Remarks", description: "Day 2 opening and agenda overview", type: "Opening" },
        { time: "09:10 - 09:25", title: "Review of Day 1", description: "By …………….", type: "Opening" },
        { time: "09:25 - 11:00", title: "Business & Investment Forum", description: "Diaspora Investment Opportunities, Navigating Regional Trade Platforms, Partnership with Local Enterprises", type: "Forum" },
        { time: "11:00 - 12:00", title: "Lunch & Networking", description: "Informal networking session", type: "Lunch" },
        { time: "12:00 - 13:30", title: "Panel Discussion: Entrepreneurship & Innovation", description: "Access to Startup Capital, Leveraging Digital Platforms, Youth Innovation & Fintech", type: "Panel" },
        { time: "13:30 - 14:00", title: "Cultural Performance", description: "Traditional cultural entertainment", type: "Performance" },
        { time: "14:00 - 15:00", title: "Exhibition & Product Demo", description: "Showcasing diaspora products and innovations", type: "Exhibition" },
        { time: "15:00 - 15:30", title: "Closing Remarks", description: "By …………….", type: "Closing" },
        { time: "15:30 - 19:00", title: "Sightseeing", description: "Enjoy a guided tour of Uganda’s top attractions", type: "Tour" }
      ]
    },
    {
      day: "Day 3",
      date: "November 30, 2025",
      title: "General Assembly Elections & Inauguration",
      theme: "Democratic Leadership for Diaspora Development",
      events: [
        { time: "08:00 - 09:00", title: "Registration, Accreditation & Breakfast", description: "Assembly accreditation & voter validation", type: "Registration" },
        { time: "09:00 - 09:15", title: "Opening Remarks & Electoral Guidelines", description: "Election procedures and guidelines", type: "Opening" },
        { time: "09:15 - 11:00", title: "Candidate Presentations & Debates", description: "", type: "Election" },
        { time: "11:00 - 13:00", title: "Voting & Tallying of Results", description: "", type: "Election" },
        { time: "13:00 - 14:00", title: "Lunch Break", description: "While results are being tallied", type: "Lunch" },
        { time: "14:00 - 14:30", title: "Announcement of Election Results", description: "", type: "Election" },
        { time: "14:30 - 15:30", title: "Inauguration Ceremony of Elected Leaders", description: "", type: "Inauguration" },
        { time: "15:30 - 16:00", title: "Remarks from Chairperson of FOLICEA", description: "", type: "Statement" },
        { time: "16:00 - 16:55", title: "Presentation of Strategic Plan (2025–2027)", description: "", type: "Presentation" },
        { time: "16:55 - 17:30", title: "Remarks", description: "By …………….", type: "Closing" },
        { time: "17:30 - 18:00", title: "Official Closing & Vote of Thanks", description: "", type: "Closing" },
        { time: "18:00", title: "Group Photos & Departure", description: "", type: "Closing" },
        { time: "21:00 - Late", title: "Liberian Vibes Night – Gala & Inaugural Ball (Social Night)", description: "", type: "Social" }
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
       case 'tour':
         return <MapPin className="w-5 h-5" />;
       case 'social':
         return <Users className="w-5 h-5" />;
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
       case 'tour':
         return 'bg-teal-100 text-teal-800 border-teal-200';
       case 'social':
         return 'bg-purple-100 text-purple-800 border-purple-200';
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
           {/* Day Tabs */}
           <div className="flex justify-center mb-12">
             <div className="bg-gray-100 rounded-lg p-2 flex space-x-2">
               {agenda.map((day, dayIndex) => (
                 <button
                   key={dayIndex}
                   onClick={() => setActiveDay(dayIndex)}
                   className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                     activeDay === dayIndex
                       ? 'bg-liberian-red text-white shadow-lg'
                       : 'bg-white text-gray-600 hover:bg-gray-50'
                   }`}
                 >
                   {day.day}
                 </button>
               ))}
             </div>
           </div>

           {/* Active Day Content */}
           <motion.div
             key={activeDay}
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5 }}
             className="mb-8"
           >
             {/* Day Header */}
             <div className="text-center mb-12">
               <div className="inline-flex items-center bg-liberian-red text-white px-6 py-3 rounded-full mb-4">
                 <Calendar className="w-5 h-5 mr-2" />
                 {agenda[activeDay].day}
               </div>
               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                 {agenda[activeDay].title}
               </h2>
               <p className="text-xl text-liberian-red font-semibold mb-2">
                 {agenda[activeDay].date}
               </p>
               <p className="text-lg text-gray-600">
                 Theme: {agenda[activeDay].theme}
               </p>
             </div>

             {/* Events Timeline */}
             <div className="relative">
               {/* Timeline Line */}
               <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-liberian-red"></div>
               
               {/* Events */}
               <div className="space-y-8">
                 {agenda[activeDay].events.map((event, eventIndex) => (
                   <motion.div
                     key={eventIndex}
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.6, delay: eventIndex * 0.1 }}
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
         </div>
       </section>

             {/* What's Included */}
       <section className="pt-16 pb-20 bg-gray-50">
         <div className="container-custom">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
             className="text-center mb-16"
           >
             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
               What's Included
             </h2>
             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
               Your comprehensive summit package includes everything you need for a successful experience
             </p>
           </motion.div>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
             {/* What's Included */}
             <motion.div
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true }}
             >
               <h3 className="text-2xl font-bold text-gray-900 mb-6">Summit Package</h3>
               <div className="space-y-4">
                 <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
                   <Utensils className="w-6 h-6 text-liberian-red mt-1 flex-shrink-0" />
                   <p className="text-gray-700">All meals (breakfast and lunch for 4 days)</p>
                 </div>
                 <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
                   <Users className="w-6 h-6 text-liberian-red mt-1 flex-shrink-0" />
                   <p className="text-gray-700">4 nights’ accommodation (shared room)</p>
                 </div>
                 <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
                   <BookOpen className="w-6 h-6 text-liberian-red mt-1 flex-shrink-0" />
                   <p className="text-gray-700">Branded Summit materials (notebook, pen, tag)</p>
                 </div>
                 <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
                   <Award className="w-6 h-6 text-liberian-red mt-1 flex-shrink-0" />
                   <p className="text-gray-700">Official summit T-shirt</p>
                 </div>
                 <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
                   <Briefcase className="w-6 h-6 text-liberian-red mt-1 flex-shrink-0" />
                   <p className="text-gray-700">Access to all sessions and workshops</p>
                 </div>
                 <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
                   <Users className="w-6 h-6 text-liberian-red mt-1 flex-shrink-0" />
                   <p className="text-gray-700">Networking opportunities and social events</p>
                 </div>
                 <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
                   <Award className="w-6 h-6 text-liberian-red mt-1 flex-shrink-0" />
                   <p className="text-gray-700">Official Invitation</p>
                 </div>
                 <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
                   <Award className="w-6 h-6 text-liberian-red mt-1 flex-shrink-0" />
                   <p className="text-gray-700">Access to the pitch competition</p>
                 </div>
                 <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
                   <MapPin className="w-6 h-6 text-liberian-red mt-1 flex-shrink-0" />
                   <p className="text-gray-700">Tour of Kampala historical sites</p>
                 </div>
               </div>
             </motion.div>

             {/* Important Notes */}
             <motion.div
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true }}
             >
               <h3 className="text-2xl font-bold text-gray-900 mb-6">Important Notes</h3>
               <div className="space-y-4">
                 <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
                   <Clock className="w-6 h-6 text-liberian-blue mt-1 flex-shrink-0" />
                   <p className="text-gray-700">Please arrive 30 minutes before each session</p>
                 </div>
                 <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
                   <Award className="w-6 h-6 text-liberian-blue mt-1 flex-shrink-0" />
                   <p className="text-gray-700">Business casual attire recommended for all sessions</p>
                 </div>
                 <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
                   <Briefcase className="w-6 h-6 text-liberian-blue mt-1 flex-shrink-0" />
                   <p className="text-gray-700">Bring business cards for networking opportunities</p>
                 </div>
                 <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
                   <BookOpen className="w-6 h-6 text-liberian-blue mt-1 flex-shrink-0" />
                   <p className="text-gray-700">All sessions will be conducted in English</p>
                 </div>
                 <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
                   <Calendar className="w-6 h-6 text-liberian-blue mt-1 flex-shrink-0" />
                   <p className="text-gray-700">Photography and recording permitted for personal use</p>
                 </div>
                 <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
                   <Globe className="w-6 h-6 text-liberian-blue mt-1 flex-shrink-0" />
                   <p className="text-gray-700">WiFi available throughout the venue</p>
                 </div>
               </div>
             </motion.div>
           </div>
         </div>
       </section>

       {/* Venue Information */}
       <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Everything You Need to Know About the Summit Location
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Venue details and important information for all participants
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Venue Details */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-liberian-blue to-liberian-red text-white rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Venue Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-yellow-300 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg">Kampala Serena Hotel</h4>
                      <p className="text-white/90">Kintu Road, Kampala, Uganda</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Calendar className="w-6 h-6 text-yellow-300 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg">Date & Time</h4>
                      <p className="text-white/90">November 28 - 30, 2025</p>
                      <p className="text-white/90">8:00 AM - 6:00 PM Daily</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Users className="w-6 h-6 text-yellow-300 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg">Capacity</h4>
                      <p className="text-white/90">500+ Participants</p>
                      <p className="text-white/90">Multiple Conference Rooms</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Expected Outcomes */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Expected Outcomes</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <Award className="w-6 h-6 text-liberian-red mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Formal launch and operationalization of FOLICEA.</p>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <Award className="w-6 h-6 text-liberian-red mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Election and inauguration of a representative leadership body.</p>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <Award className="w-6 h-6 text-liberian-red mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Enhanced economic empowerment through business and tech engagement.</p>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <Award className="w-6 h-6 text-liberian-red mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Strengthened inter-community and regional collaboration.</p>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <Award className="w-6 h-6 text-liberian-red mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Adoption of a strategic development plan for FOLICEA.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Participants Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Participants
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A diverse gathering of stakeholders committed to diaspora development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-liberian-red mb-4">
                <Users className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Liberians in East Africa</h3>
              <p className="text-gray-600">Liberians residing across East Africa, representing diverse communities and backgrounds.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-liberian-red mb-4">
                <Award className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Government Representatives</h3>
              <p className="text-gray-600">Representatives of the Liberian Government, National Leaders, and the Diaspora Affairs Office.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-liberian-red mb-4">
                <Briefcase className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Diaspora Organizations</h3>
              <p className="text-gray-600">Including IMO and Civil Society Groups working for diaspora development.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-liberian-red mb-4">
                <Globe className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">East African Representatives</h3>
              <p className="text-gray-600">East African Government Representatives and regional stakeholders.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-liberian-red mb-4">
                <BookOpen className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Business Leaders</h3>
              <p className="text-gray-600">Business Leaders, Investors, and Development Partners from across the region.</p>
            </motion.div>
          </div>
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
