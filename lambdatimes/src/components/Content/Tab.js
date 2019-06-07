import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledTab = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  margin: 0 5px;
  padding: 2px 10px;
  font-size: 12px;
  letter-spacing: 2px;
  cursor: pointer;
  font-weight: bold;
  background-color: ${props => (props.active ? "#fff" : "#333")};
  color: ${props => (props.active ? "#333" : "#fff")};
  border: ${props => (props.active ? "2px solid #333" : "none")};

  &:hover {
    text-decoration: underline;
  }
`;

const Tab = props => {
  const { tab, selectedTab, selectTabHandler } = props;

  return (
    <StyledTab
      active={tab === selectedTab}
      onClick={() => {
        selectTabHandler(tab);
      }}
    >
      {props.tab.toUpperCase()}
    </StyledTab>
  );
};

export default Tab;

Tab.propTypes = {
  tab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired,
  selectedTab: PropTypes.string.isRequired
};
