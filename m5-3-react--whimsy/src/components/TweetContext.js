import React, { createContext, useState } from "react";
import moment from "moment";

import avatar from "../assets/carmen-sandiego.png";

export const TweetContext = createContext(null);

const TweetProvider = ({ children }) => {
  const [numOfLikes, setNumOfLikes] = useState(460);
  const [numOfRetweets, setNumOfreTweets] = useState(65);
  const [isLiked, setIsLiked] = useState(false);
  const [isRetweeted, setIsRetweeted] = useState(false);

  const date = moment().format("h:mm A - MMM Do, YYYY");

  const handleToggleLike = () => {
    setIsLiked(!isLiked);
    // the value of isLiked below is the value BEFORE the user clicks
    isLiked ? setNumOfLikes(numOfLikes - 1) : setNumOfLikes(numOfLikes + 1);
  };

  const handleToggleRetweet = () => {
    setIsRetweeted(!isRetweeted);
    // the value of isRetweeted below is the value BEFORE the user clicks
    isRetweeted
      ? setNumOfreTweets(numOfRetweets - 1)
      : setNumOfreTweets(numOfRetweets + 1);
  };

  return (
    <TweetContext.Provider
      value={{
        numOfLikes,
        numOfRetweets,
        date,
        tweetContents: "Where in the world am I?",
        displayName: "Carmen Sandiego ✨",
        username: "carmen-sandiego",
        avatarSrc: avatar,
        isRetweetedByCurrentUser: isRetweeted,
        isLikedByCurrentUser: isLiked,
        handleToggleLike,
        handleToggleRetweet,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};

export default TweetProvider;
