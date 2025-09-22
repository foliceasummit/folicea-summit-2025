import { motion } from 'framer-motion';
import Image from 'next/image';
import type { GetStaticProps } from 'next';
import { getDocuments, urlFor } from '../lib/sanity.client';

export type Partner = {
  _id: string;
  name: string;
  logo?: any; // Sanity image or URL string
  url?: string;
  order?: number;
};

interface Props {
  partners: Partner[];
}

function getImageSrc(image: any, w = 400, h = 200): string {
  if (!image) return '/favicon.svg';
  if (typeof image === 'string') return image;
  try {
    return urlFor(image).width(w).height(h).url();
  } catch {
    return '/favicon.svg';
  }
}

const PartnersPage = ({ partners }: Props) => {
  const partnersSorted = [...(partners || [])].sort((a, b) => {
    const oa = typeof a.order === 'number' ? a.order : Number.MAX_SAFE_INTEGER;
    const ob = typeof b.order === 'number' ? b.order : Number.MAX_SAFE_INTEGER;
    if (oa !== ob) return oa - ob;
    return (a.name || '').localeCompare(b.name || '');
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-r from-liberian-blue to-liberian-red text-white">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Partners & Sponsors
          </motion.h1>
          <p className="text-xl max-w-3xl mx-auto">
            We are grateful for the organizations supporting the FOLICEA Summit 2025.
          </p>
        </div>
      </section>

      {/* Partners grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {partnersSorted.map((p, index) => (
              <motion.a
                key={p._id}
                href={p.url || '#'}
                target={p.url ? '_blank' : undefined}
                rel={p.url ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center justify-center p-4 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="relative w-32 h-16">
                  <Image src={getImageSrc(p.logo, 400, 200)} alt={p.name} fill className="object-contain" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Become a Partner</h2>
            <p className="text-lg text-gray-600 mb-6">Interested in partnering with us? Get in touch to explore collaboration opportunities.</p>
            <a href="/contact" className="inline-flex items-center rounded-lg bg-liberian-red text-white px-6 py-3 font-semibold shadow hover:bg-liberian-blue transition-colors">
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const partners = await getDocuments('partner');
  return {
    props: {
      partners: Array.isArray(partners) ? partners : [],
    },
    revalidate: 60,
  };
};

export default PartnersPage;