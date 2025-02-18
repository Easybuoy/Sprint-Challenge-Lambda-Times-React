import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledCard = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: space-between;
  align-items: none;
  flex-direction: column;
  background-color: #fff;
  width: 380px;
  margin-bottom: 16px;
  padding: 24px;
`;

const StyledCardHeader = styled.div`
  font-size: 25px;
  font-family: Didot, serif;
`;

const StyledCardAuthor = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  margin-top: 15px;
`;

const StyledCardImageContainer = styled.div`
  padding-right: 10px;
  border-right: 1px solid lightgrey;
  height: 40px;

  img {
    width: 40px;
  }
`;

const StyledCardSpan = styled.span`
  padding-left: 10px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`;

const Card = props => {
  const { author, headline, img } = props.card;
  return (
    <StyledCard>
      <StyledCardHeader>{headline}</StyledCardHeader>
      <StyledCardAuthor>
        <StyledCardImageContainer>
          <img src={img} alt={author} />
        </StyledCardImageContainer>
        <StyledCardSpan>By {author}</StyledCardSpan>
      </StyledCardAuthor>
    </StyledCard>
  );
};

export default Card;

Card.propTypes = {
  card: PropTypes.shape({
    author: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    tab: PropTypes.string.isRequired
  }).isRequired
};
