import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'agenda',
  title: 'Agenda',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string' }),
    defineField({
      name: 'days',
      title: 'Days',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'date', title: 'Date', type: 'date' },
          { name: 'items', title: 'Items', type: 'array', of: [{
            type: 'object',
            fields: [
              { name: 'time', title: 'Time', type: 'string' },
              { name: 'title', title: 'Title', type: 'string' },
              { name: 'speaker', title: 'Speaker', type: 'string' },
              { name: 'description', title: 'Description', type: 'text' },
            ]
          }]}]
      }]
    })
  ],
});