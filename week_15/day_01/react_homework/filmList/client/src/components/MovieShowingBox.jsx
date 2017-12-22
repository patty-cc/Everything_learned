import React from 'react';
import MovieListing from './MovieListing';
import MovieButton from './MovieButton';

class MovieShowingBox extends React.Component {

  render() {

    const filmNodes = this.props.data.map(function(film) {
      return (
        <MovieListing movie={film.movie} key={film.id}/>
      )
    })

    return (
      <div className="movie-showing-box">
        <h3 className="movie-heading">UK Opening This Week</h3>
        {filmNodes}
        <a className="link" href="#">See more opening this week</a>
        <div className="movie-button">
          <MovieButton />
        </div>
      </div>

    )
  }
}

export default MovieShowingBox;
