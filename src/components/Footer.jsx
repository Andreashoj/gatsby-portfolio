import React, { Component } from "react"
import styled from "styled-components"

const Footer = () => {
  return (
    <FooterComponent>
      <h3>{new Date().getFullYear()} ©</h3>
    </FooterComponent>
  )
}

const FooterComponent = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Footer
