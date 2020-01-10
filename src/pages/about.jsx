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
          <AboutText>
            <div>
              <Button href="">
                <span>Hobbies</span>
              </Button>

              <Button href="">
                <span>Career</span>
              </Button>
            </div>
            <div>
              <p>
                I spend a lot of time doing random things with my buddies and
                playing games. I also have a big family that I spend my time
                with. Other than that I enjoy working out and try to reach new
                personal heights :)
              </p>
            </div>
          </AboutText>
        </Header>
        <HeaderImage>
          <img src={AboutIllu} />
        </HeaderImage>
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

const Button = styled.a`
  color: black;
  display: inline-block;
  border: none;
  background-color: white;
  text-decoration: none;
  font-size: 20px;
  margin-bottom: 20px;
  margin-right: 20px;
  overflow: hidden;
  position: relative;
  span {
    display: inline-block;
    position: relative;
    transition: transform 0.2s ease;
    &::before {
      content: 'Career';
      color: white;
      background-color: black;
      position: absolute;
      overflow: hidden;
    top: 100%;
      font-weight: 600;
    }
    &:hover {
      transform: translateY(-100%);
    }
  }
}


`

const AboutText = styled.div`
  margin: 50px 0;
  p {
    font-size: 16px;
    width: 80%;
  }
`

const HeaderImage = styled.div`
  height: 80%;
  max-width: 50%;
  img {
    height: 50%;
    width: 100%;
  }
`

export default about
