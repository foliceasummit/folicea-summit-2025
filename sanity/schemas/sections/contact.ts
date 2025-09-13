import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'contact',
  title: 'Contact',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'intro', title: 'Intro', type: 'text' }),
    defineField({ name: 'email', title: 'Email', type: 'string' }),
    defineField({ name: 'phone', title: 'Phone', type: 'string' }),
    defineField({ name: 'whatsapp', title: 'WhatsApp', type: 'string' }),
    defineField({ name: 'venue', title: 'Venue Name', type: 'string' }),
    defineField({ name: 'venueCity', title: 'Venue City', type: 'string' }),
    defineField({ name: 'venueNote', title: 'Venue Note', type: 'string' }),
    defineField({ name: 'faqs', title: 'FAQs', type: 'array', of: [{ type: 'reference', to: [{ type: 'faq' }] }] }),
  ],
});
}