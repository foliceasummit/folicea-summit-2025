// Local speakers data - edit this file to update speakers
export interface Speaker {
  name: string
  title?: string
  image?: string
  bio?: string
  topics?: string[]
  social?: { linkedin?: string; twitter?: string }
  featured?: boolean
  order?: number
}

const speakers: Speaker[] = [
  // Special Guests of Honor (Featured)
  {
    name: 'Emmanuel Patrick',
    title: 'Acting Chairperson, FOLICEA & Former Chairperson, LIBCOR',
    image: 'https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/emmanuel%20P.jpg?updatedAt=1756227156834',
    featured: true,
    order: 1,
  },
  {
    name: 'H.E. Distinguished Guest',
    title: 'Special Guest of Honor',
    image: 'https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Logo.png.jpg?updatedAt=1756227162403',
    featured: true,
    order: 2,
  },
  {
    name: 'Hon. Distinguished Guest',
    title: 'Special Guest of Honor',
    image: 'https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Logo.png.jpg?updatedAt=1756227162403',
    featured: true,
    order: 3,
  },

  // Summit Speakers (non-featured)
  {
    name: 'Speaker A',
    title: 'Panelist',
    image: 'https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Logo.png.jpg?updatedAt=1756227162403',
    topics: ['Panelist'],
    featured: false,
    order: 4,
  },
  {
    name: 'Speaker B',
    title: 'Panelist',
    image: 'https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Logo.png.jpg?updatedAt=1756227162403',
    topics: ['Panelist'],
    featured: false,
    order: 5,
  },
  {
    name: 'Speaker C',
    title: 'Panelist',
    image: 'https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Logo.png.jpg?updatedAt=1756227162403',
    topics: ['Panelist'],
    featured: false,
    order: 6,
  },
  {
    name: 'Speaker D',
    title: 'Panelist',
    image: 'https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Logo.png.jpg?updatedAt=1756227162403',
    topics: ['Panelist'],
    featured: false,
    order: 7,
  },
  {
    name: 'Speaker E',
    title: 'Panelist',
    image: 'https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Logo.png.jpg?updatedAt=1756227162403',
    topics: ['Panelist'],
    featured: false,
    order: 8,
  },
  {
    name: 'Speaker F',
    title: 'Panelist',
    image: 'https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Logo.png.jpg?updatedAt=1756227162403',
    topics: ['Panelist'],
    featured: false,
    order: 9,
  },
]

export default speakers