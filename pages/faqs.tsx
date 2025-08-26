import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQsPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is the FOLICEA Summit 2025?",
      answer: "The FOLICEA Summit 2025 is the premier gathering for the Liberian diaspora in East Africa. It's a four-day event focused on fostering unity, promoting professional networking, and driving community-led development initiatives."
    },
    {
      question: "When and where is the summit taking place?",
      answer: "The summit will be held from November 28 to December 1, 2025, at the Kampala Serena Hotel in Uganda."
    },
    {
      question: "Who can attend the FOLICEA Summit?",
      answer: "The summit is open to Liberians across East Africa and friends of Liberia. This includes professionals, entrepreneurs, community leaders, students, and anyone interested in supporting the Liberian diaspora community."
    },
    {
      question: "How do I register for the summit?",
      answer: "You can register online through our website. Click on the 'Register Now' button to access the registration form. Early registration is recommended as spaces are limited."
    },
    {
      question: "What is the registration fee?",
      answer: "Registration fees vary depending on your category (student, professional, sponsor, etc.). Please check the registration page for detailed pricing information."
    },
    {
      question: "How can I pay for my registration?",
      answer: "Payment can be made via MoMo to 0792109775 or using MoMo Code XYZ123. You can also pay through visa card or contact our WhatsApp numbers: 231 0776038583 / 0888533208."
    },
    {
      question: "What accommodation options are available?",
      answer: "The summit will be held at the Kampala Serena Hotel, which offers various accommodation options. Special rates have been negotiated for summit attendees. You can also choose to stay at nearby hotels."
    },
    {
      question: "Will meals be provided during the summit?",
      answer: "Yes, meals will be provided during the summit. The registration form includes dietary preference options to accommodate various dietary requirements."
    },
    {
      question: "What should I bring to the summit?",
      answer: "Please bring your registration confirmation, business cards for networking, comfortable clothing, and any specific materials mentioned in the pre-summit communications."
    },
    {
      question: "Is there a dress code for the summit?",
      answer: "Business casual attire is recommended for most sessions. There will be a formal dinner event where business formal attire is preferred."
    },
    {
      question: "Can I get a refund if I can't attend?",
      answer: "Refund policies vary depending on the timing of cancellation. Please contact our team at foliceasummit@gmail.com for specific refund information."
    },
    {
      question: "How can I become a sponsor or partner?",
      answer: "We offer various sponsorship opportunities. Please contact us through our website or email foliceasummit@gmail.com to discuss sponsorship options and benefits."
    },
    {
      question: "Will there be networking opportunities?",
      answer: "Yes, the summit includes dedicated networking sessions, social events, and opportunities to connect with professionals, entrepreneurs, and community leaders from across East Africa."
    },
    {
      question: "Is the venue accessible for people with disabilities?",
      answer: "Yes, the Kampala Serena Hotel is accessible. Please indicate any specific accessibility requirements during registration so we can ensure appropriate accommodations."
    },
    {
      question: "Can I present or speak at the summit?",
      answer: "We welcome proposals for presentations and workshops. Please contact us well in advance with your proposal details and we'll review it for inclusion in the program."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-liberian-blue to-liberian-red text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Find answers to common questions about the FOLICEA Summit 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <div
                  className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
                  onClick={() => toggleFaq(index)}
                >
                  <div className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200">
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    {openFaq === index ? (
                      <ChevronUp className="w-6 h-6 text-liberian-red flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-liberian-red flex-shrink-0" />
                    )}
                  </div>
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Still Have Questions?
              </h3>
              <p className="text-gray-600 mb-6">
                If you couldn't find the answer you're looking for, please don't hesitate to contact us directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:foliceasummit@gmail.com"
                  className="btn-primary"
                >
                  Email Us
                </a>
                <a
                  href="/contact"
                  className="btn-outline"
                >
                  Contact Form
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQsPage;
