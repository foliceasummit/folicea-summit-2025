// studio/schemaTypes/home.js
export default {
  name: 'home',
  title: 'Home Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string'
    },
    {
      name: 'heroSlides',
      title: 'Hero Slides',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Slide Image',
              type: 'image',
              options: {
                hotspot: true
              }
            },
            {
              name: 'alt',
              title: 'Alt Text',
              type: 'string'
            }
          ]
        }
      ]
    },
    {
      name: 'eventDate',
      title: 'Event Date',
      type: 'string'
    },
    {
      name: 'eventVenue',
      title: 'Event Venue',
      type: 'string'
    },
    {
      name: 'eventAttendees',
      title: 'Event Attendees',
      type: 'string'
    },
    {
      name: 'welcomeTitle',
      title: 'Welcome Section Title',
      type: 'string'
    },
    {
      name: 'welcomeText',
      title: 'Welcome Text',
      type: 'text'
    },
    {
      name: 'summitTheme',
      title: 'Summit Theme',
      type: 'string'
    },
    {
      name: 'themePoints',
      title: 'Theme Points',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Point Title',
              type: 'string'
            },
            {
              name: 'description',
              title: 'Point Description',
              type: 'string'
            }
          ]
        }
      ]
    },
    {
      name: 'features',
      title: 'Why Attend Features',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Feature Title',
              type: 'string'
            },
            {
              name: 'description',
              title: 'Feature Description',
              type: 'string'
            },
            {
              name: 'icon',
              title: 'Icon',
              type: 'string',
              options: {
                list: [
                  { title: 'Users', value: 'Users' },
                  { title: 'Star', value: 'Star' },
                  { title: 'Calendar', value: 'Calendar' },
                  { title: 'Map Pin', value: 'MapPin' },
                  { title: 'Trophy', value: 'Trophy' },
                  { title: 'Globe', value: 'Globe' }
                ],
                layout: 'radio'
              },
              validation: Rule => Rule.required()
            }
          ]
        }
      ]
    }
  ]
}
