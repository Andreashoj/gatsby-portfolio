import React, { useState } from "react"
import styled from "styled-components"
import AboutIllu from "../assets/about_illustration.svg"
import Layout from "../layout"

const About = () => {
  const [show, setShow] = useState("career")

  return (
    <Layout>
      <AboutContainer activated={show}>
        <Header>
          <h1>About me</h1>
          <p>
            I’m a frontend developer that loves building stuff and strive to
            leave people in awe of my work.
          </p>
          <AboutText>
            <div>
              <Button onClick={() => setShow("hobbies")}>
                <span>Hobbies</span>
              </Button>

              <Button onClick={() => setShow("career")}>
                <span>Career</span>
              </Button>
            </div>
            <div>
              {show === "career" ? (
                <p>
                  At the moment i’m studying Webdevelopment at UCL, getting my
                  bachelor. I am very passionate about creating and learning new
                  things and I’ve found frontend development to be the perfect
                  fit for my needs. I started doing design, then slowly
                  progressed to coding with HTML/CSS/JS then took those skills
                  and moved on to React. The web is the perfect place to get
                  crazy creative with both design and code, that’s why I enjoy
                  it so much.{" "}
                </p>
              ) : (
                <p>
                  I spend a lot of time doing random things with my buddies and
                  playing games. I also have a big family that I spend my time
                  with. Other than that I enjoy working out and try to reach new
                  personal heights :)
                </p>
              )}
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
  max-width: 550px;
}
@media (max-width: 800px) {
  width: 100%;
  margin-top: 100px;
  p {
    width: 100%;
  }
}
`

const AboutContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  height: 100%;
  a:nth-of-type(1) {
    span {
      ${props =>
        props.activated === "hobbies"
          ? "transform: translateY(-100%) !important"
          : null}
      &::before {
        content: "Hobbies";
      }
    }
  }
  a:nth-of-type(2) {
    span {
      ${props =>
        props.activated === "career"
          ? "transform: translateY(-100%) !important"
          : null}
      &::before {
        content: "Career";
      }
      &:hover {
        transform: translateY(-100%);
      }
    }
  }
  @media (max-width: 800px) {
    flex-direction: column;
  }
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
  cursor: pointer;

  span {
    display: inline-block;
    position: relative;
    transition: transform 0.2s ease;
    &::before {
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
    max-width: 550px;
    @media (max-width: 800px) {
      width: 100%;
    }
  }
`

const HeaderImage = styled.div`
  height: 90%;
  width: 50%;
  img {
    height: 50%;
    width: 100%;
  }
  @media (max-width: 800px) {
    width: 100%;
    img {
      height: 100%;
      margin-bottom: 20px;
    }
  }
`

export default About
