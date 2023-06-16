import { Container } from "react-bootstrap";
import MovieList from "../components/MovieList";
import moviesService from "../services/movies.service";
import { useEffect, useState } from "react";
import SaveMovie from "../components/SaveMovie";



function HomePage() {
    const [movies, setMovies] = useState([])

    useEffect(()=>{
        getAllMovies()
    }, [])

    const getAllMovies = async()=>{
        try {
            const allMovies = await moviesService.getAll() 
            setMovies(allMovies.data)     
        } catch (error) {
            console.log(error)
        }
    }

    const deleteMovie = async (id) => {
        try {
            await moviesService.delete(id)
            getAllMovies()
        } catch (error) {
            console.log(error)
        }
    }
    

    const createMovie = async (data) => {
        try {
            await moviesService.create(data)
            getAllMovies()
        } catch (error) {
            console.log(error)
        }
    }


    return (     
        <Container>
            <article>
                <h1>Cinema Town</h1>
                <p>Guarda tus opiniones de las películas que has visto</p>
                <SaveMovie createMovie={createMovie}/>


                <MovieList movies={movies} deleteMovie={deleteMovie} getAllMovies={getAllMovies}/>
                
            </article>
        </Container>
    )
}

export default HomePage;