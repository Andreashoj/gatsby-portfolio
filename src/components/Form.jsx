import React from "react"
import styled from "styled-components"
import discord from "../assets/discord.svg"
import github from "../assets/github_blue.svg"
import linkedin from "../assets/linkedin.svg"

const Form = () => {
  return (
    <ContactForm
      action="https://getform.io/f/10e74d12-253c-47d2-8204-235df94c8195"
      method="POST"
      enctype="multipart/form-data"
    >
      <div className="input-container">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
      </div>
      <div className="input-container">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
      </div>
      <div className="input-container">
        <label htmlFor="message">Message</label>
        <br />
        <textarea type="textarea" id="message" rows="10" name="message" />
      </div>
      <div className="contact-links">
        <button type="submit">Send</button>
        <span className="divider"></span>
        <div className="contact-icons">
          <a href="https://github.com/andreashoj" target="_blank">
            <img src={github} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/andreas-h%C3%B8j-a9838514b/"
            target="_blank"
          >
            <img src={linkedin} alt="" />
          </a>
          <a href="#">
            <img src={discord} alt="" />
          </a>
        </div>
      </div>
    </ContactForm>
  )
}

const ContactForm = styled.form`
  height: 80%;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  align-items: center;
  input {
    width: 100%;
  }
  .contact-links {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    .divider {
      height: 30px;
      width: 4px;
      background-color: #6c63ff;
      border-radius: 2px;
    }
  }
  button {
    background-color: #6c63ff;
    width: 35%;
    color: white;
    height: 40px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
  }
  .contact-icons {
    img {
      height: 45px;
      width: 45px;
      margin: 0 10px;
    }
  }
  .input-container {
    width: 100%;
    label {
      font-size: 18px;
      color: #8a8a8a;
      margin-bottom: 5px;
    }
    textarea {
      width: 100%;
      height: 150px !important;
      padding-top: 10px;
    }
    input,
    textarea {
      background-color: #eaecff;
      height: 40px;
      border-radius: 5px;
      border: none;
      margin: 5px 0 20px 0;
      text-indent: 15px;
    }
  }
  @media (max-width: 1920) {
    .form-wrapper {
      max-width: 1000px;
    }
  }
  @media (max-width: 800px) {
    max-width: 100%;
    .contact-links {
      flex-direction: column;
      span {
        display: none;
      }
      button {
        width: 100%;
        margin-bottom: 20px;
      }
    }
  }
`

export default Form
