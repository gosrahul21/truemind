import { type SchemaTypeDefinition } from 'sanity'

import post from './post'
import callout from './callout'
import youtube from './youtube'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, callout, youtube],
}
