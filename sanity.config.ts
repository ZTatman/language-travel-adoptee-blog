import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? '';
const testingDataset = process.env.NEXT_PRIVATE_SANITY_DATASET ?? '';

export default defineConfig({
  basePath: "/studio",
  name: "Language_Travel_Adoptee_Studio",
  title: "Language Travel Adoptee Studio",
  projectId,
  dataset: dataset,
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
