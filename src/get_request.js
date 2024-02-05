function getRequest(data) {
  const BASE_URL = 'https://pixabay.com/api/';
  // const API_KEY = '35530318-c832a4dcd48fc070f5c50cd79';
  // const q = 'inputValue';
  // const image_type = 'photo';
  // const orientation = 'horizontal';
  // const safesearch = 'true';
  const searchParams = new URLSearchParams({
    key: '35530318-c832a4dcd48fc070f5c50cd79',
    q: data,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: '40',
    page: '1'
  });

  // return fetch(`${BASE_URL}?key=${API_KEY}&q=${data}&image_type=${image_type}&orientation=${orientation}&safesearch=${safesearch}`)
  return fetch(`${BASE_URL}?${searchParams}`)
    .then(resp => {
      if (!resp.ok) {
        throw new Error(resp.statusText)
      }
      return resp.json()
    })
}

export {getRequest};