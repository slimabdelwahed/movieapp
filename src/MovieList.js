import React, { useState, useEffect } from 'react';
import AddMovie from './AddMovie';
import { moviesdata } from './MovieData';
import MovieCard from './MovieCard';

function MovieList() {
  const [movies, setMovies] = useState(moviesdata);
  const [filteredMovies, setFilteredMovies] = useState(moviesdata);
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: "",
  });
  const [showAddMovieForm, setShowAddMovieForm] = useState(false);
  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState('');

  // Update filteredMovies whenever movies or filter criteria change
  useEffect(() => {
    handleFilter(filterTitle, filterRating);
  }, [movies, filterTitle, filterRating]);

  const handleFilter = (title = '', rating = '') => {
    console.log('Filtering with title:', title);
    console.log('Filtering with rating:', rating);

    const filtered = movies.filter((movie) =>
      (title ? movie.title.toLowerCase().includes(title.toLowerCase()) : true) &&
      (rating ? movie.rating >= parseFloat(rating) : true)
    );

    console.log('Filtered movies:', filtered);
    setFilteredMovies(filtered);
  };
const toggle = () => {
    setShowAddMovieForm((prev) => !prev);
  };

  const handleTitleChange = (e) => {
    const value = e.target.value;
    console.log('Title input changed:', value);
    setFilterTitle(value);
  };

  const handleRatingChange = (e) => {
    const value = e.target.value;
    console.log('Rating input changed:', value);
    setFilterRating(value);
  };

  return (
    <div>
      <button onClick={toggle}>
        {showAddMovieForm ? 'Cancel' : 'Add Movie'}
      </button>
      {showAddMovieForm && (
        <AddMovie
          newMovie={newMovie}
          setNewMovie={setNewMovie}
          setMovies={setMovies}
          onClose={toggle}
        />
      )}
      <div>
        <h2>Filter Movies</h2>
        <label>
          Title:
          <input
            type="text"
            value={filterTitle}
            onChange={handleTitleChange}
          />
        </label>
        <br />
        <label>
          Minimum Rating:
          <input
            type="number"
            value={filterRating}
            onChange={handleRatingChange}
          />
        </label>
      </div>
      {filteredMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;