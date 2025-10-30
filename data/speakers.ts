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
    name: 'Hon. MacMillan Vaye',
    title: 'National Chairman Emeritus, Liberian Community in Rwanda (LIBCOR)',
    image: 'https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Hon.%20MacMillan%20Vaye.jpg?updatedAt=1761596038108',
    featured: false,
    order: 1,
  },
  {
    name: 'Madam Grace Biah-Patrick',
    title: 'Gender & Climate Change Focal Point, UNFCCC – Environment Protection Agency',
    image: 'https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Madam%20Grace%20Biah-Patrick.jpg?updatedAt=1761596038136',
    featured: false,
    order: 2,
  },
  // Special Guests of Honor (Featured)
  {
    name: 'Emmanuel Patrick',
    title: 'Acting Chairperson, FOLICEA & Former Chairperson, LIBCOR',
    image: 'https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/emmanuel%20P.jpg?updatedAt=1756227156834',
    featured: true,
    order: 3,
  },
  {
    name: 'H.E. Distinguished Guest',
    title: 'Special Guest of Honor',
    image: 'https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Logo.png.jpg?updatedAt=1756227162403',
    featured: true,
    order: 4,
  },
  {
    name: 'Hon. Distinguished Guest',
    title: 'Special Guest of Honor',
    image: 'https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Logo.png.jpg?updatedAt=1756227162403',
    featured: true,
    order: 5,
  },

  // Summit Speakers (non-featured)
  {
    name: 'Speaker A',
    title: 'Panelist',
    image: 'https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Logo.png.jpg?updatedAt=1756227162403',
    topics: ['Panelist'],
    featured: false,
    order: 6,
  },
  {
    name: 'Speaker B',
    title: 'Panelist',
    image: 'https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Logo.png.jpg?updatedAt=1756227162403',
    topics: ['Panelist'],
    featured: false,
    order: 7,
  },
  {
    name: 'Speaker C',
    title: 'Panelist',
    image: 'https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Logo.png.jpg?updatedAt=1756227162403',
    topics: ['Panelist'],
    featured: false,
    order: 8,
  },
  {
    name: 'Speaker D',
    title: 'Panelist',
    image: 'https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Logo.png.jpg?updatedAt=1756227162403',
    topics: ['Panelist'],
    featured: false,
    order: 9,
  },
]

export default speakers