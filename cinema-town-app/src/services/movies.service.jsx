import axios from 'axios'

class MoviesService {
    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/movies`
        })
        
    }

    create(data) {
        return this.api.post("/", data);
    }

    edit(id, data) {
        return this.api.put(`/${id}`, data);
    }

    delete(id) {
        return this.api.delete(`/${id}`);
    }

    getAll() {
        return this.api.get(`/`);
    }

    getOne(id) {
        return this.api.get(`/${id}`);
    }

}

const moviesService = new MoviesService()

export default moviesService;