import { env } from '../env/index.js'
import https from 'https'
import axios from 'axios'

const apiUrl = env.API_URL

const httpsAgent = new https.Agent({
  rejectUnauthorized: false
 });

export const api = axios.create({
  baseURL: apiUrl,
  httpsAgent,
  headers: {
    'Accept-Encoding': 'gzip, deflate, br',
  }
})