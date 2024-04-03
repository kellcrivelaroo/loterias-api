import { env } from '../env/index.js'
import axios from 'axios'

const apiUrl = env.API_URL

export const api = axios.create({
  baseURL: 'https://loteriascaixa-api.herokuapp.com/api/',
  headers: {
    'Accept-Encoding': 'gzip, deflate, br',
  }
})