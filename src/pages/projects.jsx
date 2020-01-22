import React, { useState } from "react"
import styled from "styled-components"
import css from "../assets/css.svg"
import github from "../assets/github.svg"
import html from "../assets/html.svg"
import react from "../assets/react.svg"
import sass from "../assets/sass.svg"
import stackit from "../assets/stackit.svg"
import modals from "../assets/modals.svg"
import Project from "../components/Project"
import Layout from "../layout"

const Projects = () => {
  const [projects] = useState([
    {
      name: "Stackit",
      description: "Robot Management",
      image: stackit,
      backgroundColor: "#343434",
      github: {
        link: "https://github.com/Andreashoj/stackit-test",
        icon: github,
      },
      icons: [
        { technology: "css", img: css },
        { technology: "html", img: html },
        { technology: "sass", img: sass },
        { technology: "react", img: react },
      ],
      live: "https://jovial-wiles-9376eb.netlify.com/",
    },
    {
      name: "Dashboard",
      description: "Oauth dashboard",
      image: "",
      backgroundColor: "#262626",
      github: { link: "www.linkedin.com", icon: github },
      icons: [{ technology: "github", img: github }],
      live: "",
    },
    {
      name: "Budget Calculator",
      description: "CRUD budget calculator",
      image: "",
      backgroundColor: "#F6F6F6",
      github: {
        link: "https://github.com/Andreashoj/budget-calculator",
        icon: github,
      },
      icons: [
        { technology: "html", img: html },
        { technology: "css", img: css },
        { technology: "react", img: react },
      ],
      live: "https://eloquent-turing-22c799.netlify.com/",
    },
    {
      name: "Modals",
      description: "Images and modals",
      image: modals,
      backgroundColor: "#119DA4",
      github: {
        link: "https://github.com/Andreashoj/mt-frontend-challenge",
        icon: github,
      },
      icons: [
        { technology: "html", img: html },
        { technology: "css", img: css },
        { technology: "react", img: react },
      ],
      live: "https://mt-frontend-challenge.herokuapp.com/",
    },
  ])

  return (
    <Layout>
      <ProjectsContainer>
        <Wrapper>
          <Header>
            <h1>Projects</h1>
            <p>
              Visit the github links for a detailed description of the project.
            </p>
          </Header>
          <ProjectsWrapper>
            {projects.map(project => {
              return <Project project={project} key={project.name} />
            })}
          </ProjectsWrapper>
        </Wrapper>
      </ProjectsContainer>
    </Layout>
  )
}

const ProjectsContainer = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: flex-end;
`

const Wrapper = styled.div`
  height: 90%;
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  h1 {
    font-size: 60px;
  }
  p {
    font-size: 20px;
    width: 70%;
  }
  @media (max-width: 800px) {
    width: 100%;
    p {
      width: 100%;
    }
  }
`

const ProjectsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  height: 70%;
  flex-wrap: wrap;
  @media (max-width: 800px) {
    height: 100%;
  }
`

export default Projects
