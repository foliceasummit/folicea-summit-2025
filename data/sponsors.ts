// Local sponsors data - edit this file to update sponsors without Sanity
export interface Sponsor {
  name: string
  url?: string
  logo?: string // optional URL to a logo image
  tier?: 'platinum' | 'gold' | 'silver' | 'bronze'
  order?: number
}

const sponsors: Sponsor[] = [
  { name: 'Sponsor 1', url: '#' },
  { name: 'Sponsor 2', url: '#' },
  { name: 'Sponsor 3', url: '#' },
  { name: 'Sponsor 4', url: '#' },
  { name: 'Sponsor 5', url: '#' },
  { name: 'Sponsor 6', url: '#' },
]

export default sponsors