import sanityClient from '@sanity/client';
import imageURIBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
});

const builer = imageURIBuilder(client);

export const urlFor = (source) => builer.image(source);
// npx sanity manage
// npm run dev