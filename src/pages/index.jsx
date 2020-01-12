import React, { useContext } from "react"
import { AwesomeButton } from "react-awesome-button"
import "react-awesome-button/dist/styles.css"
import styled from "styled-components"
import HeaderIllu from "../assets/frontpage_illustration.svg"
import Indicator from "../components/Indicator"
import Spinner from "../components/spinner"
import { ContextWrapper } from "../contexts/ContextWrapper"
import Layout from "../layout/index.jsx"
import "../styles/index.css"

const Index = () => {
  const { spinner, setSpinner } = useContext(ContextWrapper)

  return (
    <>
      {spinner ? (
        <Spinner loading={spinner} setLoading={setSpinner} />
      ) : (
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
            <HeaderImage>
              <img src={HeaderIllu} />
            </HeaderImage>
            <Indicator />
          </IndexWrapper>
        </Layout>
      )}
    </>
  )
}

const IndexWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
`

const Button = styled.div`
  button {
    margin-top: 20px;
    span {
      font-weight: 400;
    }
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

const HeaderImage = styled.div`
  height: 80%;
  max-width: 50%;
  img {
    height: 50%;
    width: 100%;
  }
`

export default Index
