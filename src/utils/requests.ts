import axios from 'axios'

// DEV
// const getFromAPI = axios.create({baseURL: "http://localhost:3333/" })

// PROD
const getFromAPI = axios.create({baseURL: "https://banco-de-curriculos-back.herokuapp.com/" })
export default getFromAPI