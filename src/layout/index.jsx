import React from "react"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import styled from "styled-components"

export default ({ children }) => (
  <div className="app-wrapper">
    <Navigation />
    <Wrapper>
      <div>{children}</div>
    </Wrapper>
    <Footer />
  </div>
)

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  div {
    width: 85%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
