import axios from 'axios';
import api from './api';
import {key} from './api';

export const moviesDataProvider = {
    getAllMovies(params = {}) {
        return api.query('/discover/movie', { params })
    },
    getMovieDetail(params = {}) {
        return axios.get(`/movie/${params}?${key}`)
    },
    getMovieCredits(params = {}) {
        return axios.get(`/movie/${params}/credits?${key}`)
    }
} 