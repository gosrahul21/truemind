import { type SchemaTypeDefinition } from 'sanity'

import post from './post'
import callout from './callout'
import youtube from './youtube'
import faq from './faq'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, callout, youtube, faq],
}
