import React from "react";
import styled from "styled-components";

const Stat = ({ num, textLabel }) => (
  <Wrapper>
    <Num>{num}</Num> {textLabel}
  </Wrapper>
);

const Wrapper = styled.div`
  font-size: 16px;
  color: rgb(101, 119, 134);
  margin-right: 24px;
`;

const Num = styled.span`
  color: rgb(20, 23, 26);
  font-weight: bold;
`;
export default Stat;
