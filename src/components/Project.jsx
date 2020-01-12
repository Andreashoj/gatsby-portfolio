import React from "react"
import styled from "styled-components"

const Project = ({ project }) => {
  console.log(project.image)
  return (
    <ProjectContainer backgroundColor={project.backgroundColor}>
      <img src={project.image} alt="" className="project-logo" />
      <div className="card-wrapper">
        <div className="card-container">
          <div className="card-details">
            <div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
            <a href={project.github.link} target="_blank">
              <img src={project.github.icon} className="github-link" />
            </a>
          </div>
          <div className="icon-wrapper">
            {project.icons.map(icon => (
              <img src={icon} className="technology-icon" />
            ))}
          </div>
        </div>
      </div>
    </ProjectContainer>
  )
}

const ProjectContainer = styled.div`
  position: relative;
  width: 23%;
  display: flex;
  justify-content: center;
  height: 85%;
  border-radius: 10px;
  background-color: ${props => props.backgroundColor};
  transition: all 0.3s ease;
  overflow: hidden;
  .project-logo {
    width: 80%;
    height: 100px;
    margin-top: 30px;
  }

  &:hover {
    transform: scale(1.05);
    div {
      top: 70%;
    }
  }

  .card-wrapper {
    position: absolute;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    top: 100%;
    height: 30%;
    width: 100%;
    background-color: #6c63ff;
    z-index: 1;
    transition: all 0.3s ease;
    color: white;
    .card-details {
      padding: 10px 10px 5px 10px;
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
    .card-container {
      height: 100%;
      padding: 15px;
    }
    .github-link {
      height: 35px;
      padding: 0 20px 0 0;
    }
    .technology-icon {
      height: 30px;
      width: 30px;
      margin-left: 10px;
    }
    .icon-wrapper {
      display: flex;
    }
  }

  @media (min-width: 1600px) {
    &:hover {
      transform: scale(1.05);
      div {
        top: 73%;
      }
    }
    .card-wrapper {
      height: 27%;
    }
  }

  @media (min-width: 2200px) {
    &:hover {
      transform: scale(1.05);
      div {
        top: 80%;
      }
    }
    .card-wrapper {
      height: 20%;
    }
  }
`

export default Project