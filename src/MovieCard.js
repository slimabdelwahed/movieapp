import React from 'react'
import Card from 'react-bootstrap/Card';



function MovieCard({movie}) {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.image} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
          {movie.date} <br/>
           {movie.type}  <br/>
           {movie.seasons}  <br/>
           {movie.rating}  <br/>
           {movie.description}
        </Card.Text>
       
      </Card.Body>
    </Card> 
    </div>
  )
}

export default MovieCard