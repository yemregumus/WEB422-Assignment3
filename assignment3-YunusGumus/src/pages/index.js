/*********************************************************************************
 *  WEB422 – Assignment 3
 *  I declare that this assignment is my own work in accordance with Seneca Academic Policy.
 *  No part of this assignment has been copied manually or electronically from any other source
 *  (including web sites) or distributed to other students.
 *
 *  Name: Yunus Emre Gumus Student ID: 150331197 Date: 2023-10-14
 *
 *
 ********************************************************************************/

import React, { useState, useEffect } from "react";
import useSWR from "swr";
import { Pagination, Accordion } from "react-bootstrap";
import MovieDetails from "@/components/MovieDetails";
import PageHeader from "@/components/PageHeader";

export default function Home() {
  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState([]);

  const { data, error } = useSWR(`https://assignment1yeg.onrender.com/api/movies?page=${page}&perPage=10`);

  useEffect(() => {
    if (data) {
      setPageData(data);
    }
  }, [data]);

  const previous = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const next = () => {
    setPage(page + 1);
  };

  return (
    <>
      <div>
        <PageHeader text="Film Collection : Sorted by Date"></PageHeader>
        <Accordion>
          {pageData.map((movie) => (
            <Accordion.Item key={movie._id} eventKey={movie._id}>
              <Accordion.Header>
                <strong>{movie.title}</strong> ({movie.year}) - {movie.directors.join(", ")}
              </Accordion.Header>
              <Accordion.Body>
                <MovieDetails movie={movie} />
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
        <Pagination className="d-flex justify-content-center">
          <Pagination.Prev onClick={previous} />
          <Pagination.Item active>{page}</Pagination.Item>
          <Pagination.Next onClick={next} />
        </Pagination>
      </div>
    </>
  );
}
