import React, { Component } from "react"
import styled from "styled-components"
import github from "../assets/github_blue.svg"
import linkedin from "../assets/linkedin.svg"
import discord from "../assets/discord.svg"

const Form = () => {
  return (
    <ContactForm
      action="https://getform.io/f/10e74d12-253c-47d2-8204-235df94c8195"
      method="POST"
    >
      <div className="input-container">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
      </div>
      <div className="input-container">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
      </div>
      <div className="input-container">
        <label htmlFor="message">Message</label>
        <br />
        <textarea type="textarea" id="message" rows="10" />
      </div>
      <div className="contact-links">
        <button type="submit">Submit</button>
        <span className="divider"></span>
        <div className="contact-icons">
          <a href="#">
            <img src={github} alt="" />
          </a>
          <a href="#">
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
  width: 80%;
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
    }
    input,
    textarea {
      background-color: #eaecff;
      height: 40px;
      border-radius: 5px;
      border: none;
      margin: 5px 0 20px 0;
    }
  }
`

export default Form
