import React from 'react';
import {
  Item,
  Line,
  Logo,
  Avatar,
  Tweets,
  Followers,
  Button,
} from './CardItem.Styled';

export const CardItem = ({
  id,
  background,
  logo,
  avatar,
  tweets,
  userFollowers,
  userButton,
  handleButton,
}) => {
  return (
    <Item key={id} id={id}>
      <img src={background} alt="" />
      <Logo src={logo} alt="" />
      <Line></Line>
      <Avatar src={`${avatar}`} alt="" />
      <Tweets>{tweets} tweets</Tweets>
      <Followers>
        {userFollowers.followers
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
        Followers
      </Followers>
      <Button
        id={id}
        type="button"
        follow={userButton.textButton}
        onClick={handleButton}
      >
        {userButton.textButton}
      </Button>
    </Item>
  );
};
