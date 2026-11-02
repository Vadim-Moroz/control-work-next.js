import type {FC} from "react";
import './style/StarsRating.css'

type PropsRatingType ={
    rating: number
}
const StarsRating:FC<PropsRatingType> = ({rating}) => {
    const stars = Math.round(rating / 2);
    const result = [];

    for (let i = 0; i < 5; i++) {
        if (i < stars) {
            result.push(<span key={i} className="star active">★</span>);
        } else {
            result.push(<span key={i} className="star">★</span>);
        }
    }
    return (
        <div className="rating">
            {result}
        </div>
    );
};

export default StarsRating;