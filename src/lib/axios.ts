import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://dtmoney-lake-five.vercel.app/transactions',
})
