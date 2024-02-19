import axios, { formToJSON } from "axios";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from "simplelightbox";
import { searchForm, gallery, target, itemPerPage } from "./variables";
import { getRequest } from "./get_request";
import { createMarkup } from "./create_markup";
import { onError} from "./onError.js";
import { lightbox } from "./simplelightbox.js";
import "simplelightbox/dist/simple-lightbox.min.css";

searchForm.addEventListener('submit', onSubmit);

let options = {
  root: null,
  rootMargin: '300px',
  threshold: 1.0
}

let observer = new IntersectionObserver(onLoad, options);
let currentPage = 1;
function onLoad(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      currentPage += 1;
      const inputValue = searchForm.elements[0].value;
      getRequest(inputValue, currentPage)
        .then(({ hits, totalHits }) => {
          gallery.insertAdjacentHTML('beforeend', createMarkup(hits).join(''))
          lightbox.refresh()
          const { height: cardHeight } = document
            .querySelector(".gallery")
            .firstElementChild.getBoundingClientRect();

          window.scrollBy({
            top: cardHeight * 2,
            behavior: "smooth",
          });
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
      gallery.innerHTML = createMarkup(hits).join('');
      observer.observe(target);
     
    })
    .catch(onError)
    .finally(() => searchForm.reset());
}

