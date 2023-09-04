import { createClient } from 'newt-client-js'
import fetchAdapter from '@vespaiach/axios-fetch-adapter'

export interface Article {
  title: string
  slug: string
  body: string
}

export const newtClient = createClient({
  spaceUid: import.meta.env.NEWT_SPACE_UID,
  token: import.meta.env.NEWT_CDN_API_TOKEN,
  apiType: 'cdn',
  adapter: fetchAdapter,
})
