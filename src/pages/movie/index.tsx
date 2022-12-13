import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Filme } from "../../types/filmes";
import {
    Container,
    Descricao,
    ImgMovie,
    LinkButton,
    MovieDesc,
    Nav,
} from "./styles";

const Movie = () => {
    const { id } = useParams();
    const imagePath = "https://image.tmdb.org/t/p/w500";

    const [movie, setMovie] = useState<Filme | null>(null);
    useEffect(() => {
        fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_KEY}&language=pt-BR`
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data);

                const res = data.results;
                let filme = res.find((key: Filme) => {
                    return id === String(key.id);
                });
                setMovie(filme);
            });
    }, []);

    return (
        <div>
            <Nav>
                <h1>Movie</h1>
            </Nav>
            <ImgMovie
                src={`${imagePath}${movie?.poster_path}`}
                alt={movie?.title}
            />
            <Container>
                <h1>{movie?.title}</h1>
                <h3>Data de lançamento: {movie?.release_date}</h3>
                <Descricao>
                    <h4>Descrição: </h4>
                    <MovieDesc>{movie?.overview}</MovieDesc>
                </Descricao>
                <Link to="/">
                    <LinkButton>Voltar</LinkButton>
                </Link>
            </Container>
        </div>
    );
};

export default Movie;
