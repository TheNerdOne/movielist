import axios from 'axios'
import { API_URL } from '../config/HTTP'
export const key = 'api_key=f62f750b70a8ef11dad44670cfb6aa57'
const Api = {

    init() {
        axios.defaults.baseURL = API_URL
    },

    query(resource, params) {
        return axios.get(`${resource}?${key}`, params)
    },

    get(resource) {
        return axios.get(`${resource}?${key}`)
    },

    post(resource, params) {
        return axios.post(`${resource}?${key}`, params)
    },
}

export default Api