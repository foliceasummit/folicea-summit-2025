import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Meta tags */}
        {/* Browser UI colors with fallbacks */}
        {/* Base color for browsers that don't support media-based theme-color */}
        <meta name="theme-color" content="#BF0A30" />
        {/* Override for dark mode in supporting browsers (Chromium, Safari) */}
        <meta"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "studio:dev": "cd studio && sanity dev",
  "studio:build": "cd studio && sanity build",
  "studio:deploy": "cd studio && sanity deploy"
}
export default {
  name: 'home',
  title: 'Home Page',
  type: 'document',
  fields: [
    {
      name: 'title',export default {
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
export default {
  name: 'news',
  title: 'News',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'date',
      title: 'Publication Date',
      type: 'date',
      options: {
        dateFormat: 'MMMM D, YYYY'
      }
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Announcement', value: 'Announcement' },
          { title: 'Press Release', value: 'Press Release' },
          { title: 'Partnerships', value: 'Partnerships' },
          { title: 'Agenda', value: 'Agenda' },
          { title: 'Sponsorship', value: 'Sponsorship' }
        ]
      }
    },
    {
      name: 'featured',
      title: 'Featured Article',
      type: 'boolean',
      initialValue: false
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' }
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Numbered', value: 'number' }
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' }
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL'
                  },
                  {
                    name: 'blank',
                    type: 'boolean',
                    title: 'Open in new tab',
                    initialValue: true
                  }
                ]
              }
            ]
          }
        },
        {
          type: 'image',
          options: { hotspot: true }
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'image'
    }
  }
}
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
export default {
  name: 'contact',
  title: 'Contact Page',
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
      name: 'email',
      title: 'Email Address',
      type: 'string'
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string'
    },
    {
      name: 'address',
      title: 'Address',
      type: 'text'
    },
    {
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        { name: 'facebook', title: 'Facebook URL', type: 'url' },
        { name: 'twitter', title: 'Twitter URL', type: 'url' },
        { name: 'instagram', title: 'Instagram URL', type: 'url' },
        { name: 'linkedin', title: 'LinkedIn URL', type: 'url' }
      ]
    },
    {
      name: 'mapLocation',
      title: 'Map Location',
      type: 'object',
      fields: [
        { name: 'latitude', title: 'Latitude', type: 'number' },
        { name: 'longitude', title: 'Longitude', type: 'number' }
      ]
    }
  ]
}
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
// studio/schemas/schema.js
import home from './home'
import about from './about'
import agenda from './agenda'
import speaker from './speaker'
import news from './news'
import pitchCompetition from './pitchCompetition'
import contact from './contact'
import registration from './registration'

export const schemaTypes = [
  home,
  about,
  agenda,
  speaker,
  news,
  pitchCompetition,
  contact,
  registration
]

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
              title: 'Icon Name',
              type: 'string',
              description: 'Name of the Lucide icon (e.g., "Users", "Star", "Calendar")'
            }
          ]
        }
      ]
    }
  ]
}
 name="theme-color" content="#8A0722" media="(prefers-color-scheme: dark)" />
        {/* Page supports both color schemes (improves controls on Firefox/Safari) */}
        <meta name="color-scheme" content="light dark" />
        {/* iOS Safari */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        {/* Windows tiles (legacy but harmless) */}
        <meta name="msapplication-TileColor" content="#BF0A30" />
        <meta name="description" content="FOLICEA Summit 2025 - Federation of Liberian Communities in East Africa" />
        <meta name="keywords" content="FOLICEA, Liberian, Summit, East Africa, Uganda, Kampala" />
        <meta name="author" content="FOLICEA Summit 2025" />
        
        {/* Open Graph */}
        <meta property="og:title" content="FOLICEA Summit 2025" />
        <meta property="og:description" content="Federation of Liberian Communities in East Africa Summit" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://folicea.vercel.app" />
        <meta property="og:image" content="https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Logo.png.jpg?updatedAt=1756227162403" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FOLICEA Summit 2025" />
        <meta name="twitter:description" content="Federation of Liberian Communities in East Africa Summit" />
        <meta name="twitter:image" content="https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Logo.png.jpg?updatedAt=1756227162403" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
