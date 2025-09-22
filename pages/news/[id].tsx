import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowRight } from 'lucide-react';
import { getDocuments, getDocumentBySlug, urlFor } from '../../lib/sanity.client';

type NewsItem = {
  _id: string;
  title: string;
  excerpt: string;
  image?: any;
  date?: string;
  category?: string;
  featured?: boolean;
  slug?: { current: string };
  content?: any; // Portable Text blocks
};

type Props = {
  item: NewsItem | null;
};

function getImageSrc(image: any, w = 1600, h = 900): string {
  if (!image) return '/favicon.svg';
  if (typeof image === 'string') return image;
  try {
    return urlFor(image).width(w).height(h).url();
  } catch {
    return '/favicon.svg';
  }
}

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
            {item.date && <span>{item.date}</span>}
            {item.category && (
              <>
                <span className="mx-2">•</span>
                <span className="font-medium">{item.category}</span>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="relative w-full h-72 md:h-[28rem]">
              <Image src={getImageSrc(item.image)} alt={item.title} fill className="object-cover" />
            </div>
            <div className="p-6 md:p-10 prose max-w-none">
              {item.excerpt && (
                <p className="text-lg text-gray-700 mb-6">{item.excerpt}</p>
              )}
              {/* If you later add @portabletext/react, render item.content here */}
              {!item.content && (
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

export const getStaticPaths: GetStaticPaths = async () => {
  // Fetch all news to get slugs
  const allNews = await getDocuments('news');
  const paths = (Array.isArray(allNews) ? allNews : [])
    .filter((n: any) => n?.slug?.current)
    .map((n: any) => ({ params: { id: n.slug.current } }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const slug = context.params?.id as string;
  const item = slug ? await getDocumentBySlug('news', slug) : null;

  if (!item) return { notFound: true, revalidate: 60 };

  return {
    props: { item },
    revalidate: 60,
  };
};