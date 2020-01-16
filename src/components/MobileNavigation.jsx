import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { stack as Menu } from "react-burger-menu"
import discord from "../assets/discord_white.svg"
import github from "../assets/github.svg"
import linkedin from "../assets/linkedin_white.svg"

const MobileNavigation = () => {
  return (
    <div>
      <Menu styles={styles}>
        <Title styles={"font-weight: 400 !important"}>
          Hi, learn more about me!
        </Title>
        <Link id="home" className="menu-item" to="/">
          Home
        </Link>
        <Link id="home" className="menu-item" to="/projects">
          Projects
        </Link>
        <Link id="about" className="menu-item" to="/about">
          About
        </Link>
        <Link id="contact" className="menu-item" to="/contact">
          Contact
        </Link>
        <ContactIcons>
          <h2>Make contact!</h2>
          <a href="#">
            <img src={github} alt="" />
          </a>
          <a href="#">
            <img src={linkedin} alt="" />
          </a>
          <a href="#">
            <img src={discord} alt="" />
          </a>
        </ContactIcons>
      </Menu>
    </div>
  )
}

const ContactIcons = styled.div`
  margin-top: auto !important;
  margin-bottom: 50px !important;
  h2 {
    font-size: 20px;
    padding-bottom: 15px;
    padding-left: 10px;
  }
  img {
    height: 45px;
    width: 45px;
    margin: 0 10px;
  }
`

const Title = styled.h1`
  font-weight: 400 !important;
  padding-bottom: 20px;
  border-bottom: 2px solid #fff;
  color: #f6f6f6 !important;
`

var styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    right: "36px",
    top: "36px",
  },
  bmBurgerBars: {
    background: "#6C63FF",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#FFF",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    background: "#6C63FF",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#6C63FF",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
    display: "flex",
    flexDirection: "column",
  },
  bmItem: {
    display: "inline-block",
    margin: "10px 0",
    fontWeight: "600",
    textDecoration: "none",
    color: "white",
    fontSize: "30px",
    outline: "none",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
}

export default MobileNavigation
