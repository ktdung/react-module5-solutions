import React from 'react';
import styled from 'styled-components';

const Avatar = ({ handle, src, size, ...delegated }) => {
  return (
    <Wrapper
      alt={`${handle}'s avatar`}
      src={src}
      style={{ width: size, height: size }}
      {...delegated}
    />
  );
};

const Wrapper = styled.img`
  display: block;
  border-radius: 50%;
`;

export default Avatar;
