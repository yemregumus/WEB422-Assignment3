import React from "react";
import Link from "next/link";
import { Card } from "react-bootstrap";
import MovieDetails from "@/components/MovieDetails";
import PageHeader from "@/components/PageHeader";

export function getStaticProps() {
  // Call an external API endpoint to get posts
  return new Promise((resolve, reject) => {
    fetch(
      "https://assignment1yeg.onrender.com/api/movies?page=1&perPage=10&title=The%20Matrix"
    )
      .then((res) => res.json())
      .then((data) => {
        
        resolve({ props: { movie: data } })
        
      })
  });
}

export default function About({movie}) {
  return (
    <>
      <p>About</p>
      <Card>
        <Card.Body>
          <PageHeader text="About the Developer: Yunus Emre Gumus" />
          <div>
            <p>
              I'm currently enrolled in the Computer Programming and Analysis
              program at Seneca College, and my passion for technology and
              programming has been a driving force in my career choice. I've had
              the opportunity to work in various industries in the past, and
              while I have a broad skill set, I've decided to focus my expertise
              on becoming a programming expert. Throughout my career, I've
              prided myself on qualities such as leadership, teamwork, honesty,
              and integrity, which have consistently complemented my
              professional endeavors. Independence has been a significant aspect
              of my life since childhood, and I've always been self-reliant. I
              consider myself a self-made individual with a strong commitment to
              my education and a bright future in the field of technology.
            </p>
            <p>It's difficult to choose a favourite, but "{movie[0].title}" (released in 1999) is one of the most epic movies that I watch.</p>
          </div>
        </Card.Body>
        <MovieDetails movie={movie[0]} />
      </Card>
    </>
  );
}
