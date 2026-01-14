export const useImage = () => {
  const getUnsplashUrl = (src: string, width = 1200, height?: number) => {
    if (!src) return ''

    // If it's already a full non-unsplash URL, return it
    if (src.startsWith('http') && !src.includes('unsplash.com')) {
      return src
    }

    // Extract the ID if it's a full Unsplash URL or a path
    let id = src
    if (src.includes('unsplash.com')) {
      // Handle both /photo-ID and ?id=ID formats
      const photoMatch = src.match(/photo-([^?&/]+)/)
      if (photoMatch) {
        id = photoMatch[1]
      }
    }

    // Base Unsplash URL
    const baseUrl = `https://images.unsplash.com/photo-${id}`
    
    // Add parameters
    const params = new URLSearchParams({
      auto: 'format',
      fit: 'crop',
      w: width.toString(),
      q: '80'
    })

    if (height) {
      params.append('h', height.toString())
    }

    return `${baseUrl}?${params.toString()}`
  }

  return {
    getUnsplashUrl
  }
}
