function createMarkup(arr) {
  return arr.map(({ webformatURL, largeImageURL, tags, likes, comments, downloads, views }) =>
    `<div class="photo-card">
      
        <img src="${webformatURL}" alt="tags" loading="lazy" class="image"/>
     
      <div class="info">
        <p class="info-item">
          <b>Likes: <br /><span class="info-numbers">${likes}</span></b>
        </p>
        <p class="info-item">
          <b>Views: <br /><span class="info-numbers">${views}</span></b>
        </p>
        <p class="info-item">
          <b>Comments: <br /><span class="info-numbers">${comments}</span></b>
        </p>
        <p class="info-item">
          <b>Downloads: <br /><span class="info-numbers">${downloads}</span></b>
        </p>
      </div>
    </div>
  `);
}

export { createMarkup };