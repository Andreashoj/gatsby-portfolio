import React, { Component } from "react"
import Layout from "../layout"
import styled from "styled-components"
import AboutIllu from "../assets/about_illustration.svg"

const about = () => {
  return (
    <Layout>
      <AboutContainer>
        <Header>
          <h1>About me</h1>
          <p>
            I’m a frontend developer that loves building stuff and strive to
            leave people in awe of my work.
          </p>
        </Header>
      </AboutContainer>
    </Layout>
  )
}

const Header = styled.div`
display: flex;
flex-direction: column;
height: 90%
width: 50%;
h1 {
  font-size: 60px;
}
p {
  font-size: 20px;
  width: 80%;
}
`

const AboutContainer = styled.div`
  width: 85%;
  display: flex;
  align-items: flex-end;
`

export default about
