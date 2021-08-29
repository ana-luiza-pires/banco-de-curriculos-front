import axios from 'axios'

const getFromAPI = axios.create({baseURL: "http://localhost:3001/" })
export default getFromAPI