import React, { Component } from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';

//Style
const ProfileImage = styled.img`
  width: 12em;
  height: 12em;
  border-radius: 50%;
`;

const ProfileTitle = styled.h1`
  color: #64468f;
`;

const HeaderDiv = styled.div`
  padding-top: 5vh;
  text-align: center;
  font-family: 'Zilla Slab Highlight', sans-serif;
  color: black;
`;

const NavLink = styled(Link)`
  display: inline-flex;
  margin: 0 5px;
  color: #64468f;
  font-size: 16px;
  font-color: #ffffff;
`;

class Header extends Component {
  render() {
    return (
      <HeaderDiv>
        <Link to="/">
          <ProfileImage src={require('../assets/Charlie-Meaden.jpg')} alt='Charlie Meaden'/>
          <ProfileTitle>Charlie Meaden</ProfileTitle>
        </Link>
        <div>
          <NavLink to='/'>ABOUT</NavLink>
          <NavLink to='/expertise'>EXPERTISE</NavLink>
          <NavLink to='/writing'>BLOG</NavLink>
          <NavLink to='/life'>LIFE</NavLink>
          <NavLink to='/contact'>CONTACT</NavLink>
        </div>
        <hr/>
      </HeaderDiv>
    );
  }
}

export default Header;