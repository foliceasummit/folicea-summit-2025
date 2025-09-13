import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'pitching',
  title: 'Pitching Competition',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({ name: 'theme', title: 'Theme', type: 'string' }),
    defineField({ name: 'objective', title: 'Objective', type: 'text' }),
    defineField({ name: 'whoCanPitch', title: 'Who Can Pitch', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'focusAreas', title: 'Focus Areas', type: 'array', of: [{
      type: 'object',
      fields: [
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'description', title: 'Description', type: 'text' },
      ],
    }] }),
    defineField({ name: 'gallery', title: 'Gallery', type: 'array', of: [{ type: 'image', options: { hotspot: true } }] }),
  ],
});