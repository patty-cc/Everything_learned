import React from 'react';

class MovieListing extends React.Component {

  render() {
    return (
      <div className="movies">
        <a href="#">{this.props.movie}</a>
      </div>
    )
  }
}

export default MovieListing;
