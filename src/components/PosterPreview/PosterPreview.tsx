import type {FC} from "react";
import './PosterPreview.css'

type PropsPosterType={
    image:string
}
const PosterPreview:FC<PropsPosterType> = ({image}) => {
    return (
        <div className="posterPreview">
            <img src={`https://image.tmdb.org/t/p/w500${image}`} alt="Movie poster"/>
        </div>
    );
};

export default PosterPreview;