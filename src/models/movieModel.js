import mongoose from 'mongoose';

const DBSchema = mongoose.Schema;

const MovieSchema = new DBSchema({
  movieID: {
    type: Number,
  },
  avatar: {
    type: String,
  },
  name: {
    type: String,
    required: 'Enter the name of movie',
  },
  description: {
    type: String,
  },
  director: {
    type: String,
  },
  rating: {
    type: Number,
  },
  dateRelease: {
    type: Date,
  },
});

export default MovieSchema;
