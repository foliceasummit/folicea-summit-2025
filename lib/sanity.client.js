// lib/sanity.js
import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

const config = {
  projectId: 'nfzfdjch', // Your Sanity project ID from sanity.config.js
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: process.env.NODE_ENV === 'production'
}

export const sanityClient = createClient(config)

// Helper function for generating image URLs
const builder = imageUrlBuilder(sanityClient)
export const urlFor = (source) => builder.image(source)

// Helper to get all documents of a specific type
export async function getDocuments(type) {
  return await sanityClient.fetch(`*[_type == "${type}"]`)
}

// Helper to get a single document of a specific type
export async function getSingleDocument(type) {
  return await sanityClient.fetch(`*[_type == "${type}"][0]`)
}

// Helper to get a document by slug
export async function getDocumentBySlug(type, slug) {
  return await sanityClient.fetch(
    `*[_type == "${type}" && slug.current == $slug][0]`,
    { slug }
  )
}
