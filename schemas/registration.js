// studio/schemaTypes/registration.js
export default {
  name: 'registration',
  title: 'Registration Page',
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
      name: 'registrationOptions',
      title: 'Registration Options',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Option Name',
              type: 'string',
              description: 'E.g., "Early Bird", "Standard", "VIP"'
            },
            {
              name: 'price',
              title: 'Price',
              type: 'string'
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text'
            },
            {
              name: 'features',
              title: 'Features',
              type: 'array',
              of: [{ type: 'string' }]
            },
            {
              name: 'available',
              title: 'Available',
              type: 'boolean',
              initialValue: true
            }
          ]
        }
      ]
    },
    {
      name: 'registrationDeadline',
      title: 'Registration Deadline',
      type: 'date'
    },
    {
      name: 'registrationFormUrl',
      title: 'External Registration Form URL',
      type: 'url',
      description: 'If using an external form service'
    },
    {
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'question',
              title: 'Question',
              type: 'string'
            },
            {
              name: 'answer',
              title: 'Answer',
              type: 'text'
            }
          ]
        }
      ]
    }
  ]
}
