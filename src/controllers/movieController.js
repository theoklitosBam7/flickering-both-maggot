import mongoose from 'mongoose';
import MovieSchema from '../models/movieModel';

const Movie = mongoose.model('Movie', MovieSchema);

export const addNewMovie = (req, res) => {
  const newMovie = new Movie(req.body);

  newMovie.save((err, movie) => {
    if (err) {
      return res.send(err);
    }
    return res.json(movie);
  });
};

export const getMovies = (req, res) => {
  Movie.find({}, (err, movie) => {
    if (err) {
      return res.send(err);
    }
    return res.json(movie);
  });
};

export const getMovieWithID = (req, res) => {
  Movie.findById(req.params.movieId, (err, movie) => {
    if (err) {
      return res.send(err);
    }
    return res.json(movie);
  });
};

export const updateMovie = (req, res) => {
  Movie.findOneAndUpdate({ _id: req.params.movieId }, req.body, { new: true }, (err, movie) => {
    if (err) {
      return res.send(err);
    }
    return res.json(movie);
  });
};

export const deleteMovie = (req, res) => {
  Movie.remove({ _id: req.params.movieId }, (err) => {
    if (err) {
      return res.send(err);
    }
    return res.json({ message: 'Successfully deleted movie' });
  });
};
