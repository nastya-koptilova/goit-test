import React, { useEffect, useState } from 'react';
import {
  Container,
  Line,
  Logo,
  Avatar,
  Tweets,
  Followers,
  Button,
} from './Card.Styled';
import logo from '../../images/logo.svg';
import background from '../../images/background.png';
import avatar from '../../images/avatar.png';
import users from '../../data/users.json';

export const Card = () => {
  const followersNumber = 100500;

  const [follow, setFollow] = useState(false);
  const [followers, setFollowers] = useState(followersNumber);
  console.log(users);

  useEffect(() => {
    const prevState = JSON.parse(localStorage.getItem('card'));
    if (prevState) {
      setFollow(prevState.follow);
      setFollowers(prevState.followers);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('card', JSON.stringify({ follow, followers }));
  }, [follow, followers]);

  const handleButton = () => {
    if (follow) {
      setFollow(false);
      setFollowers(prevState => prevState - 1);
      return;
    }
    setFollow(true);
    setFollowers(prevState => prevState + 1);
  };

  return (
    <div>
      {users.map(el => {
        return (
          <Container key={el.id}>
            <img src={background} alt="" />
            <Logo src={logo} alt="" />
            <Line></Line>
            <Avatar src={`${el.avatar}`} alt="" />
            <Tweets>{el.tweets} tweets</Tweets>
            <Followers>
              {el.followers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
              Followers
            </Followers>
            <Button follow={follow} type="button" onClick={handleButton}>
              {follow ? 'Following' : 'Follow'}
            </Button>
          </Container>
        );
      })}
      {/* <Container>
        <img src={background} alt="" />
        <Logo src={logo} alt="" />
        <Line></Line>
        <Avatar src={avatar} alt="" />
        <Tweets>777 tweets</Tweets>
        <Followers>
          {followers.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} Followers
        </Followers>
        <Button follow={follow} type="button" onClick={handleButton}>
          {follow ? 'Following' : 'Follow'}
        </Button>
      </Container> */}
    </div>
  );
};
