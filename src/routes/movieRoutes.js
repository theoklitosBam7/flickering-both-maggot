import {
  addNewMovie,
  getMovies,
  getMovieWithID,
  updateMovie,
  deleteMovie,
} from '../controllers/movieController';

const routes = (app) => {
  app.route('/movie')
    .get((req, res, next) => {
      // middleware
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      next();
    }, getMovies)

    // POST endpoint
    .post((req, res, next) => {
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      next();
    }, addNewMovie);

  app.route('/movie/:movieId')
    // get specific movie
    .get(getMovieWithID)

    // put request
    .put(updateMovie)

    // delete request
    .delete(deleteMovie);
};

export default routes;
