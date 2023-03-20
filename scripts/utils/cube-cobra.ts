export const apiURL = 'https://cubecobra.com/cube/api'

export interface CubeCobraCard {
  cmc: number
  colorCategory: string
  finish: string
  index: unknown | null
  isUnlimited: boolean
  rarity: unknown
  status: 'Owned' | string
  tags: string[]
  type_line: string
  colors: string[]
  _id: string
  cardID: string
  addedTmsp: string
}

export interface CubeCobraCube {
  _id: string
  isListed: boolean
  privatePrices: boolean
  isFeatured: boolean
  decks: string[]
  default_sorts: unknown
  cards: CubeCobraCard[]
  tag_colors: unknown[]
  shortID: string
  name: string
  owner: string
  image: {
    uri: string
    artist: string
    id: string
    imageName: string
  }
  description: string
  owner_name: string
  date_updated: string
  updated_string: string
  type: string
  card_count: number
  numDecks: number
  descriptionhtml: unknown
  users_following: string[]
  categoryOverride: string
  categoryPrefixes: unknown[]
  draft_formats: unknown[]
  maybe: CubeCobraCard[]
  tags: string[]
  overrideCategory: boolean
  defaultPrinting: string
  defaultStatus: string
  defaultDraftFormat: number
  disableNotifications: boolean
  basics: string[]
  useCubeElo: boolean
  schemaVersion: number
  cardOracles: string[]
  categories: string[]
  keywords: string[]
  isPrivate: boolean
}

export async function fetchCube(cubeID: string): Promise<CubeCobraCube> {
  const url = `${apiURL}/cubeJSON/${cubeID}`

  const response = await fetch(url)

  return await response.json()
}

const cubeLinkPattern = /cubecobra.com\/.*\/(?<cubeID>[a-zA-Z0-9-_]+?)($|\?)/i
const cubeIDPattern = /^[a-zA-Z0-9-_]+$/

export const cubeIDFromLink = (cubeLink: null | string): string | null => {
  const trimmedLink = cubeLink?.trim()

  if (trimmedLink == null || trimmedLink.length === 0) {
    return null
  }

  if (trimmedLink.match(cubeIDPattern)) {
    return trimmedLink
  }

  return trimmedLink.match(cubeLinkPattern)?.groups?.cubeID ?? null
}
