import React from "react";
import {
  StyledHeaderDiv,
  StyledHeaderH1,
  StyledHeaderSpanDate,
  StyledHeaderSpanTemp
} from "./StyledHeader";

const Header = () => {
  return (
    <StyledHeaderDiv>
      <StyledHeaderSpanDate>SMARCH 32, 2018</StyledHeaderSpanDate>
      <StyledHeaderH1>Lambda Times</StyledHeaderH1>
      <StyledHeaderSpanTemp>98°</StyledHeaderSpanTemp>
    </StyledHeaderDiv>
  );
};

export default Header;
