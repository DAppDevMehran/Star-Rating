import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";

export default function Rating({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(index) {
    setRating(index);
  }

  function handleMouseEnter(index) {
    setHover(index);
  }

  function handleMouseLeave() {
    setHover(rating);
  }

  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        const currentIndex = index + 1; // Adjust for 1-based index
        const isActive = currentIndex <= (hover || rating);
        return (
          <FaStar
            key={currentIndex}
            className={isActive ? "active" : "inactive"}
            onClick={() => handleClick(currentIndex)}
            onMouseEnter={() => handleMouseEnter(currentIndex)}
            onMouseLeave={handleMouseLeave}
            size={40}
          />
        );
      })}
    </div>
  );
}
