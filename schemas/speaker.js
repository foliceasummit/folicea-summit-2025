// studio/schemaTypes/speaker.js
export default {
  name: 'speaker',
  title: 'Speakers',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'title',
      title: 'Title/Position',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'bio',
      title: 'Biography',
      type: 'text'
    },
    {
      name: 'topics',
      title: 'Speaking Topics',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'social',
      title: 'Social Media',
      type: 'object',
      fields: [
        { name: 'linkedin', title: 'LinkedIn URL', type: 'url' },
        { name: 'twitter', title: 'Twitter URL', type: 'url' }
      ]
    },
    {
      name: 'featured',
      title: 'Featured Speaker',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 999
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'title',
      media: 'image'
    }
  }
}
