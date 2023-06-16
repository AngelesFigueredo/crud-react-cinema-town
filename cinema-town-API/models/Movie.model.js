const {Schema, model} = require("mongoose")

const movieSchema = new Schema(
    {
        title:{
            type:String, 
            required: true
        },
        personalRating:{
            type: String
        }, 
        status: {
            type:String, 
            enum: ["WATCHED", "WISHLIST", "WATCHING"]
        }, 
        opinion: String, 
        director: String
    },
   { timestamps: true}
)

const Movie = model("Movie", movieSchema)

module.exports = Movie