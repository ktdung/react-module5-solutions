import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import items from "../data";
import useDocumentTitle from "../hooks/use-document-title.hook";
import useKeydown from "../hooks/use-keydown.hook";

import cookieSrc from "../cookie.svg";
import Item from "./Item";
import { GameContext } from "./GameContext";

const Game = () => {
  const {
    numCookies,
    setNumCookies,
    purchasedItems,
    setPurchasedItems,
    cookiesPerSecond,
  } = React.useContext(GameContext);

  useDocumentTitle({
    title: `${numCookies} cookies - Cookie Clicker Workshop`,
    fallbackTitle: "Cookie Clicker Workshop",
  });

  const incrementCookies = () => setNumCookies((cookies) => cookies + 1);

  useKeydown("Space", incrementCookies);

  return (
    <Wrapper>
      <GameArea>
        <Indicator>
          <Total>{numCookies} cookies</Total>
          <strong>{cookiesPerSecond}</strong> cookies per second
        </Indicator>
        <Button onClick={incrementCookies}>
          <Cookie src={cookieSrc} />
        </Button>
      </GameArea>

      <ItemArea>
        <SectionTitle>Items:</SectionTitle>
        {items.map((item, index) => {
          return (
            <Item
              key={item.id}
              index={index}
              name={item.name}
              cost={item.cost}
              value={item.value}
              numOwned={purchasedItems[item.id]}
              handleAttemptedPurchase={() => {
                if (numCookies < item.cost) {
                  alert("Cannot afford item");
                  return;
                }

                setNumCookies(numCookies - item.cost);
                setPurchasedItems({
                  ...purchasedItems,
                  [item.id]: purchasedItems[item.id] + 1,
                });
              }}
            />
          );
        })}
      </ItemArea>
      <HomeLink to="/">Return home</HomeLink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`;
const GameArea = styled.div`
  flex: 1;
  display: grid;
  place-items: center;
`;
const Button = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  transform-origin: center center;

  &:active {
    transform: scale(0.9);
  }
`;

const Cookie = styled.img`
  width: 200px;
`;

const ItemArea = styled.div`
  height: 100%;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SectionTitle = styled.h3`
  text-align: center;
  font-size: 32px;
  color: yellow;
`;

const Indicator = styled.div`
  position: absolute;
  width: 250px;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
`;

const Total = styled.h3`
  font-size: 28px;
  color: lime;
`;

const HomeLink = styled(Link)`
  position: absolute;
  top: 15px;
  left: 15px;
  color: #666;
`;

export default Game;
