import React from "react"
import styled from "styled-components"
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"
import Theme from "../components/Theme"

export default ({ children }) => (
  <div className="app-wrapper">
    <Navigation />
    <Wrapper>{children}</Wrapper>
    <Theme />
    <Footer />
  </div>
)

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: calc(100vh - 90px);
`
const ThemeWrapper = styled.div`
  position: absolute;
  left: 95%;
  top: 93%;
  img {
    height: 50px;
    width: 50px;
  }
`
