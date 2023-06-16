import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function SaveMovie({ createMovie }) {
    const [show, setShow] = useState(false);
    const [data, setData] = useState({
        title: "",
        personalRating: "",
        status: "WATCHED",
        opinion: "",
        director: ""
    })

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        console.log(data)
        e.preventDefault()
        createMovie(data)
        handleClose()
    }


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="secondary" onClick={handleShow}>
                Añadir nueva película
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Añadir nueva película</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        Titulo
                        <input type="text" name="title" value={data.title} onChange={handleChange} />
                        Rating
                        <input type="text" name="personalRating" value={data.personalRating} onChange={handleChange} />
                        Status
                        <input type="select" name="status" value={data.status} onChange={handleChange} />
                        Opinión
                        <input type="text" name="opinion" value={data.opinion} onChange={handleChange} />
                        Director
                        <input type="text" name="director" value={data.director} onChange={handleChange} />
                        <Button variant="primary" onClick={handleSubmit}>
                            Añadir película
                        </Button>
                    </form>
                </Modal.Body>



            </Modal>

        </>
    );
}



export default SaveMovie

    // < form onSubmit = { handleSubmit } >
    //             <input type="text" name="title" value={data.title} onChange={handleChange} />
    //             <input type="text" name="personalRating" value={data.personalRating} onChange={handleChange} />
    //             <input type="select" name="status" value={data.status} onChange={handleChange} />
    //             <input type="text" name="opinion" value={data.opinion} onChange={handleChange} />
    //             <input type="text" name="director" value={data.director} onChange={handleChange} />
    //             <Dropdown.Item href="#/action-1">
    //                 <Button variant="secondary">Guardar Cambios</Button>
    //             </Dropdown.Item>
    //         </ >