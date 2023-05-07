import { defineCliConfig } from "sanity/cli";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "";
const testingDataset = process.env.NEXT_PRIVATE_SANITY_DATASET ?? "";

export default defineCliConfig({
  api: {
    projectId,
    dataset: dataset,
  },
});
