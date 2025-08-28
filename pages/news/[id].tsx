'use client';

import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { Calendar, ArrowLeft, Share2, Clock } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const NewsStoryPage = () => {
  const params = useParams();
  const id = Array.isArray(params?.id) ? params.id[0] : params?.id;

  // News data with full content
  const newsData = {
    1: {
      title: "FOLICEA Summit 2025 Registration Now Open",
      date: "December 15, 2024",
      category: "Announcement",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      content: `
        <p>We are excited to announce that registration for the FOLICEA Summit 2025 is now officially open! This historic gathering will bring together Liberian communities from across East Africa for four days of meaningful dialogue, networking, and collaboration.</p>
        
        <h2>Early Bird Registration</h2>
        <p>Early bird registration is available until October 31, 2025, at a special rate of $100 USD. This includes:</p>
        <ul>
          <li>2 nights accommodation at Kampala Serena Hotel</li>
          <li>Breakfast and lunch for all four days</li>
          <li>Official FOLICEA Summit T-shirt and cap</li>
          <li>Summit materials and tote bag</li>
          <li>Tour of Uganda tourism sites</li>
          <li>Networking opportunities</li>
        </ul>
        
        <h2>Registration Process</h2>
        <p>To register for the summit:</p>
        <ol>
          <li>Visit our registration page at <a href="/registration" className="text-liberian-red hover:underline">folicea.vercel.app/registration</a></li>
          <li>Fill out the comprehensive registration form</li>
          <li>Upload your profile photo</li>
          <li>Complete payment via MoMo or other available methods</li>
          <li>Receive confirmation email with event details</li>
        </ol>
        
        <h2>Important Dates</h2>
        <ul>
          <li><strong>Early Bird Registration:</strong> Until October 31, 2025</li>
                      <li><strong>Regular Registration:</strong> November 1 - November 28, 2025</li>
            <li><strong>Late Registration:</strong> November 29 - December 4, 2025 (subject to availability)</li>
                          <li><strong>Summit Dates:</strong> December 5 - 7, 2025</li>
        </ul>
        
        <p>Don't miss this opportunity to be part of history! Register today and join us in Kampala for the most significant gathering of Liberian communities in East Africa.</p>
      `
    },
    2: {
      title: "Meet Our Distinguished Speakers",
      date: "December 10, 2024",
      category: "Speakers",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      content: `
        <p>We are proud to announce our lineup of distinguished speakers who will share their expertise and insights at the FOLICEA Summit 2025. These thought leaders represent the best of our community and will inspire meaningful discussions throughout the event.</p>
        
        <h2>Keynote Speakers</h2>
        
        <h3>Emmanuel Patrick - FOLICEA Chairman</h3>
        <p>Emmanuel Patrick, former chairperson of Liberians in Rwanda (LIBCOR) and current acting chairperson of FOLICEA, will deliver the opening keynote address. At the summit, Chairman Patrick will lead the federation to elections, marking a significant milestone in our organization's history.</p>
        
        <h3>Honorable Jeremiah Kpan Koung - Vice President of Liberia</h3>
        <p>We are honored to welcome His Excellency, the Vice President of Liberia, who will address the summit on the importance of diaspora engagement and the role of Liberian communities in East Africa.</p>
        
        <h2>Featured Speakers</h2>
        
        <h3>Community Leaders Panel</h3>
        <p>A distinguished panel of community leaders from Rwanda, Kenya, Tanzania, and Uganda will share their experiences and insights on building strong Liberian communities in East Africa.</p>
        
        <h3>Business and Entrepreneurship</h3>
        <p>Successful Liberian entrepreneurs and business leaders will share their journeys and provide guidance on business development and economic empowerment.</p>
        
        <h3>Education and Youth Development</h3>
        <p>Education experts and youth advocates will discuss the importance of education in community development and strategies for supporting young Liberians.</p>
        
        <h2>Workshop Leaders</h2>
        <p>In addition to keynote speeches, our speakers will lead interactive workshops on:</p>
        <ul>
          <li>Community Building and Leadership</li>
          <li>Business Development and Networking</li>
          <li>Cultural Preservation and Identity</li>
          <li>Youth Empowerment and Education</li>
          <li>Health and Wellness</li>
        </ul>
        
        <p>Stay tuned for more speaker announcements as we continue to build an exceptional program for the FOLICEA Summit 2025!</p>
      `
    },
    3: {
      title: "Partnership Announcement: African Union",
      date: "December 5, 2024",
      category: "Partnerships",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      content: `
        <p>We are thrilled to announce our partnership with the African Union for the FOLICEA Summit 2025. This collaboration represents a significant milestone in our mission to strengthen Liberian communities across East Africa and foster continental unity.</p>
        
        <h2>Partnership Details</h2>
        <p>The African Union has officially endorsed the FOLICEA Summit 2025 and will provide support in several key areas:</p>
        
        <ul>
          <li><strong>Policy Framework:</strong> The AU will share insights on diaspora engagement policies and best practices</li>
          <li><strong>Networking Opportunities:</strong> Access to AU's extensive network of African leaders and organizations</li>
          <li><strong>Resource Sharing:</strong> Technical support and resources for community development initiatives</li>
          <li><strong>Recognition:</strong> Official recognition of FOLICEA's contribution to African unity and development</li>
        </ul>
        
        <h2>Shared Vision</h2>
        <p>This partnership aligns with the African Union's Agenda 2063, which emphasizes the importance of diaspora engagement in Africa's development. FOLICEA's mission to unite Liberian communities in East Africa directly supports the AU's vision of a united, prosperous, and peaceful Africa.</p>
        
        <h2>Expected Outcomes</h2>
        <p>Through this partnership, we expect to:</p>
        <ul>
          <li>Strengthen ties between Liberian communities and their host countries</li>
          <li>Create opportunities for economic collaboration and trade</li>
          <li>Develop programs for youth empowerment and education</li>
          <li>Establish frameworks for cultural exchange and preservation</li>
          <li>Build sustainable community development initiatives</li>
        </ul>
        
        <h2>AU Representatives at the Summit</h2>
        <p>We are honored to announce that senior representatives from the African Union will attend the FOLICEA Summit 2025, including:</p>
        <ul>
          <li>Commissioner for Political Affairs, Peace and Security</li>
          <li>Director of Diaspora Division</li>
          <li>Representatives from the AU's Regional Economic Communities</li>
        </ul>
        
        <p>This partnership marks the beginning of a new era for FOLICEA and demonstrates the growing recognition of our role in fostering unity and development across Africa.</p>
      `
    },
    4: {
      title: "Summit Agenda Released",
      date: "November 30, 2024",
      category: "Agenda",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      content: `
        <p>The complete agenda for the FOLICEA Summit 2025 has been released! The four-day event will feature keynote speeches, workshops, networking sessions, and cultural celebrations that will create lasting impact for our community.</p>
        
                    <h2>Day 1 - December 5, 2025: Opening Ceremony & Welcome</h2>
        <h3>Morning Session (8:00 AM - 12:00 PM)</h3>
        <ul>
          <li>8:00 AM - Registration and Welcome Coffee</li>
          <li>9:00 AM - Opening Ceremony and Cultural Performance</li>
          <li>10:00 AM - Welcome Address by FOLICEA Chairman Emmanuel Patrick</li>
          <li>11:00 AM - Keynote Speech by Vice President of Liberia</li>
        </ul>
        
        <h3>Afternoon Session (2:00 PM - 6:00 PM)</h3>
        <ul>
          <li>2:00 PM - Panel Discussion: "Building Strong Liberian Communities"</li>
          <li>3:30 PM - Workshop: "Leadership Development"</li>
          <li>5:00 PM - Networking Reception</li>
        </ul>
        
                    <h2>Day 2 - December 6, 2025: Business & Entrepreneurship</h2>
        <h3>Morning Session (8:00 AM - 12:00 PM)</h3>
        <ul>
          <li>8:00 AM - Breakfast and Networking</li>
          <li>9:00 AM - Keynote: "Economic Empowerment Through Business"</li>
          <li>10:30 AM - Business Pitch Competition</li>
          <li>12:00 PM - Lunch and Business Networking</li>
        </ul>
        
        <h3>Afternoon Session (2:00 PM - 6:00 PM)</h3>
        <ul>
          <li>2:00 PM - Workshop: "Starting Your Business in East Africa"</li>
          <li>3:30 PM - Panel: "Success Stories from Liberian Entrepreneurs"</li>
          <li>5:00 PM - Business Matchmaking Session</li>
        </ul>
        
                    <h2>Day 3 - December 7, 2025: Education & Youth Development</h2>
        <h3>Morning Session (8:00 AM - 12:00 PM)</h3>
        <ul>
          <li>8:00 AM - Youth Leadership Breakfast</li>
          <li>9:00 AM - Keynote: "Investing in Our Youth"</li>
          <li>10:30 AM - Youth Panel Discussion</li>
          <li>12:00 PM - Educational Resources Fair</li>
        </ul>
        
        <h3>Afternoon Session (2:00 PM - 6:00 PM)</h3>
        <ul>
          <li>2:00 PM - Workshop: "Mentorship Programs"</li>
          <li>3:30 PM - Cultural Preservation Session</li>
          <li>5:00 PM - Talent Show and Cultural Performances</li>
        </ul>
        
                    <h2>Day 3 - December 7, 2025: Closing & Future Planning</h2>
        <h3>Morning Session (8:00 AM - 12:00 PM)</h3>
        <ul>
          <li>8:00 AM - FOLICEA Elections</li>
          <li>9:30 AM - Strategic Planning Session</li>
          <li>11:00 AM - Partnership Announcements</li>
        </ul>
        
        <h3>Afternoon Session (2:00 PM - 6:00 PM)</h3>
        <ul>
          <li>2:00 PM - Closing Ceremony</li>
          <li>3:30 PM - Awards and Recognition</li>
          <li>5:00 PM - Farewell Dinner and Cultural Celebration</li>
        </ul>
        
        <h2>Special Events</h2>
        <ul>
          <li><strong>Cultural Night:</strong> Traditional Liberian music, dance, and cuisine</li>
          <li><strong>Business Expo:</strong> Showcase of Liberian businesses and products</li>
          <li><strong>Youth Summit:</strong> Special sessions for young participants</li>
          <li><strong>Networking Sessions:</strong> Multiple opportunities for community building</li>
        </ul>
        
        <p>Registration is now open! Don't miss this historic opportunity to be part of the FOLICEA Summit 2025.</p>
      `
    },
    5: {
      title: "Sponsorship Opportunities Available",
      date: "November 25, 2024",
      category: "Sponsorship",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      content: `
        <p>We are offering various sponsorship packages for organizations interested in supporting the FOLICEA Summit 2025 and connecting with our vibrant community of Liberian professionals, entrepreneurs, and community leaders.</p>
        
        <h2>Platinum Sponsor - $10,000</h2>
        <ul>
          <li>Prominent logo placement on all summit materials</li>
          <li>Exclusive speaking opportunity during opening ceremony</li>
          <li>Dedicated exhibition booth</li>
          <li>10 complimentary summit registrations</li>
          <li>Recognition in all press releases and media coverage</li>
          <li>VIP access to all events and networking sessions</li>
          <li>Customized marketing materials featuring your brand</li>
        </ul>
        
        <h2>Gold Sponsor - $5,000</h2>
        <ul>
          <li>Logo placement on summit materials</li>
          <li>Speaking opportunity during business sessions</li>
          <li>Exhibition booth</li>
          <li>5 complimentary summit registrations</li>
          <li>Recognition in summit program</li>
          <li>Access to networking events</li>
        </ul>
        
        <h2>Silver Sponsor - $2,500</h2>
        <ul>
          <li>Logo placement on select materials</li>
          <li>Exhibition booth</li>
          <li>3 complimentary summit registrations</li>
          <li>Recognition in summit program</li>
        </ul>
        
        <h2>Bronze Sponsor - $1,000</h2>
        <ul>
          <li>Logo placement on website and materials</li>
          <li>2 complimentary summit registrations</li>
          <li>Recognition in summit program</li>
        </ul>
        
        <h2>In-Kind Sponsorship</h2>
        <p>We also welcome in-kind sponsorships including:</p>
        <ul>
          <li>Printing and promotional materials</li>
          <li>Audio-visual equipment and services</li>
          <li>Catering and refreshments</li>
          <li>Transportation services</li>
          <li>Accommodation for speakers</li>
          <li>Gifts and giveaways</li>
        </ul>
        
        <h2>Benefits of Sponsorship</h2>
        <ul>
          <li><strong>Brand Visibility:</strong> Reach our community of 500+ attendees</li>
          <li><strong>Networking:</strong> Connect with Liberian professionals and entrepreneurs</li>
          <li><strong>Corporate Social Responsibility:</strong> Support community development</li>
          <li><strong>Market Access:</strong> Tap into the growing Liberian diaspora market</li>
          <li><strong>Media Coverage:</strong> Benefit from extensive media coverage</li>
        </ul>
        
        <h2>Target Audience</h2>
        <p>Our summit attendees include:</p>
        <ul>
          <li>Liberian professionals and executives</li>
          <li>Entrepreneurs and business owners</li>
          <li>Community leaders and activists</li>
          <li>Youth leaders and students</li>
          <li>Government officials and diplomats</li>
          <li>NGO representatives and development partners</li>
        </ul>
        
        <p>For sponsorship inquiries, please contact us at <a href="mailto:foliceasummit@gmail.com" className="text-liberian-red hover:underline">foliceasummit@gmail.com</a> or call +250 792 109 775.</p>
      `
    },
    6: {
      title: "Venue Confirmed: Kampala Serena Hotel",
      date: "November 20, 2024",
      category: "Venue",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      content: `
        <p>We are pleased to confirm that the FOLICEA Summit 2025 will be held at the prestigious Kampala Serena Hotel in Uganda's capital city. This world-class venue will provide the perfect setting for our historic gathering.</p>
        
        <h2>About Kampala Serena Hotel</h2>
        <p>Kampala Serena Hotel is a 5-star luxury hotel located in the heart of Kampala, offering:</p>
        <ul>
          <li>State-of-the-art conference facilities</li>
          <li>Multiple meeting rooms and breakout spaces</li>
          <li>Professional audio-visual equipment</li>
          <li>High-speed internet connectivity</li>
          <li>Luxurious accommodation for delegates</li>
          <li>World-class dining options</li>
          <li>24/7 security and concierge services</li>
        </ul>
        
        <h2>Conference Facilities</h2>
        <p>Our summit will utilize the hotel's premier conference facilities:</p>
        <ul>
          <li><strong>Main Ballroom:</strong> Capacity for 500+ attendees for opening and closing ceremonies</li>
          <li><strong>Conference Rooms:</strong> Multiple breakout rooms for workshops and sessions</li>
          <li><strong>Exhibition Hall:</strong> Space for business expo and networking</li>
          <li><strong>Outdoor Areas:</strong> Beautiful gardens for networking and cultural events</li>
        </ul>
        
        <h2>Accommodation</h2>
        <p>Special room rates have been negotiated for summit attendees:</p>
        <ul>
          <li><strong>Single Room:</strong> $150 USD per night</li>
          <li><strong>Double Room:</strong> $180 USD per night</li>
          <li><strong>Suite:</strong> $300 USD per night</li>
        </ul>
        <p><em>Note: Shared rooms are included in the registration fee. Single and double rooms are additional.</em></p>
        
        <h2>Location and Accessibility</h2>
        <p>Kampala Serena Hotel is conveniently located:</p>
        <ul>
          <li><strong>Airport:</strong> 45 minutes from Entebbe International Airport</li>
          <li><strong>City Center:</strong> Walking distance to major attractions</li>
          <li><strong>Transportation:</strong> Easy access to public transport and taxi services</li>
          <li><strong>Security:</strong> Located in a safe, well-lit area with 24/7 security</li>
        </ul>
        
        <h2>Nearby Attractions</h2>
        <p>During your stay, explore Kampala's rich culture and history:</p>
        <ul>
          <li>Uganda National Museum</li>
          <li>Kasubi Tombs (UNESCO World Heritage Site)</li>
          <li>Owino Market for local crafts and souvenirs</li>
          <li>Lake Victoria waterfront</li>
          <li>Various restaurants and cultural venues</li>
        </ul>
        
        <h2>Transportation Services</h2>
        <p>The hotel provides:</p>
        <ul>
          <li>Airport shuttle services (additional cost)</li>
          <li>Local transportation arrangements</li>
          <li>Tour guide services for sightseeing</li>
          <li>Car rental services</li>
        </ul>
        
        <h2>Special Arrangements</h2>
        <p>We have arranged special services for summit attendees:</p>
        <ul>
          <li>Dedicated check-in desk for FOLICEA participants</li>
          <li>Special dietary accommodations</li>
          <li>Accessibility services for participants with disabilities</li>
          <li>24/7 support desk during the summit</li>
        </ul>
        
        <p>We look forward to welcoming you to Kampala Serena Hotel for the FOLICEA Summit 2025!</p>
      `
    }
  };

  const story = id ? (newsData as any)[id] : null;

  if (!story) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Story Not Found</h1>
          <p className="text-gray-600 mb-6">The news story you're looking for doesn't exist.</p>
          <Link href="/news" className="btn-primary">
            Back to News
          </Link>
        </div>
      </div>
    );
  }

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
            <Link href="/news" className="inline-flex items-center text-white hover:text-gray-200 mb-6 transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to News
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {story.title}
            </h1>
            <div className="flex items-center justify-center space-x-6 text-lg">
              <span className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                {story.date}
              </span>
              <span className="bg-white/20 px-3 py-1 rounded-full">
                {story.category}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-64 md:h-96">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 text-gray-500">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      5 min read
                    </span>
                  </div>
                  <button className="flex items-center text-liberian-red hover:text-liberian-blue transition-colors">
                    <Share2 className="w-5 h-5 mr-2" />
                    Share
                  </button>
                </div>
                
                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: story.content }}
                />
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <Link href="/news" className="inline-flex items-center text-liberian-red hover:text-liberian-blue font-semibold transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to All News
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NewsStoryPage;
