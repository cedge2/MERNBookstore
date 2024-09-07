
import mongoose from 'mongoose';

const bookSchema = mongoose.Schema(
    {
        title: {
            type: String,
            requires: true,
        },
        author: {
            type: String,
            requires: true,
        },
        publishYear: {
            type: Number,
            requires: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Book = mongoose.model('Book', bookSchema);