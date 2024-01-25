const URL_API = 'https://pixabay.com/api/';
const KEY_API = '35530318-c832a4dcd48fc070f5c50cd79';

const searchForm = document.getElementById('search-form');


searchForm.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  const { searchQuery } = evt.currentTarget.elements
  const inputValue = searchQuery.value.trim();

  async function getRequest(inputValue) {
    const resp = await fetch(`${URL_API}/?key=${KEY_API}`, {
      q: inputValue,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true'
      }) if (!resp.ok) {
          throw new Error()
        }
    return resp.json()
  }






  // const q = inputValue;
  // const image_type = 'photo';
  // const orientation = 'horizontal';
  // const safesearch = 'true'
// }


