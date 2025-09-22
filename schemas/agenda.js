// studio/schemaTypes/agenda.js
export default {
  name: 'agenda',
  title: 'Agenda',
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
      name: 'days',
      title: 'Days',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'date',
              title: 'Date',
              type: 'date',
              options: {
                dateFormat: 'MMMM D, YYYY'
              }
            },
            {
              name: 'dayTitle',
              title: 'Day Title',
              type: 'string',
              description: 'E.g., "Day 1: Opening Ceremony"'
            },
            {
              name: 'sessions',
              title: 'Sessions',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'time',
                      title: 'Time',
                      type: 'string',
                      description: 'E.g., "9:00 AM - 10:30 AM"'
                    },
                    {
                      name: 'title',
                      title: 'Session Title',
                      type: 'string'
                    },
                    {
                      name: 'description',
                      title: 'Description',
                      type: 'text'
                    },
                    {
                      name: 'speakers',
                      title: 'Speakers',
                      type: 'array',
                      of: [
                        {
                          type: 'reference',
                          to: [{ type: 'speaker' }]
                        }
                      ]
                    },
                    {
                      name: 'location',
                      title: 'Location',
                      type: 'string'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
