// studio/schemaTypes/partner.js
export default {
  name: 'partner',
  title: 'Partners',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Partner Name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'url',
      title: 'Website URL',
      type: 'url',
      description: 'Link to the partner\'s website',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which to display partners (lower numbers first)',
      initialValue: 10,
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'logo',
    },
  },
};
