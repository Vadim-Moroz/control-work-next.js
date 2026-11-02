
"use client";
import MoviesListCard from "./MoviesListCard";
import "./style/MovieList.css";
import type {IGenre, IMovie} from "../models/IMovie";
import { useRouter, useSearchParams } from "next/navigation";
import {FC} from "react";

type MoviesListProps = {
    movies: IMovie[];
    genresList: IGenre[];
    sortType: "rating+" | "rating-" | "popularity+" | "popularity-" | "title+" | "title-" | null;
};

export const MoviesList:FC<MoviesListProps> = ({ movies, genresList }) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const updateQuery = (key: string, value: string, clearKey?: string) => {
        const params = new URLSearchParams(searchParams.toString());

        params.set("page", "1");

        if (value) {
            params.set(key, value);
        } else {
            params.delete(key);
        }

        if (clearKey) {
            params.delete(clearKey);
        }

        router.push(`?${params.toString()}`);
    };

    const handleSearch = (value: string) => {
        const params = new URLSearchParams(searchParams.toString());

        params.set("page", "1");

        if (value.trim()) {
            params.set("search", value.trim());
            params.delete("genre");
        } else {
            params.delete("search");
        }

        router.replace(`?${params.toString()}`);
    };
    return (
        <div className="MoviesList">
            <div className="findform">
                <form onChange={(e) => handleSearch(e.target.value)} className="searchForm">
                    <input type="text" placeholder="Назва фільму" className="searchForm__input"/>
                </form>
            </div>

            <div className="filters">
                <button onClick={() => updateQuery("sortType", "rating+")}>
                    За рейтингом +
                </button>
                <button onClick={() => updateQuery("sortType", "rating-")}>
                    За рейтингом -
                </button>
                <button onClick={() => updateQuery("sortType", "popularity+")}>
                    За популярністю +
                </button>
                <button onClick={() => updateQuery("sortType", "popularity-")}>
                    За популярністю -
                </button>
                <button onClick={() => updateQuery("sortType", "title+")}>
                    За алфавітом +
                </button>
                <button onClick={() => updateQuery("sortType", "title-")}>
                    За алфавітом -
                </button>

                <div className="genreContainer">
                    <button className="genreButton">
                        Жанри {"->"}
                    </button>

                    <div className="genres">
                        {genresList?.map(genre => (
                            <button
                                key={genre.id}
                                onClick={() =>
                                    updateQuery("genre", String(genre.id), "search")
                                }
                            >
                                {genre.name}
                            </button>
                        ))}

                        <button onClick={() => updateQuery("genre", "")}>
                            Усі фільми
                        </button>
                    </div>
                </div>
            </div>

            <div className="movies">
                {movies.map(movie => (
                    <MoviesListCard key={movie.id} movie={movie} genresList={genresList} />
                ))}
            </div>
        </div>
    );
};
