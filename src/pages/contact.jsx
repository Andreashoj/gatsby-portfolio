import React, { useState } from "react"
import styled from "styled-components"
import ContactIllu from "../assets/contact_illustration.svg"
import Form from "../components/Form"
import { CopyToClipboard } from "react-copy-to-clipboard"
import Layout from "../layout"
import { CopyClipboard } from "../styles/KeyFrames"

const Contact = () => {
  const [clipboard, setClipboard] = useState({
    value: "",
    copied: false,
  })

  return (
    <Layout>
      <ContactContainer>
        <Header>
          <h1>Make contact!</h1>
          <p>
            Don’t hesistate to make contact, always looking for new interesting
            projects and people. Don’t like forms? Reach me at my{" "}
            <CopyToClipboard
              text="andrewhoj@gmail.com"
              onCopy={() => setClipboard({ copied: true })}
            >
              <EmailSpan clicked={clipboard.copied}>email</EmailSpan>
            </CopyToClipboard>
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
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  .form-wrapper {
    width: 50%;
    display: flex;
    justify-content: flex-end;
    height: 85%;
  }
  @media (max-width: 800px) {
    flex-direction: column;
    .form-wrapper {
      width: 100%;
    }
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
@media (max-width: 800px) {
  width: 100%;
  margin-top: 100px;
  p {
    width: 100%;
    margin-bottom: 20px;
  }
  img {
    display: none;
  }
}
`

const EmailSpan = styled.span`
  cursor: pointer;
  position: relative;
  &::before {
    content: "Email copied";
    transition: opacity 0.3s ease;
    position: absolute;
    padding: 10px;
    background-color: #eaecff;
    opacity: 0;
    top: -40px;
    left: -40px;
    width: 110px;
    border-radius: 5px;
    animation: ${props => (props.clicked ? CopyClipboard : null)} 2s;
  }
`

export default Contact
