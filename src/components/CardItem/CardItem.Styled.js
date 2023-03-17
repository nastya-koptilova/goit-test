import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 30px;
  padding: 15px;
`;

export const Item = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 28px;
  padding-bottom: 36px;
  margin: 0;
  width: 380px;
  height: 460px;
  list-style: none;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const Logo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const Avatar = styled.img`
  position: absolute;
  top: 178px;
`;

export const Line = styled.span`
  position: absolute;
  top: 214px;
  width: 380px;
  height: 8px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const Tweets = styled.p`
  margin-top: 88px;
  margin-bottom: 16px;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
`;

export const Followers = styled.p`
  margin: 0;
  margin-bottom: 26px;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;
`;

export const Button = styled('button')`
  width: 196px;
  height: 50px;
  background: ${props => (props.follow !== 'follow' ? '#5CD3A8' : `#ebd8ff`)};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  border: none;
`;
