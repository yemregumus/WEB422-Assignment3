import { useRouter } from "next/router";
import useSWR from "swr";
import Error from "next/error";
import MovieDetails from "@/components/MovieDetails";
import PageHeader from "@/components/PageHeader";

export default function Movie() {
  const router = useRouter();
  const { title } = router.query;

  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error } = useSWR(`https://assignment1yeg.onrender.com/api/movies?title=${title}`, fetcher);

  return !data ? null : Array.isArray(data) && data.length === 0 ? (
    <Error statusCode={404} />
  ) : (
    <div>
      {data.map((movie) => (
        <div key={movie._id}>
          <strong>
            <PageHeader text={movie.title} />
          </strong>
          <MovieDetails movie={movie} />
        </div>
      ))}
    </div>
  );
}
