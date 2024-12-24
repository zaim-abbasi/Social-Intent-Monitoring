// Image optimization utility
export const optimizeImage = (url, { width, quality = 75, format = 'webp' } = {}) => {
  // Check if URL is from an image CDN or needs transformation
  if (url.includes('images.unsplash.com')) {
    const params = new URLSearchParams();
    if (width) params.append('w', width);
    params.append('q', quality);
    params.append('fm', format);
    params.append('auto', 'format');
    
    return `${url}?${params.toString()}`;
  }
  
  return url;
};

// Responsive image srcset generator
export const generateSrcSet = (url, sizes = [320, 640, 768, 1024, 1280]) => {
  return sizes
    .map(size => `${optimizeImage(url, { width: size })} ${size}w`)
    .join(', ');
};

// Lazy loading image component props generator
export const getLazyImageProps = (url, alt, sizes = '100vw') => ({
  src: optimizeImage(url),
  srcSet: generateSrcSet(url),
  sizes,
  loading: 'lazy',
  decoding: 'async',
  alt
});