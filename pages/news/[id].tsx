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
      title: "Registration Open for FOLICEA Summit 2025 in Kampala",
      date: "September 8, 2025",
      category: "Announcement",
      image: "https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Register.png?updatedAt=1758364222052",
      content: `
        <p>The Federation of Liberian Communities in East Africa (FOLICEA) is pleased to announce that registration is officially open for the Liberians in East Africa Summit 2025, scheduled for <strong>November 28 - 30, 2025</strong> in <strong>Kampala, Uganda</strong>.</p>
        <p>This landmark gathering will bring together change-makers, entrepreneurs, students, professionals, and expatriates for three days of networking, dialogue, and action.</p>
        <p>“This is more than just a meeting; it’s a historic opportunity for Liberians in East Africa to unite and shape our collective future,” said the FOLICEA Central Summit Committee.</p>
        <ul>
          <li><strong>Dates:</strong> November 28 - 30, 2025</li>
          <li><strong>Location:</strong> Kampala, Uganda</li>
          <li><strong>Register Now:</strong> <a href="/registration" class="text-liberian-red hover:underline">https://folicea.org/registration</a></li>
        </ul>
        <p>Don’t miss this chance to connect, collaborate, and lead change across East Africa.</p>
        <p>#FOLICEASummit2025 #FutureLeaders #LiberiansinEastAfrica #EastAfrica #Kampala</p>
      `
    },
    2: {
      title: "Mr. W. Praise Bloyuefloh to Lead Central Summit Committee",
      date: "September 6, 2025",
      category: "Press Release",
      image: "https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Praise.jpg?updatedAt=1757336183209",
      content: `
        <p><strong>FOR IMMEDIATE RELEASE</strong><br/>
        <strong>By FOLICEA Media & Publicity Team</strong><br/>
        <strong>Kampala, Uganda – September 6, 2025</strong></p>

        <h2>Mr. W. PRAISE BLOYUEFLOH TO LEAD CENTRAL SUMMIT COMMITTEE FOR FOLICEA 2025 INAUGURAL SUMMIT IN KAMPALA</h2>

        <p>The Federation of Liberian Communities in East Africa (FOLICEA) has announced the appointment of Mr. W. Praise Bloyuefloh as Chairperson of the Central Summit Committee for the historic FOLICEA Summit 2025, scheduled to be held from November 28–30, 2025, in Kampala, Uganda.</p>

        <p>The appointment was made by the Acting Chairperson Mr. Emmanuel Patrick of FOLICEA, signaling a significant step in mobilizing Liberians across East Africa for what promises to be a landmark gathering of unity, culture, leadership, and development.</p>

        <h3>Central Role in Driving the Summit</h3>
        <p>As Chairperson, Mr. Bloyuefloh will provide strategic leadership and oversight of the entire organizing structure. Working alongside the Vice Chairperson, Secretary General, and other executives, his mandate is to ensure that the inaugural summit becomes a catalyst for solidarity, networking, and sustainable development among Liberians in East Africa.</p>

        <p><strong>The Central Summit Committee includes:</strong><br/>
        Mr. W. Praise Bloyuefloh – Chairperson<br/>
        Mr. Alexander N. Gandah – Vice Chairperson<br/>
        Mr. Sir-Lichfield J. Remmie – Secretary General<br/>
        Mr. Daynuah M. Teah, Jr. – Deputy Secretary<br/>
        Mr. Samuel Erskine – Finance Director<br/>
        Miss Curlyn Dabieh – Treasurer</p>

        <h3>Subcommittees Appointed</h3>
        <p>Supporting the Central Committee, five subcommittees will handle critical operational areas of the summit:</p>
        <ul>
          <li><strong>Program & Protocol:</strong> Mr. Gerald G. Nikerson – Chair</li>
          <li><strong>Finance & Fundraising:</strong> Mr. Lennox Kollie – Chair</li>
          <li><strong>Logistics & Accommodation:</strong> Mr. Newton Trokon Gbessagee – Chair</li>
          <li><strong>Publicity & Media:</strong> Mr. J. Marvelous Gilayeneh – Chair</li>
          <li><strong>Cultural & Entertainment:</strong> Ms. Gertrude M. Duo & Mr. Thomas Yorwatei – Co-Chairs</li>
        </ul>
        <p>These teams are tasked with ensuring an impactful and seamless experience for all delegates.</p>

        <h3>Advisory Support</h3>
        <p>To provide further guidance, several community leaders have been named as ex-officio advisors:</p>
        <ul>
          <li><strong>Chairman Marcus Weah</strong> – Acting 1st Vice Chairperson for Administration</li>
          <li><strong>Chairman Cream Milton Ellis</strong> – Acting 2nd Vice Chairperson for International Affairs</li>
          <li><strong>Chairman Emmanuel Brown</strong> – Chairperson, Association of Liberians in Uganda</li>
          <li><strong>Chairman James Edgar Denia</strong> – Chairperson, Liberian Community in Rwanda (LIBCOR)</li>
        </ul>

        <h3>A Movement of Unity and Empowerment</h3>
        <p>Speaking on the appointments, Isaac M. Supu, Acting Secretary of FOLICEA, praised the leadership of Mr. Bloyuefloh and the committee:</p>
        <blockquote>
          “The success of this summit rests on the shoulders of committed individuals who believe in our shared vision. With Mr. Bloyuefloh at the helm, we are confident of delivering a world-class event that amplifies our voices, unites our people, and lays a foundation for lasting change.”
        </blockquote>

        <p><strong>The summit will:</strong></p>
        <ul>
          <li>Strengthen solidarity among Liberians in East Africa</li>
          <li>Foster professional and business networking</li>
          <li>Promote community-led development initiatives</li>
          <li>Celebrate Liberian identity and resilience</li>
          <li>Conduct democratic elections to choose leaders who will steer FOLICEA for the next two years</li>
        </ul>

        <h3>Join the Movement</h3>
        <p>All Liberians in East Africa—professionals, entrepreneurs, students, artists, elders, youth, and community leaders—are invited to participate in this historic event.</p>

        <p>📍 <strong>Kampala, Uganda</strong><br/>
        📅 <strong>November 28–30, 2025</strong></p>

        <p><strong>Stay updated via:</strong><br/>
        #FOLICEASummit2025 | #UniteLiberians | #LiberianDiaspora | #EastAfrica | #LiberianPride | #CommunityPower | #WeAreOne | #Kampala2025</p>

        <p><strong>FOLICEA – United in Purpose, Stronger in Solidarity</strong><br/>
        Federation of Liberian Communities in East Africa<br/>
        📞 +250 7921 349 853 | ✉️ foliceasummit@gmail.com</p>
      `
    },
    3: {
      title: "Partnership of Four Liberian Communities for FOLICEA Summit 2025",
      date: "May 24, 2025",
      category: "Partnerships",
      image: "https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/IMG-20250826-WA0040.jpg?updatedAt=1756227157808",
      content: `
        <p>The journey to the FOLICEA Summit 2025 has taken an important step forward with the united partnership of four Liberian communities in East Africa: The Liberian Community in Rwanda, Liberian Community in Kenya, Association of Liberians in Uganda, and the Liberian Community in Tanzania.</p>

        <p>This collaboration marks a historic moment as the communities come together with one voice to prepare for the Summit, which seeks to strengthen diaspora bonds, foster unity, and promote sustainable development.</p>

        <h2>Focus Areas of the Partnership</h2>
        <ul>
          <li><strong>Unity & Solidarity</strong> – Strengthening ties among Liberians across East Africa.</li>
          <li><strong>Networking & Growth</strong> – Creating opportunities for professional, social, and economic collaboration.</li>
          <li><strong>Youth & Education</strong> – Developing initiatives to empower the next generation.</li>
          <li><strong>Culture & Development</strong> – Preserving Liberian heritage while building pathways for community advancement.</li>
        </ul>

        <p>Speaking on behalf of the partnership, leaders of the communities emphasized that this joint effort reflects a shared commitment to building a stronger and more united Liberian presence in East Africa.</p>

        <p>The upcoming FOLICEA Summit 2025 will serve as a platform to showcase this unity and to lay the groundwork for long-term collaboration, cultural exchange, and community-driven development.</p>

        <p>This partnership is more than preparation for the Summit—it is a new era of cooperation among Liberians across Rwanda, Kenya, Uganda, and Tanzania.</p>

        <p><strong>👉 Stay tuned for updates and registration details as we count down to the FOLICEA Summit 2025.</strong></p>
      `
    },
    4: {
      title: "Summit Agenda Released",
      date: "September 15, 2025",
      category: "Agenda",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      content: `
        <p>The complete agenda for the FOLICEA Summit 2025 has been released! The three-day event will feature keynote speeches, workshops, networking sessions, and cultural celebrations that will create lasting impact for our community.</p>
        
                    <h2>Day 1 - November 28, 2025: Opening Ceremony & Welcome</h2>
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
        
                    <h2>Day 2 - November 29, 2025: Business & Entrepreneurship</h2>
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
        
                    <h2>Day 3 - November 30, 2025: Education & Youth Development</h2>
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
        
                    <h2>Day 3 - November 30, 2025: Closing & Future Planning</h2>
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
      date: "September 2, 2025",
      category: "Sponsorship",
      image: "https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/sponsorship-concept.jpg?updatedAt=1757364693139",
      content: `
        <h2>Sponsorship Opportunities</h2>
        <p>We are offering various sponsorship packages for organizations interested in supporting the FOLICEA Summit 2025 and connecting with our vibrant community of Liberian professionals, entrepreneurs, and community leaders.</p>
        <p>We will also promote our sponsors by advertising them across all our media platforms, social channels, and by featuring their logos prominently on the Summit website.</p>
        
        <h2>Platinum Sponsor</h2>
        <ul>
          <li>Prominent logo placement on all summit materials</li>
          <li>Exclusive speaking opportunity during the opening ceremony</li>
          <li>Dedicated exhibition booth</li>
          <li>Recognition in all press releases and media coverage</li>
          <li>VIP access to all events and networking sessions</li>
          <li>Customized marketing materials featuring your brand</li>
        </ul>
        
        <h2>Gold Sponsor</h2>
        <ul>
          <li>Logo placement on summit materials</li>
          <li>Speaking opportunity during business sessions</li>
          <li>Exhibition booth</li>
          <li>Recognition in summit program</li>
          <li>Access to networking events</li>
        </ul>
        
        <h2>Silver Sponsor</h2>
        <ul>
          <li>Logo placement on select materials</li>
          <li>Exhibition booth</li>
          <li>Recognition in summit program</li>
        </ul>
        
        <h2>Bronze Sponsor</h2>
        <ul>
          <li>Logo placement on website and materials</li>
          <li>Recognition in summit program</li>
        </ul>
        
        <h2>Innovation Sponsor – Pitching Competition</h2>
        <p>Be the proud Official Sponsor of the FOLICEA Summit 2025 Pitching Competition, under the theme:</p>
        <p><strong>"Clean Monrovia, Green Future: Resolving the Waste Management Crisis."</strong></p>
        <p>Your sponsorship will empower young entrepreneurs with innovative solutions to address Liberia's waste management crisis.</p>
        
        <h3>Your Contribution Provides:</h3>
        <ul>
          <li>Startup capital for the winning team to launch and scale their idea</li>
          <li>Mentorship and follow-up support for participants</li>
        </ul>
        
        <h3>Benefits:</h3>
        <ul>
          <li>Recognition as the Innovation Sponsor in all Pitching Competition materials and media coverage</li>
          <li>Prominent branding during the competition session and award ceremony</li>
          <li>Opportunity to present the award to the winning team on stage</li>
          <li>Complimentary summit registrations for your representatives</li>
          <li>Feature on the summit website and social media platforms</li>
        </ul>
        
        <h2>In-Kind Sponsorship</h2>
        <p>We also welcome in-kind contributions such as:</p>
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
          <li><strong>Media Coverage:</strong> Benefit from extensive local and international media outreach</li>
        </ul>
        
        <h2>Our Audience</h2>
        <p>The FOLICEA Summit brings together:</p>
        <ul>
          <li>Liberian professionals and executives</li>
          <li>Entrepreneurs and business owners</li>
          <li>Community leaders and activists</li>
          <li>Youth leaders and students</li>
          <li>Government officials and diplomats</li>
          <li>NGO representatives and development partners</li>
        </ul>
        
        <p>📩 For sponsorship inquiries, please contact us at <a href="mailto:foliceasummit@gmail.com" className="text-liberian-red hover:underline">foliceasummit@gmail.com</a> or call +250 792 109 775.</p>
      `
    },
    6: {
      title: "FOLICEA Establishes National Liaison Committee in Liberia",
      date: "September 20, 2025",
      category: "Press Release",
      image: "https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/AiRo.jpg?updatedAt=1758375163854",
      content: `
        <p><strong>Office of the Acting Secretary</strong><br/>
        <strong>Ref:</strong> NLC/PR/02/folicea/25<br/>
        <strong>For Immediate Release</strong></p>

        <h2>FOLICEA Establishes National Liaison Committee in Liberia</h2>
        <p><em>Kigali, Rwanda – September 20, 2025</em></p>
        <p>The Federation of Liberia Communities in East Africa (FOLICEA) is pleased to announce the formal establishment of its National Liaison Committee in Liberia. This initiative represents a key step in strengthening collaboration between Liberian communities in East Africa and national stakeholders at home.</p>
        <p>The National Liaison Committee will serve as the official coordinating body in Liberia, facilitating communication, partnership, and program implementation on behalf of FOLICEA.</p>

        <h3>Committee Leadership</h3>
        <ul>
          <li><strong>Ms. Alronica Minor</strong> – Lead Focal Person</li>
          <li><strong>Ms. Majah K. Barweh</strong> – Assistant Focal Person</li>
        </ul>

        <p>Additional committee members will be announced in due course, and will include representatives from various sectors to ensure inclusive and effective coordination.</p>
        <p>The establishment of this Committee reflects FOLICEA’s ongoing commitment to fostering unity, development, and meaningful engagement between the Liberian diaspora in East Africa and the homeland.</p>

        <p><strong>Mr. Isaac M. Supu</strong><br/>
        Acting Secretary General</p>
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
