// Aggregates all schema types for Sanity Studio
// We import schema definitions from the root-level /schemas directory
// and expose a schemaTypes array that Studio consumes.

import home from '../../schemas/home'
import speaker from '../../schemas/speaker'
import partner from '../../schemas/partner'
import about from '../../schemas/about'
import agenda from '../../schemas/agenda'
import contact from '../../schemas/contact'
import news from '../../schemas/news'
import pitchCompetition from '../../schemas/pitchCompetition'
import registration from '../../schemas/registration'

export const schemaTypes = [
  home,
  speaker,
  partner,
  about,
  agenda,
  contact,
  news,
  pitchCompetition,
  registration,
]
