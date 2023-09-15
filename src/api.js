import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/';
const key = '?key=18198238-415cec3f9ecdd7367e0980e97';
const itemsPerPage = 15;

export const fetchImages = async (string, page) =>{
   const response = await axios.get(`${key}&q=${string}&page=${page}&per_page=${itemsPerPage}`);
   return response.data;
}