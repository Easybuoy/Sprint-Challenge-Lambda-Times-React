import React, { Component } from "react";
import styled from "styled-components";

import { carouselData } from "../../data";

const StyledCarousel = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 500px;
  position: relative;
  overflow: hidden;
  margin-top: 16px;
  padding-bottom: 1rem;

  @media (min-width: 1200px) {
    width: 1200px;
  }
`;

const StyledCarouselButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  color: #fff;
  background-color: #333;
  font-size: 40px;
  border-radius: 50%;
  position: absolute;
  width: 50px;
  height: 50px;
  cursor: pointer;

  &:hover {
    color: #333;
    background-color: #fff;
    border: 2px solid #333;
  }
`;

const StyledCarouselButtonLeft = styled(StyledCarouselButton)`
  top: 50%;
  left: 25px;
  transform: translate(0, -50%);
`;

const StyledCarouselButtonRight = styled(StyledCarouselButton)`
  top: 50%;
  right: 25px;
  transform: translate(0, -50%);
`;

const StyledCarouselImg = styled.img`
  width: 100%;
  display: none;
`;

// Complete this Carousel
export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      current: 0
    };
  }
  componentDidMount() {
    this.setState({ data: carouselData });
  }

  leftClick = () => {
    if (this.state.current > 0) {
      return this.setState({
        current: this.state.current - 1
      });
    }
    this.setState({ current: 3 });
  };

  rightClick = () => {
    if (this.state.current === 3) {
      this.setState({
        current: 0
      });
    } else {
      this.setState({
        current: this.state.current + 1
      });
    }
  };

  selectedImage = () => {
    return (
      <StyledCarouselImg
        src={this.state.data[this.state.current]}
        alt="Carousel"
        style={{ display: "block" }}
      />
    );
  };

  render() {
    return (
      <StyledCarousel>
        <StyledCarouselButtonLeft onClick={this.leftClick}>
          {"<"}
        </StyledCarouselButtonLeft>
        {this.selectedImage()}

        <StyledCarouselButtonRight onClick={this.rightClick}>
          {">"}
        </StyledCarouselButtonRight>
      </StyledCarousel>
    );
  }
}
