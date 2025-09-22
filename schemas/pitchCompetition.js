// studio/schemaTypes/pitchCompetition.js
export default {
  name: 'pitchCompetition',
  title: 'Pitch Competition',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string'
    },
    {
      name: 'intro',
      title: 'Introduction',
      type: 'text'
    },
    {
      name: 'details',
      title: 'Competition Details',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      name: 'rules',
      title: 'Rules & Guidelines',
      type: 'array',
      of: [{ type: 'block' }]
    },
    {
      name: 'prizes',
      title: 'Prizes',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'place',
              title: 'Place',
              type: 'string',
              description: 'E.g., "1st Place", "2nd Place"'
            },
            {
              name: 'prize',
              title: 'Prize',
              type: 'string'
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text'
            }
          ]
        }
      ]
    },
    {
      name: 'judges',
      title: 'Judges',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string'
            },
            {
              name: 'title',
              title: 'Title',
              type: 'string'
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true }
            },
            {
              name: 'bio',
              title: 'Bio',
              type: 'text'
            }
          ]
        }
      ]
    }
  ]
}
