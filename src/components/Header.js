import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Nav>
      <Logo src='/images/logo.svg' />
      <NavMenu>
        <a>
          <img src='/images/home-icon.svg' alt='' />
          <span>home</span>
        </a>
        <a>
          <img src='/images/search-icon.svg' alt='' />
          <span>search</span>
        </a>
        <a>
          <img src='/images/watchlist-icon.svg' alt='' />
          <span>watchlist</span>
        </a>
        <a>
          <img src='/images/original-icon.svg' alt='' />
          <span>originals</span>
        </a>
        <a>
          <img src='/images/movie-icon.svg' alt='' />
          <span>movies</span>
        </a>
        <a>
          <img src='/images/series-icon.svg' alt='' />
          <span>series</span>
        </a>
      </NavMenu>
      <UserImg src='/images/logo.svg' />
    </Nav>
  )
}

export default Header

const Nav = styled.div`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
`
const Logo = styled.img`
  width: 80px;
`

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      text-transform: capitalize;
      position: relative;

      &:after {
        content: '';
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

        transform: scaleX(0);
      }
    }
    &:hover {
      span: after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`
