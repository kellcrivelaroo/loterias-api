import { env } from '../env/index.js'
import axios from 'axios'

const apiUrl = env.API_URL


export const api = axios.create({
  baseURL: apiUrl,
  headers: {
    'Accept-Encoding': 'gzip, deflate, br',
  }
})