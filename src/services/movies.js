import api from './api';

export const moviesDataProvider = {
    getAllMovies(){
        return api.get('/discover/movie')
    }
} 