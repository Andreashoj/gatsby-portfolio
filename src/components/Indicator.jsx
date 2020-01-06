import { navigate } from "gatsby"
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import {
  IndicatorAnimation,
  IndicatorAnimationPulsing,
} from "../styles/KeyFrames.js"

const Indicator = () => {
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    window.addEventListener("wheel", handleScroll)
  }, [])

  const handleScroll = () => {
    setScroll(true)
    setTimeout(() => {
      navigate("/projects")
    }, 1000)
  }

  return (
    <PageIndicator scroll={scroll}>
      <span></span>
    </PageIndicator>
  )
}

const PageIndicator = styled.span`
  position: absolute;
  left: calc(50% - 25px);
  top: 89%;
  height: 50px;
  width: 50px;
  background-color: #c4c4c4;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50% 50%;
  transition: all 0.5s ease;
  transform-origin: 50% 50%;
  transform: scale(1);
  animation: ${props =>
      props.scroll ? IndicatorAnimation : IndicatorAnimationPulsing}
    2s ease-in-out infinite;
  span {
    height: 15px;
    width: 15px;
    background-color: white;
    border-radius: 50% 50%;
  }
`

export default Indicator
