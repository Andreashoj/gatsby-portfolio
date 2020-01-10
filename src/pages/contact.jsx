import React, { Component } from "react"
import Layout from "../layout"
import styled from "styled-components"
import ContactIllu from "../assets/contact_illustration.svg"
import Form from "../components/Form"

const contact = () => {
  return (
    <Layout>
      <ContactContainer>
        <Header>
          <h1>Make contact!</h1>
          <p>
            Don’t hesistate to make contact, always looking for new interesting
            projects and people. Don’t like forms? Send an <span>email</span>
          </p>
          <img src={ContactIllu} alt="" />
        </Header>
        <div className="form-wrapper">
          <Form />
        </div>
      </ContactContainer>
    </Layout>
  )
}

const ContactContainer = styled.div`
  width: 85%;
  display: flex;
  align-items: flex-end;
  .form-wrapper {
    width: 50%;
    display: flex;
    justify-content: flex-end;
    height: 85%;
  }
`

const Header = styled.div`
display: flex;
flex-direction: column;
height: 90%
width: 50%;
h1 {
  font-size: 60px;
}
p {
  font-size: 18px;
  width: 80%;
  span {
    text-decoration: underline;
  }
}
img {
  height: 80%;
  width: 80%;
}
`

export default contact
