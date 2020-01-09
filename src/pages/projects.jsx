import React, { useState } from "react"
import Layout from "../layout"
import Project from "../components/Project"
import styled from "styled-components"
import github from "../assets/github.svg"
import css from "../assets/css.svg"
import react from "../assets/react.svg"
import node from "../assets/node.svg"
import sass from "../assets/sass.svg"
import html from "../assets/html.svg"
import stackit from "../assets/stackit.svg"

const Projects = () => {
  const [projects] = useState([
    {
      name: "Stackit",
      description: "blabla",
      image: stackit,
      backgroundColor: "#343434",
      github: {
        link: "https://github.com/Andreashoj/stackit-test",
        icon: github,
      },
      icons: [css, html, sass, react],
    },
    {
      name: "Project 1",
      description: "blabla",
      image: "",
      backgroundColor: "#262626",
      github: { link: "www.linkedin.com", icon: github },
      icons: [github],
    },
    {
      name: "Project 1",
      description: "blabla",
      image: "",
      backgroundColor: "#",
      github: { link: "www.linkedin.com", icon: github },
      icons: [github],
    },
    {
      name: "Project 1",
      description: "blabla",
      image: "",
      backgroundColor: "#119DA4",
      github: { link: "www.linkedin.com", icon: github },
      icons: [github],
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
              return <Project project={project} />
            })}
          </ProjectsWrapper>
        </Wrapper>
      </ProjectsContainer>
    </Layout>
  )
}

const ProjectsContainer = styled.div`
  width: 85%;
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
  }
`

const ProjectsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  height: 70%;
`

export default Projects
