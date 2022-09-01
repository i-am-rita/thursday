import React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <nav className="main-nav">
        {/* <img src="chandelier.jpg"alt="Microsoft" className="logo"> */}
        <ul className="main-menu">
          <li>
            <a href="/">Office</a>
          </li>
          <li>
            <a href="/">Windows</a>
          </li>
          <li>
            <a href="/">Surface</a>
          </li>
          <li>
            <a href="/">Xbox</a>
          </li>
          <li>
            <a href="/">Deals</a>
          </li>
          <li>
            <a href="/">Services</a>
          </li>
        </ul>

        <ul className="right-menu">
          <li>
            <a href="/">
              <i className="fas fa-search"></i>
            </a>
          </li>
          <li>
            <a href="/">
              <i className="fas fa-shopping-cart"></i>
            </a>
          </li>
        </ul>
      </nav>
    </NavbarWrapper>
  );
};

export default Navbar;

const NavbarWrapper = styled.nav`
  /* Navbar */
  width: 80%;
  margin: auto;
  .main-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;
    padding: 20px 0;
    font-size: 13px;

    .logo {
      width: 50px;
    }

    ul {
      display: flex;

      li {
        padding: 0 10px;

        a {
          padding-bottom: 2px;
        }
        && :hover {
          border-bottom: 2px solid #262626;
        }
      }

      .main-menu {
        flex: 1; /*moves the li items to the left*/
        margin-left: 20px; /*moves the li items away from the logo*/
      }
    }

    .menu-btn {
      cursor: pointer;
      position: absolute;
      top: 20px;
      right: 30px;
      z-index: 2;
      display: none;
    }

    .btn {
      cursor: pointer;
      display: inline-block;
      border: 0;
      font-weight: bold;
      padding: 10px 20px;
      background: #262626;
      color: #fff;
      font-size: 15px;
    }

    .btn:hover {
      opacity: 0.9;
    }

    .dark {
      color: #ffffff;
    }

    .dark .btn {
      background: #f4f4f4;
      color: #333333;
    }
  }
`;
