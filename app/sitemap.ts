import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://militech.app',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://militech.app/#about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://militech.app/#services',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
     {
      url: 'https://militech.app/#industries',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
     {
      url: 'https://militech.app/#products',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
     {
      url: 'https://militech.app/#stories',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
     {
      url: 'https://militech.app/#contact',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ]
}