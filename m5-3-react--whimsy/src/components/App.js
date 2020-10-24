import React from "react";
import styled from "styled-components";

import Tweet from "./Tweet";

import TweetProvider from "./TweetContext";

const App = () => {
  return (
    <TweetProvider>
      <Wrapper>
        <Tweet />
      </Wrapper>
    </TweetProvider>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #eee;
`;

export default App;
