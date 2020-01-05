import React from "react"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import styled from "styled-components"
import Theme from "../components/Theme"

export default ({ children }) => (
  <div className="app-wrapper">
    <Navigation />
    <Wrapper>
      <div>{children}</div>
    </Wrapper>
    <Theme />
    <Footer />
  </div>
)

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  div {
    width: 85%;
    height: calc(100vh - 90px);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
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
