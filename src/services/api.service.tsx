import * as axios from "axios";
import type {IMovieDetails} from "../models/IMovie.tsx";

const axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/',
    headers: {"Content-Type": "application/json"}
});

axiosInstance.interceptors.request.use((requestObject)=> {
    if(requestObject.method?.toUpperCase() === 'GET') {
        requestObject.headers.Authorization = `Bearer ${REQUEST_TOKEN}`
    }
    return requestObject
})

const REQUEST_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjcwNThjOTc5Mjg3ZTZkMTcwZGU2MDNmY2JhMDIzMiIsIm5iZiI6MTc5MTExNTk0NS45OTUwMDAxLCJzdWIiOiI2YWMyNDJhOTVlY2NiNjk3YzAzMjQ1NDciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.Q8thC3I59qx-NMetImEx4FsmFaLDHC-3af4oarRI_4Q"

const getSortBy = (sortType: string | null) => {
    if (sortType === "rating+") return "vote_average.desc";
    if (sortType === "rating-") return "vote_average.asc";
    if (sortType === "popularity+") return "popularity.desc";
    if (sortType === "popularity-") return "popularity.asc";
    if (sortType === "title+") return "original_title.desc";
    if (sortType === "title-") return "original_title.asc";

    return "vote_average.desc";
};

export const getMovies = async (page:string,sortType:string | null)=> {
    const sortBy = getSortBy(sortType);
    const {data} = await axiosInstance.get(`3/discover/movie?page=${page}&sort_by=${sortBy}`);
    console.log(data.results);
    return data.results
}
export const getMovie = async (id:string | undefined)=> {
    console.log("Movie ID:", id);
    const {data} = await axiosInstance.get(`3/movie/${id}`);
    console.log(data)
    return data as IMovieDetails
}
export const searchMovies = async (page: string, search: string) => {
    const {data} = await axiosInstance.get(`3/search/movie?page=${page}&query=${search}`);
    return data.results;
};
export const getGenre = async (page: string, genre: number,sortType:string | null) => {
    const sortBy = getSortBy(sortType);
    const {data} = await axiosInstance.get(`3/discover/movie?page=${page}&with_genres=${genre+''}&sort_by=${sortBy}`);
    return data.results;
};
export const getGenres = async () => {
    const { data } = await axiosInstance.get("3/genre/movie/list");
    return data.genres;
};