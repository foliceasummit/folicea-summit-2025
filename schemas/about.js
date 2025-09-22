// studio/schemaTypes/about.js
export default {
  name: 'about',
  title: 'About Page',
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
      name: 'sections',
      title: 'Content Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Section Title',
              type: 'string'
            },
            {
              name: 'content',
              title: 'Section Content',
              type: 'array',
              of: [
                {
                  type: 'block',
                  styles: [
                    { title: 'Normal', value: 'normal' },
                    { title: 'H3', value: 'h3' },
                    { title: 'H4', value: 'h4' }
                  ],
                  lists: [
                    { title: 'Bullet', value: 'bullet' },
                    { title: 'Numbered', value: 'number' }
                  ]
                },
                {
                  type: 'image',
                  options: { hotspot: true }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'teamMembers',
      title: 'Team Members',
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
              name: 'role',
              title: 'Role',
              type: 'string'
            },
            {
              name: 'image',
              title: 'Photo',
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
