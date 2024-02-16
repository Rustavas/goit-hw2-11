import axios from "axios";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { searchForm, gallery, loadMoreBtn, target, itemPerPage } from "./variables";
import { getRequest } from "./get_request";
import { createMarkup } from "./create_markup";

searchForm.addEventListener('submit', onSubmit);

let options = {
  root: null,
  rootMargin: '300px',
  threshold: 1.0
}
let currentPage = 1;
let observer = new IntersectionObserver(onLoad, options);
function onLoad(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      currentPage += 1;
      const inputValue = searchForm.elements[0].value;
      getRequest(inputValue, currentPage)
        .then(({ hits, totalHits }) => {
          gallery.insertAdjacentHTML('beforeend', createMarkup(hits).join(''))
          if (currentPage === totalHits / itemPerPage) {
            observer.unobserve(target);
          }
          // console.log(currentPage)
        })
        .catch(err => console.log(err))
    }
  })

}

async function onSubmit(evt) {
  evt.preventDefault();
  const { searchQuery } = evt.currentTarget.elements
  const inputValue = searchQuery.value.trim();

  await getRequest(inputValue)
    .then(({ hits, totalHits }) => {
      if (hits.length === 0) {
        Notify.failure('Sorry, there are no images matching your search query. Please try again.');
        return
      };
      Notify.success(`'Hooray! We found ${totalHits} images.'`);
      gallery.insertAdjacentHTML('beforeend', createMarkup(hits).join(''))
      observer.observe(target);
    })
    .catch(err => {return Notify.failure('Sorry, there are no images matching your search query. Please try again.')} 
    )
  // .finally(() => inputValue = "");
}

