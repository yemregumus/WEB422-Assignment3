import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

export default function MovieDetails({ movie }) {
  const hasPoster = movie && movie.poster;

  return (
    <>
      <Container>
        <Row>
          {hasPoster && (
            <Col md>
              <Image src={movie.poster} alt="poster" className="w-100" />
              <br />
              <br />
            </Col>
          )}
          <Col md>
            <strong>Directed By: </strong>
            {movie.directors ? movie.directors.join(", ") : "N/A"}
            <br />
            <br />
            <p>{movie.fullplot ? movie.fullplot : "N/A"}</p>
            <strong>Cast:</strong> {movie.cast && movie.cast.length > 0 ? movie.cast.join(", ") : "N/A"}
            <br />
            <br />
            <strong>Awards:</strong> {movie.awards ? movie.awards.text : "N/A"}
            <br />
            <strong>IMDB Rating:</strong> {movie.imdb ? movie.imdb.rating + " (" + movie.imdb.votes + " votes)" : "N/A"}
          </Col>
        </Row>
      </Container>
    </>
  );
}
