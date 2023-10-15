import React from "react";
import Link from "next/link";
import { Card, Container } from "react-bootstrap";
import MovieDetails from "@/components/MovieDetails";
import PageHeader from "@/components/PageHeader";

export function getStaticProps() {
  // Call an external API endpoint to get posts
  const link = "https://assignment1yeg.onrender.com/api/movies/573a139bf29313caabcf3d23";
  return new Promise((resolve, reject) => {
    fetch(link)
      .then((res) => res.json())
      .then((data) => {
        resolve({ props: { movie: data } });
      });
  });
}

export default function About({ movie }) {
  return (
    <>
      <Container fluid>
        <PageHeader text="About the Developer: Yunus Emre Gumus" />
        <Card className="bg-light">
          <Card.Body>
            <div>
              <p>I&apos;m currently enrolled in the Computer Programming and Analysis program at Seneca College, and my passion for technology and programming has been a driving force in my career choice. I&apos;ve had the opportunity to work in various industries in the past, and while I have a broad skill set, I&apos;ve decided to focus my expertise on becoming a programming expert. Throughout my career, I&apos;ve prided myself on qualities such as leadership, teamwork, honesty, and integrity, which have consistently complemented my professional endeavors. Independence has been a significant aspect of my life since childhood, and I&apos;ve always been self-reliant. I consider myself a self-made individual with a strong commitment to my education and a bright future in the field of technology.</p>
              <p>
                It&apos;s difficult to choose a favourite, but &quot;<Link href="/movies/The%20Matrix">{movie.title}</Link>&quot; (released in 1999) is one of the most epic movies that I watch.
              </p>
            </div>
          </Card.Body>
          <MovieDetails movie={movie} />
        </Card>
      </Container>
    </>
  );
}
