import React, { useEffect, useState } from 'react';
import {
  List,
} from './Card.Styled';
import users from '../../data/users.json';
import logo from '../../images/logo.svg';
import background from '../../images/background.png';
import { CardItem } from '../CardItem/CardItem.jsx';

export const Card = () => {
  const [usersData, setUsersData] = useState(users);
  const [followers, setFollowers] = useState(
    usersData.map(el => {
      return { id: el.id, followers: el.followers };
    })
  );
  const [button, setButton] = useState(
    usersData.map(el => {
      return { id: el.id, textButton: 'follow' };
    })
  );

  useEffect(() => {
    const prevState = JSON.parse(localStorage.getItem('users'));
    if (prevState) {
      setFollowers(prevState.followers);
      setButton(prevState.button);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify({ followers, button }));
  }, [followers, button]);

  const handleButton = event => {
    const userId = event.target.id;
    if (event.target.textContent === 'follow') {
      setButton(prevState => {
        const buttonFollowArr = prevState.filter(
          el => Number(el.id) !== Number(userId)
        );
        return [...buttonFollowArr, { id: userId, textButton: 'following' }];
      });
      setFollowers(prevState => {
        const user = prevState.find(el => Number(el.id) === Number(userId));
        const newFollowers = prevState.filter(
          el => Number(el.id) !== Number(userId)
        );
        return [...newFollowers, { id: userId, followers: user.followers + 1 }];
      });
    }

    if (event.target.textContent === 'following') {
      setButton(prevState => {
        const buttonFollowingArr = prevState.filter(
          el => Number(el.id) !== Number(userId)
        );
        return [...buttonFollowingArr, { id: userId, textButton: 'follow' }];
      });
      setFollowers(prevState => {
        const user = prevState.find(el => Number(el.id) === Number(userId));
        const newFollowers = prevState.filter(
          el => Number(el.id) !== Number(userId)
        );
        return [...newFollowers, { id: userId, followers: user.followers - 1 }];
      });
    }
  };

  return (
    <List>
      {usersData.map(({ id, tweets, avatar }) => {
        const userButton = button.find(el => Number(el.id) === Number(id));
        const userFollowers = followers.find(
          el => Number(el.id) === Number(id)
        );
        return (
          <CardItem
            key={id}
            id={id}
            background={background}
            logo={logo}
            avatar={avatar}
            tweets={tweets}
            userFollowers={userFollowers}
            userButton={userButton}
            handleButton={handleButton}
          ></CardItem>
        );
      })}
    </List>
  );
};
