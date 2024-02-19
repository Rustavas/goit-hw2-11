const lightbox = new SimpleLightbox('.gallery a', { 
  captions: true,
  captionDelay: 250,
  captionPosition: 'bottom',
  captionsData: 'alt', 
  spinner: true,
  overlay: true,
  overlayOpacity: 0.7
});

export { lightbox };