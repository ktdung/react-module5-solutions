import React from 'react';
import { useParams, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import useApiEndpoint from '../../hooks/use-api-endpoint.hook';

import Header from '../Header';
import CenteredSpinner from '../CenteredSpinner';
import SadScreen from '../SadScreen';
import ProfileHeader from '../ProfileHeader';
import TabLinks from '../TabLinks';
import ProfileTweetFeed from '../ProfileTweetFeed/ProfileTweetFeed';
import Paragraph from '../Paragraph';

const Profile = () => {
  const { handleId } = useParams();

  const [profileData, profileStatus] = useApiEndpoint(`/${handleId}/profile`);

  if (profileStatus === 'error') {
    if (profileData.error === 'user-not-found') {
      return (
        <SadScreen title="User not found">
          <Paragraph>
            There is no user with this name. Are you sure you've spelled it
            correctly?
          </Paragraph>
        </SadScreen>
      );
    } else {
      return <SadScreen />;
    }
  }

  let headerContent;
  if (profileStatus === 'loading') {
    headerContent = <CenteredSpinner />;
  } else {
    headerContent = <ProfileHeader profile={profileData.profile} />;
  }

  return (
    <Wrapper>
      <HeaderWrapper>{headerContent}</HeaderWrapper>
      <TabLinks>
        <TabLinks.Tab to={`/${handleId}`}>Tweets</TabLinks.Tab>
        <TabLinks.Tab to={`/${handleId}/media`}>Media</TabLinks.Tab>
        <TabLinks.Tab to={`/${handleId}/likes`}>Likes</TabLinks.Tab>
      </TabLinks>
      <Switch>
        <Route path="/:handleId/media">Media</Route>
        <Route path="/:handleId/likes">Likes</Route>
        <Route path="/:handleId">
          <ProfileTweetFeed />
        </Route>
      </Switch>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 1;
`;

const HeaderWrapper = styled.div`
  min-height: 400px;
`;

export default Profile;
