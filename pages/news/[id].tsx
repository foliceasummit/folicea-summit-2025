import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';
import { newsItems } from '../../data/newsData';

type NewsItem = {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  featured?: boolean;
  content?: string;
};

type Props = {
  item: NewsItem;
};

export default function NewsDetailPage({ item }: Props) {
  if (!item) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero/banner */}
      <section className="relative py-16 bg-gradient-to-r from-liberian-blue to-liberian-red text-white">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold">{item.title}</h1>
          <div className="mt-3 flex items-center text-white/90">
            <Calendar className="w-4 h-4 mr-2" />
            <span>{item.date}</span>
            <span className="mx-2">•</span>
            <span className="font-medium">{item.category}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="relative w-full h-72 md:h-[28rem]">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-6 md:p-10 prose max-w-none">
              {item.excerpt && (
                <p className="text-lg text-gray-700 mb-6">{item.excerpt}</p>
              )}
              {item.content ? (
                <div
                  className="prose prose-lg"
                  // Content comes from trusted source file
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
              ) : (
                <p className="text-gray-600">Full story coming soon.</p>
              )}
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/news"
              className="inline-flex items-center text-liberian-red hover:text-liberian-blue font-semibold"
            >
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" /> Back to News
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// Map numeric IDs from the restored listing to current string IDs
const numericToStringId: Record<string, string> = {
  "1": "registration-open-kampala-2025",
  "2": "csc-leadership-w-praise-bloyuefloh",
  "3": "partnership-four-liberian-communities",
  "4": "summit-agenda-released",
  "5": "sponsorship-opportunities",
  // "6": "venue-confirmed" // No matching item in data; leaving unmapped
};

export const getStaticPaths: GetStaticPaths = async () => {
  const stringPaths = newsItems.map((n) => ({ params: { id: n.id } }));
  const numericPaths = Object.keys(numericToStringId).map((id) => ({ params: { id } }));
  return {
    paths: [...stringPaths, ...numericPaths],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const rawId = context.params?.id as string;
  const resolvedId = /^\d+$/.test(rawId) ? numericToStringId[rawId] : rawId;
  const item = resolvedId ? newsItems.find((n) => n.id === resolvedId) || null : null;

  if (!item) {
    return { notFound: true };
  }

  return {
    props: { item },
  };
};