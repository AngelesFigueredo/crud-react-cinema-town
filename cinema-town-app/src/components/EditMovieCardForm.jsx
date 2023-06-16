import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import moviesService from '../services/movies.service';



function EditMovieCardForm({ id, movie, getAllMovies }) {
    const { title, personalRating, status, opinion, director } = movie
    const [data, setData] = useState({
        title, personalRating, status, opinion, director
    })

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        moviesService.edit(id, data)
        e.preventDefault()
        getAllMovies()
    }
    return (
        <DropdownButton id="dropdown-basic-button" title="Editar" variant="secondary">
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" value={data.title} onChange={handleChange} />
                <input type="text" name="personalRating" value={data.personalRating} onChange={handleChange} />
                <input type="select" name="status" value={data.status} onChange={handleChange} />
                <input type="text" name="opinion" value={data.opinion} onChange={handleChange} />
                <input type="text" name="director" value={data.director} onChange={handleChange} />
                <Dropdown.Item href="#/action-1">
                    <button variant="secondary">Guardar Cambios</button>
                </Dropdown.Item>
            </form>
        </DropdownButton>
    )
}

export default EditMovieCardForm