const router = require("express").Router()
const Movie = require("../models/Movie.model.js")



// Get Movie

router.get("/", async(req, res, next)=>{
    try {
        const movies = await Movie.find()
        return res.status(200).json(movies)
    } catch (error) {
        next(error)
    }
})

router.get("/:_id", async(req, res, next)=>{
    try {
        const {_id} = req.params
        const movie = await Movie.findById(_id)
        return res.status(200).json(movie)
    } catch (error) {
        next(error)
    }
})

// Create Movie

router.post("/", async(req,res,next)=>{
    try {
        if (req.body.title){
            const newMovie = await Movie.create(req.body)
            return res.status(201).json(newMovie)
        }
        return res.status(400).json({ message: "Bad request, the movie title is needed" })
    } catch (error) {
        next(error)
    }
})

// Delete a movie

router.delete("/:_id", async(req,res,next)=>{
    try {
        const {_id} = req.params
        await Movie.findByIdAndDelete(_id)
        return res.status(200).json({ message: `The movie with ID: ${_id}has been deleted` });
    } catch (error) {
        next(error);
    }
})

// Edit a movie

router.put("/:_id", async(req,res,next)=>{
    try {
        const { _id } = req.params;
        const editedMovie = await Movie.findByIdAndUpdate(_id, req.body, { new: true });
        return res.status(200).json(editedMovie);
    } catch (error) {
        next(error);
    }
})
module.exports = router