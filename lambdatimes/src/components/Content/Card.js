import React from "react";

const Card = props => {
  const { author, headline, img } = props.card;
  return (
    <div className="card">
      <div className="headline">{headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={img} alt={author}/>
        </div>
        <span>By {author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.

export default Card;
