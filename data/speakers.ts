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
  {
    name: 'H.E.',
    title: 'Guest of Honor',
    image: 'https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Logo.png.jpg?updatedAt=1756227162403',
    featured: true,
    order: 1,
  },
  {
    name: 'Hon. TBD',
    title: 'Distinguished Speaker',
    image: 'https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Logo.png.jpg?updatedAt=1756227162403',
    featured: true,
    order: 2,
  },
  {
    name: 'Emmanuel Patrick',
    title: 'Acting Chairperson, FOLICEA & Former Chairperson, LIBCOR',
    image: 'https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/emmanuel%20P.jpg?updatedAt=1756227156834',
    featured: false,
    order: 3,
  },
]

export default speakers