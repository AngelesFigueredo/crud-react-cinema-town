import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import EditMovieCardForm from './EditMovieCardForm';

function MovieCard({ movie, deleteMovie, id, getAllMovies }){
    const { title, personalRating, status, opinion, director } = movie
    return (
        <Card>
            <Card.Header as="h5">{title}</Card.Header>
            <Card.Body>
                <Card.Title>{`${status} - ${personalRating} - ${director}` }</Card.Title>
                <Card.Text>
                    {opinion}
                </Card.Text>
                <Button variant="danger" onClick={()=>{ deleteMovie(id)}}>
                    Eliminar
                </Button>
                {" "}
                <EditMovieCardForm movie={movie} id={id} getAllMovies={getAllMovies}/>
                
                
            </Card.Body>
        </Card>
    )
}

export default MovieCard
