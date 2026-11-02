import type { IMovieDetails} from "../models/IMovie.tsx";
import type {FC} from "react";
import "./style/MovieInfo.css"
import PosterPreview from "@/src/components/PosterPreview/PosterPreview";
import GenreBadge from "@/src/components/GenreBadge";
import Link from "next/link";

type PropsMovieType ={
    movie:IMovieDetails;
    params: string;
}
const MovieInfo:FC<PropsMovieType> = ({movie,params}) => {
    return (
        <div className="movie">
            <h2>{movie.title}</h2>
            <PosterPreview image={movie.poster_path}/>
            <p>{movie.overview}</p>
            <p className="popularity">Популярність: {movie.popularity}</p>
            <div>
                {movie.genres.map(genre  =>
                    <GenreBadge key={genre.id} genreId={genre.name}/>
                )}
            </div>
            <Link href={`/movies?${params}`} className={"back"}>Назад</Link>
        </div>
    );
};

export default MovieInfo;