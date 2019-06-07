import styled from "styled-components";

const StyledHeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;

  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

const StyledHeaderSpan = styled.span`
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
`;

const StyledHeaderSpanDate = styled(StyledHeaderSpan)`
  margin-left: 25px;
  flex: 1;
`;

const StyledHeaderSpanTemp = styled(StyledHeaderSpan)`
  text-align: right;
  margin-right: 25px;
  flex: 1;
`;

const StyledHeaderH1 = styled.h1`
  font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`;

export {
  StyledHeaderDiv,
  StyledHeaderH1,
  StyledHeaderSpanDate,
  StyledHeaderSpanTemp
};
