import React, { useContext } from "react"
import styled from "styled-components"
import { ContextWrapper } from "../contexts/ContextWrapper"
import Layout from "../layout"
import "../layout/index.css"

const Index = () => {
  const { theme } = useContext(ContextWrapper)

  return (
    <Layout>
      <IndexWrapper>
        <Header>
          <h1>Hi I'm Andreas</h1>
          <p>
            I sit at the computer most of the day <br /> writing code, it's
            fantastic!
          </p>
          <Button className="btn">
            <a href="#"> Look at my work</a>
          </Button>
        </Header>
        <Animation>Animation</Animation>
      </IndexWrapper>
    </Layout>
  )
}

const IndexWrapper = styled.div`
  width: 85%;
  display: flex;
  align-items: flex-end;
`

const Button = styled.button`
  width: 200px;
  height: 50px;
  margin-top: 15px;
  border: 1px solid;
  font-size: 16px;
  cursor: pointer;
  a {
    text-decoration: none;
    color: black;
  }
  &:hover {
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
`

const Animation = styled.div`
  height: 80%;
`

export default Index
