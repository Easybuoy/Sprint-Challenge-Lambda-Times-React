import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Tab from "./Tab";

const StyledTabs = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 47px;
  background-color: #fff;

  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

const StyledTabsTopics = styled(StyledTabs)`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
`;

const StyledTabsTitle = styled.span`
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`;

const Tabs = props => {
  return (
    <StyledTabs>
      <StyledTabsTopics>
        <StyledTabsTitle>TRENDING TOPICS:</StyledTabsTitle>

        {props.tabs.map(tab => {
          return (
            <Tab
              key={tab}
              tab={tab}
              selectTabHandler={props.selectTabHandler}
              selectedTab={props.selectedTab}
            />
          );
        })}
      </StyledTabsTopics>
    </StyledTabs>
  );
};

export default Tabs;

Tabs.propTypes = {
  tabs: PropTypes.array.isRequired,
  selectedTab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired
};
