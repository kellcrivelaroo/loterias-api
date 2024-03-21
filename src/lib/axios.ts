import { env } from '../env/index.js'
import axios from 'axios'
import https from 'https'

const apiUrl = env.API_URL

const agent = new https.Agent({
  rejectUnauthorized: false,
})

export const api = axios.create({
  baseURL: apiUrl,
  withCredentials: false,
  httpsAgent: agent
})