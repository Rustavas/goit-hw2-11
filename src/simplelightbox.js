const lightbox = new SimpleLightbox('.gallery a', { 
  captions: true,
  captionDelay: 250,
  captionPosition: 'bottom',
  captionsData: 'alt', 
});

export { lightbox };