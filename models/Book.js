
const mongoose=require("mongoose");

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Book title is required. "],
        trim: true
},

    author: {
        type: String,
        required: true,
        trim: true
},

category: {
        type: String,
        required: true,
        trim: true },

availability: {
        type: Boolean,
        default: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Book =  mongoose.model("Book", bookSchema);
module.exports = Book;





