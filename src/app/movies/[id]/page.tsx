import MovieComponent from "@/src/components/MovieComponent";
import {FC} from "react";

type Props = {
    params: Promise<{ id: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const MoviePage:FC<Props> =async ({params,searchParams}) => {
    const {id} = await params;
    const searchparams = await searchParams
    return (
        <div>
            <MovieComponent id={id} params={new URLSearchParams(searchparams as Record<string, string>).toString()}/>
        </div>
    );
};

export default MoviePage;