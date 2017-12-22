import React from 'react';
import MovieShowingBox from './MovieShowingBox'

class MovieBox extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [{ id: 1, movie: "Sausage Party" },
            { id: 2, movie: "Cafe Society"},
            { id: 3, movie: "Morgan"},
            { id: 4, movie: "The 9th Lif of Louis Drax"},
            { id: 5, movie: "Naam Hai Akira"},
            { id: 6, movie: "Equity"},
            { id: 7, movie: "Things to Come"}]
    }
  }

  render() {
    return (
      <div className="movie-box">
        <MovieShowingBox data={this.state.data}/>
      </div>
    )
  }
}

export default MovieBox;
