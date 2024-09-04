import React, { useState } from 'react';

function AddMovie({ newMovie, setNewMovie, setMovies, onClose }) {
    const handleChange = (e) => {
      const { name, value } = e.target;
      setNewMovie((prevMovie) => ({
        ...prevMovie,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Form submitted");
      console.log('New movie state:', newMovie);
  
      // Ensure all fields are filled out
      if (!newMovie.title || !newMovie.type || !newMovie.date || !newMovie.rating  ||!newMovie.image ||  !newMovie.description || !newMovie.seasons) {
        alert('Please fill out all fields.');
        return;
      }
  
      // Create new movie object with a unique ID
      const newMovieWithId = {
        ...newMovie,
        id: Date.now(),
      };
  
      // Update movies state in the parent component
      setMovies((prevMovies) => [...prevMovies, newMovieWithId]);
  
      // Reset the form fields
      setNewMovie({
        title: "",
        type: "",
        date: "",
        rating: "",
        image: "",
        description: "",
        seasons: "",
      });
  
      // Close the form
      if (onClose) onClose();
    };
  return (
      <form onSubmit={handleSubmit}>
        <h2>Add New Movie</h2>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={newMovie.title}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Type:
          <input
            type="text"
            name="type"
            value={newMovie.type}
            onChange={handleChange}
            required
          />  </label>
        <br />
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={newMovie.date}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Rating:
          <input
            type="number"
            name="rating"
            value={newMovie.rating}
            onChange={handleChange}
            required
            
          />
        </label>
        <br />
        <label>
          Image URL:
          <input
            type="text"
            name="image"
            value={newMovie.image}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            name="description"
            value={newMovie.description}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Seasons:
          <input
            type="number"
            name="seasons"
            value={newMovie.seasons}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Add Movie</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    );
  }
  
  export default AddMovie;

