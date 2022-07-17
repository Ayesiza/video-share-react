import React from "react";
import  {Link}  from "react-router-dom";
import styled from "styled-components";
import logo from "../images/cover-image (1).svg";
import {
  AccountCircleOutlined,
  ArticleOutlined,
  ExploreOutlined,
  FlagOutlined,
  HistoryOutlined,
  Home,
  LibraryMusicOutlined,
  LiveTvOutlined,
  MovieOutlined,
  SettingsOutlined,
  SportsBasketballOutlined,
  SportsEsportsOutlined,
  SubscriptOutlined,
  VideoLibraryOutlined,
} from "@mui/icons-material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";

const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 100vh;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  position: sticky;
  top: 0;
`;
const Wrapper = styled.div`
  padding: 18px 26px;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`;
const Img = styled.img`
  height: 30px;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;

  &:hover{
    background-color:${({ theme }) => theme.soft};
  }
`;
const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.text};
`;
const Login = styled.div``;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;
const Title = styled.h2`
  font-size: 14px;
  font-weight: 50px;
  color: #aaaaaa;
  margin-bottom: 20px;
`;

const Menu = ({ darkMode, setDarkMode }) => {
  return (
    <Container>
      <Wrapper>
      <Link to="/" style={{textDecoration:"none", color:"inherit"}}>
        <Logo>
          <Img src={logo} />
          MyTube
        </Logo>
        </Link>
        <Item>
          <Home />
          Home
        </Item>
        <Item>
          <ExploreOutlined />
          Explore
        </Item>
        <Item>
          <SubscriptOutlined />
          Subscription
        </Item>
        <Hr />
        <Item>
          <VideoLibraryOutlined />
          Library
        </Item>
        <Item>
          <HistoryOutlined />
          History
        </Item>
        <Hr />
        <Login>
          Sign in to like videos,comment and subscribe.
          <Link to="signin" style={{textDecoration:"none"}}>
          <Button>
            <AccountCircleOutlined />
            SIGN IN
          </Button>
          </Link>
        </Login>
        <Hr />
        <Title>BEST OF MYTUBE</Title>
        <Item>
          <LibraryMusicOutlined />
          Music
        </Item>
        <Item>
          <SportsBasketballOutlined />
          Sports
        </Item>
        {/* <Item>
        <SportsEsportsOutlined/>
        Gaming
       </Item> */}
        <Item>
          <MovieOutlined />
          Movies
        </Item>
        <Item>
          <ArticleOutlined />
          News
        </Item>
        <Item>
          <LiveTvOutlined />
          Live
        </Item>
        <Hr />
        <Item>
          <SettingsOutlined />
          Settings
        </Item>
        {/* <Item>
          <FlagOutlined />
          Report
        </Item> */}
        <Item>
          <HelpOutlineIcon />
          Help
        </Item>
        <Item onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessIcon />
         {darkMode ? "Light" : "Dark"} Mode
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
