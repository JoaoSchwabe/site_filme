import { useEffect, useState } from "react";
import { Container, Movie, MovieList, Btn } from "./style";
import { Link } from "react-router-dom";
import React from "react";
import { Filme } from "../../types/filmes";

function Home() {
    const imagePath = "https://image.tmdb.org/t/p/w500";

    const [movies, setMovies] = useState<Filme[]>([]);
    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_KEY}&language=pt-BR`
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data.results);
                setMovies(data.results);
            });
    }, []);

    return (
        <Container>
            <h1>Movies</h1>
            <MovieList>
                {movies.map((movie) => {
                    return (
                        <Movie key={movie.id}>
                            <img
                                src={`${imagePath}${movie.poster_path}`}
                                alt="{movie.title}"
                            />
                            <span>{movie.title}</span>

                            <Link to={`/${movie.id}`}>
                                <Btn>Detalhes</Btn>
                            </Link>
                        </Movie>
                    );
                })}
            </MovieList>
        </Container>
    );
}

export default Home;
