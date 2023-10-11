import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const RatingStar = ({ user_ratings, h = 4, w = 4, color = 'text-red-500' }) => {

    if (!user_ratings) {
        return null;
    }

    const { count_negative, count_positive, score = 0 } = user_ratings;

    const totalRatings = count_negative + count_positive;
    const starScore = totalRatings === 0 ? 0 : count_positive / totalRatings;

    const totalStars = 5;
    const filledStars = Math.floor(starScore * totalStars);
    const hasHalfStar = starScore * totalStars - filledStars >= 0.5;

    const stars = [];
    for (let i = 0; i < totalStars; i++) {
        if (i < filledStars) {
            stars.push(<BsStarFill className={`w-${w} h-${h}`} key={i} />);
        } else if (i === filledStars && hasHalfStar) {
            stars.push(<BsStarHalf className={`w-${w} h-${h}`} key={i} />);
        } else {
            stars.push(<BsStar className={`w-${w} h-${h}`} key={i} />);
        }
    }
    return <ul className={`flex justify-center ${color}`}>{stars.map((star, index) => <li key={index}>{star}</li>)}</ul>;
};

export default RatingStar;
