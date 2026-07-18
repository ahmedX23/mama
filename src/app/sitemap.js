export default async function sitemap() {
  const baseUrl = 'https://shahriarnafis-misilahmed.com'; // Replace with your domain
  
  return [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
  ];
}
