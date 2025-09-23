// Local partners data - edit this file to update partners
export interface Partner {
  name: string
  url?: string
  logo?: string
  order?: number
}

const partners: Partner[] = [
  { name: 'Liberian Community in Rwanda (LIBCOR)', logo: 'https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/libcor%20logo.jpg?updatedAt=1757333453787', url: '#' },
  { name: 'Association of Liberians in Uganda', logo: 'https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/uganda%20logo.jpg?updatedAt=1757333453230', url: '#' },
  { name: 'Liberian Community in Kenya', logo: 'https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/kenya%20logo.jpg?updatedAt=1757333451766', url: '#' },
  { name: 'Liberian Community in Tanzania', logo: 'https://ik.imagekit.io/foliceasummit/FOLICEA%20SUMMIT/tan%20logo.jpg?updatedAt=1757333452646', url: '#' },
]

export default partners