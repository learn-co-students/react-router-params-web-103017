import React from 'react';
import {connect} from 'react-redux'

const MovieShow = props =>
  <div>
    <h3>{props.movie.title}</h3>
  </div>;

const mapStateToProps = (state, ownProps) => {
    console.log("in map state", state.movies[0].id == ownProps.match.params.movieId);
    const movie = state.movies.find(movie => movie.id == ownProps.match.params.movieId)
    if (movie) {
      return { movie }
    } else {
      return {movie: {}}
    }
}


export default connect(mapStateToProps)(MovieShow);
