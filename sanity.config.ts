import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schema } from './sanity/schemaTypes'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'mock-project-id'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export default defineConfig({
  basePath: '/admin/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool(),
    visionTool({ defaultApiVersion: '2024-01-01' }),
  ],
})
