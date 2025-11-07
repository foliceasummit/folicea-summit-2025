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
    name: 'Hon. Ernest Duku Jallah',
    title: 'President Federation of Liberian Youth (FLY)',
    image: 'https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Hon.%20Ernest%20Duku%20Jallah%20Special%20Guest%20and%20Panelist.jpg?updatedAt=1762524072169',
    featured: true,
    order: 3,
  },
  {
    name: 'Chairman Emmanuel Patrick',
    title: 'Chairman FOLICEA',
    image: 'https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Chairman%20Emmanuel%20Patrick.jpg?updatedAt=1757347430203',
    featured: true,
    order: 4,
  },
  {
    name: 'H.E. Distinguished Guest',
    title: 'Special Guest of Honor',
    image: 'https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Logo.png.jpg?updatedAt=1756227162403',
    featured: true,
    order: 5,
  },
  {
    name: 'Hon. Distinguished Guest',
    title: 'Special Guest of Honor',
    image: 'https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Logo.png.jpg?updatedAt=1756227162403',
    featured: true,
    order: 6,
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
  {
    name: 'Bryant Lessor Rogers',
    title: 'Founder and CEO of Rozeland Bar & Restaurant (Uganda) and the Founder and CEO of ROG Group of Companies Inc (Liberia)',
    image: 'https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/Bryant%20Lessor%20RogersFounder%20and%20CEO%20of%20Rozeland%20Bar%20&%20Restaurant%20(Uganda)%20and%20the%20Founder%20and%20CEO%20of%20ROG%20Group%20of%20Companies%20Inc%20(Liberia)..jpg?updatedAt=1762524072136',
    topics: ['Entrepreneurship'],
    featured: false,
    order: 10,
  },
  {
    name: 'Patrick F. Wee',
    title: 'Montserrado County Coordinator Federation of Liberian Youth (FLY)',
    image: 'https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/WhatsApp%20Image%202025-11-05%20at%2016.48.41_43ef9185.jpg?updatedAt=1762446345947',
    topics: ['Youth Leadership'],
    featured: false,
    order: 11,
  },
]

export default speakers