import axios from "axios";
import Notiflix from 'notiflix';
import { searchForm, gallery, target, itemPerPage} from "./variables";
// import { getRequest } from "./get_request";
import { createMarkup } from "./create_markup";

searchForm.addEventListener('submit', onSubmit);
function onSubmit(evt) {
  evt.preventDefault();
  const { searchQuery } = evt.currentTarget.elements
  const inputValue = searchQuery.value.trim();
  getRequest(inputValue)
  .then(({ hits, totalHits }) => {
    gallery.insertAdjacentHTML('beforeend', createMarkup(hits).join(''))
    // observer.observe(target);
  })
  .catch(err => console.log(err))

}
function getRequest(data, currentPage=1) {
  
  const searchParams = new URLSearchParams({
    key: '35530318-c832a4dcd48fc070f5c50cd79',
    q: data,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: itemPerPage,
  });

  return axios.get('https://pixabay.com/api/',{
    params: {
    q: data,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: itemPerPage,
    },
    headers: {
      'Content-Type': 'application-json',
      Au: '35530318-c832a4dcd48fc070f5c50cd79',
    }
  })
    .then(resp => {
      console.log(resp)
      // if (!resp.ok) {
      //   throw new Error(resp.statusText)
      // }
      // return resp
    })
}