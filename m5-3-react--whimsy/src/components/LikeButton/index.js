import React, { useContext } from "react";
import styled from "styled-components";
import { range, sample } from "../../utils";
import PoppingCircle from "./PoppingCircle";
import Heart from "./Heart";
import ScaleIn from "./ScaleIn";
import ConfettiPiece from "./ConfettiPiece";
import { TweetContext } from "../TweetContext";

const PARTICLE_COLORS = ["#e53935", "#1e88e5", "#43a047", "#fdd835", "#fb8c00"];

const LikeButton = ({ size = 40 }) => {
  const { isLikedByCurrentUser } = useContext(TweetContext);

  const heartSize = size * 0.6;

  return (
    <Wrapper style={{ width: size, height: size }}>
      {isLikedByCurrentUser && <PoppingCircle size={size} color="#E790F7" />}
      {isLikedByCurrentUser &&
        range(12).map((i) => (
          <ConfettiPiece
            key={i}
            angle={360 * (i / 12)}
            distance={20}
            color={sample(PARTICLE_COLORS)}
          />
        ))}
      {isLikedByCurrentUser ? (
        <ScaleIn>
          <Heart width={heartSize} isToggled={isLikedByCurrentUser} />
        </ScaleIn>
      ) : (
        <Heart width={heartSize} isToggled={isLikedByCurrentUser} />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default LikeButton;
