import React from "react"
import { AwesomeButton } from "react-awesome-button"
import "react-awesome-button/dist/styles.css"
import styled from "styled-components"
import Indicator from "../components/Indicator"
import Layout from "../layout/index.jsx"
import "../styles/index.css"

const Index = () => {
  return (
    <Layout>
      <IndexWrapper>
        <Header>
          <h1>Hi I'm Andreas</h1>
          <p>
            I sit at the computer most of the day <br /> writing code, it's
            fantastic!
          </p>
          <Button>
            <AwesomeButton type="primary" size="large">
              Look at my work
            </AwesomeButton>
          </Button>
        </Header>
        <Animation>Animation</Animation>
        <Indicator />
      </IndexWrapper>
    </Layout>
  )
}

const IndexWrapper = styled.div`
  width: 85%;
  display: flex;
  align-items: flex-end;
`

const Button = styled.div`
  button {
    margin-top: 20px;
  }
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%
  width: 50%;
  h1 {
    font-size: 60px;
  }
  p {
    font-size: 20px;
  }
`

const Animation = styled.div`
  height: 80%;
`

export default Index
