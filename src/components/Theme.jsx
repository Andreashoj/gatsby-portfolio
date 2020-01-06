import React, { useContext } from "react"
import styled from "styled-components"
import moon from "../assets/moon.svg"
import { ContextWrapper } from "../contexts/ContextWrapper"

const Theme = () => {
  const { theme, setTheme } = useContext(ContextWrapper)

  const handleTheme = () => {}

  return (
    <ThemeWrapper>
      <img src={moon} alt="" onClick={handleTheme} />
    </ThemeWrapper>
  )
}

const ThemeWrapper = styled.div`
  position: absolute;
  left: 95%;
  top: 93%;
  img {
    height: 50px;
    width: 50px;
  }
`

export default Theme
