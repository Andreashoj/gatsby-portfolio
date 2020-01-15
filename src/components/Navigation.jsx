import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import logo from "../assets/logo.svg"
import MobileNav from "../components/MobileNavigation"
import "../styles/index.css"
import useWidth from "./hooks/useWidth"

const Navigation = () => {
  const width = useWidth()

  return width < 1000 ? (
    <MobileNav />
  ) : (
    <Nav>
      <div className="nav-container">
        <Link to="/" className="logo">
          <img src={logo} alt="Logo that says Andreas Høj" />
        </Link>
        <NavLinks>
          <Link to="/projects">
            <span>Projects</span>
          </Link>
          <Link to="/about">
            <span>About</span>
          </Link>
          <Link to="/contact">
            <span>Contact</span>
          </Link>
        </NavLinks>
      </div>
    </Nav>
  )
}

const Nav = styled.nav`
  height: 70px;
  justify-content: center;
  display: flex;
  border-bottom: 0.5px solid #c8c8c8;
  .nav-container {
    width: 85%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .logo {
    height: 24px;
  }
`

const NavLinks = styled.div`
  list-style-type: none;
  height: 19.2px;
  a {
    text-decoration: none;
    display: inline-block;
    color: black;
    font-size: 1.2rem;
    margin-right: 40px;
    overflow: hidden;
    padding-top: 1px;
    span {
      display: inline-block;
      position: relative;
      transition: transform 0.2s ease;
      &:hover {
        transform: translateY(-100%);
      }
    }
  }

  a span {
    &::before {
      position: absolute;
      overflow: hidden;
      top: 100%;
      font-weight: 600;
    }
  }
  a:nth-child(1) span {
    &::before {
      content: "Projects";
    }
  }
  a:nth-child(2) span {
    &::before {
      content: "About";
    }
  }
  a:nth-child(3) {
    margin-right: 0;
    span {
      &::before {
        content: "Contact";
      }
    }
  }
`

export default Navigation
