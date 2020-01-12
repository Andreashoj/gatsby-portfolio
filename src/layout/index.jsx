import React from "react"
import { animated, useTransition } from "react-spring"
import styled from "styled-components"
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"

export default ({ children }) => {
  const transitions = useTransition(children, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    onDestroyed: { opacity: 0 },
  })

  return (
    <div className="app-wrapper">
      <Navigation />
      <Wrapper>
        {transitions.map(({ item, key, props }) => (
          <Content key={key} style={props}>
            {item}
          </Content>
        ))}
      </Wrapper>
      <Footer />
    </div>
  )
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: calc(100vh - 90px);
`

const Content = styled(animated.div)`
  width: 85%;
`
