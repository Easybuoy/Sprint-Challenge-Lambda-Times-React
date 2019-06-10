import React from "react";
import {
  StyledTopBar,
  StyledTopBarContainer,
  StyledTopBarContainerLeft,
  StyledTopBarContainerCenter,
  StyledTopBarContainerRight
} from "./StyledTopBar";

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <StyledTopBar>
      <StyledTopBarContainer>
        <StyledTopBarContainerLeft>
          <span>TOPICS</span>
          <span>SEARCH</span>
        </StyledTopBarContainerLeft>
        <StyledTopBarContainerCenter>
          <span>GENERAL</span>
          <span>BROWNBAG</span>
          <span>RANDOM</span>
          <span>MUSIC</span>
          <span>ANNOUNCEMENTS</span>
        </StyledTopBarContainerCenter>
        <StyledTopBarContainerRight>
          <span>LOG IN</span>
        </StyledTopBarContainerRight>
      </StyledTopBarContainer>
    </StyledTopBar>
  );
};

export default TopBar;
