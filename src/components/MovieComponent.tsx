
import type {IMovieDetails} from "../models/IMovie.tsx";
import "./style/MovieComponent.css"
import {getMovie} from "@/src/services/api.service";
import MovieInfo from "@/src/components/MovieInfo";
import {FC} from "react";

type ParamsProps = {
   id: string ;
   params: string;
};

const MovieComponent:FC<ParamsProps> = async ({id,params}) => {
    const movie: IMovieDetails = await getMovie(id);

    return (
        <div className="movie-details">
            <MovieInfo movie={movie} params={params}/>
        </div>
    );
};

export default MovieComponent;