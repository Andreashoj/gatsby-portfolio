import { Link } from "gatsby"
import React from "react"
import { slide as Menu } from "react-burger-menu"

const MobileNavigation = () => {
  return (
    <div>
      <Menu styles={styles}>
        <Link id="home" className="menu-item" to="/">
          Home
        </Link>
        <Link id="about" className="menu-item" to="/about">
          About
        </Link>
        <Link id="contact" className="menu-item" to="/contact">
          Contact
        </Link>
      </Menu>
    </div>
  )
}

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
  },
  bmItem: {
    display: "inline-block",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
}

export default MobileNavigation
