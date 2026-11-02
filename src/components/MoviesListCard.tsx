import type {FC} from "react";
import type {IGenre, IMovie} from "../models/IMovie.tsx";
import './style/MovieListCard.css'
import PosterPreview from "@/src/components/PosterPreview/PosterPreview";
import StarsRating from "@/src/components/StarsRating";
import GenreBadge from "@/src/components/GenreBadge";
import UserInfo from "@/src/components/UserInfo";
import Link from "next/link";
import {useSearchParams} from "next/navigation";

type PropsMovieType ={
    movie:IMovie
    genresList:IGenre[]
}

const MoviesListCard:FC<PropsMovieType> = ({movie,genresList}) => {
    const searchParams = useSearchParams();
    return (
        <div className="movie-card">
            <PosterPreview image={movie.poster_path}/>
            <h1>{movie.title}</h1>
            <StarsRating rating={movie.vote_average}/>
            <div>
                {(movie.genre_ids ?? []).map(genreId => genresList.find(genre => genre.id === genreId))
                    .filter(genre => genre !== undefined)
                    .map(genre => (<GenreBadge key={genre.id} genreId={genre.name} />))}
            </div>
            <p>{movie.overview}</p>
            <UserInfo/>
            <Link href={`/movies/${movie.id}?${searchParams}`}>Детальніше</Link>

        </div>
    );
};

export default MoviesListCard;