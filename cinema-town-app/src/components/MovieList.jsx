import  Row  from "react-bootstrap/Row"
import MovieCard from "./MovieCard"
import { Col } from "react-bootstrap"

function MovieList({ movies, deleteMovie, getAllMovies }){
    return (
    <Row>
        {
            !movies.length ? "No tienes películas disponibles":

            <>{movies.map((movie) => 
                <Col xs={6} md={4} key={movie._id}>
                    <MovieCard movie={movie} deleteMovie={deleteMovie} getAllMovies={getAllMovies}id={movie._id}/>
                </Col> )
            }</>
        }
    </Row>
        )

}

export default MovieList