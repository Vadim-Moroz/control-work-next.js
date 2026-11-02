import './MoviesPage.css'
import {getGenre, getGenres, getMovies, searchMovies} from "@/src/services/api.service";
import PaginationComponent from "@/src/components/pagination/PaginationComponent";
import {MoviesList} from "@/src/components/MoviesList";
import {FC} from "react";

type Props = {
    searchParams: Promise<{
        page?: string;
        search?: string;
        genre?: string;
        sortType?: "rating+" | "rating-" | "popularity+" | "popularity-" | "title+" | "title-" | null;
    }>;
};
const MoviesPage:FC<Props> =async ({searchParams}) => {
    const params = await searchParams;

    const page = params.page ?? "1";
    const searchMovieText = params.search ?? "";
    const genres = params.genre;
    const sortType = params.sortType ?? null;
    const genresList = await getGenres();
    let movies

    if (searchMovieText) {
        movies = await searchMovies(page, searchMovieText);
    } else if (genres) {
        movies = await getGenre(page, Number(genres), sortType);
    } else {
        movies = await getMovies(page, sortType);
    }
    return (
        <div className="MoviesPage">
            <PaginationComponent/>
            <MoviesList movies={movies} genresList={genresList} sortType={sortType} />
            <PaginationComponent/>
        </div>
    );
};

export default MoviesPage;