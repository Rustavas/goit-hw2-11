import { getRequest } from "./get_request";
import { createMarkup } from "./create_markup";

const searchForm = document.getElementById('search-form');
const gallery = document.querySelector('.gallery');



searchForm.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  const { searchQuery } = evt.currentTarget.elements
  const inputValue = searchQuery.value.trim();

  getRequest(inputValue)
  .then(({ hits }) => {gallery.insertAdjacentHTML('beforeend', createMarkup(hits).join(''))})
  .catch(err => console.log(err))
  // .finally(() => inputValue = "");
}
