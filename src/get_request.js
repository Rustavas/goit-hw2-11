import axios from "axios"
import { itemPerPage } from "./variables"

async function getRequest(data, currentPage = 1) {
  const BASE_URL = 'https://pixabay.com/api/';

  const searchParams = new URLSearchParams({
    key: '35530318-c832a4dcd48fc070f5c50cd79',
    q: data,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: itemPerPage,
  });

  const resp = await axios.get(`${BASE_URL}?${searchParams}&page=${currentPage}`)
  return resp.data;
}

export { getRequest };