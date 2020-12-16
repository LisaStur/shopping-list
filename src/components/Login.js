import React, { useState } from 'react'
import styled from 'styled-components'

const SIGNUP_URL = 'http://localhost:8080/users'
const LOGIN_URL = 'http://localhost:8080/sessions'

export const Login = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const handleSignUp = event => {
    event.preventDefault()

    fetch(SIGNUP_URL, {
      method: 'POST',
      body: JSON.stringify({ name, password }),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
    .then(json => console.log(json))
  }

  const handleLogin = event => {
    event.preventDefault()

    fetch(LOGIN_URL, {
      method: 'POST',
      body: JSON.stringify({ name, password }),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
    .then(json => console.log(json))
  }


  return (
    <LoginSection>
      <InputSection>
        <label>
          <input required minLength="3" type='text' placeholder='Name' value={name} onChange={event => setName(event.target.value)}/>
        </label>
        <label>
          <input required minLength="3" type='password' placeholder='Password' value={password} onChange={event => setPassword(event.target.value)}/>
        </label>
      </InputSection>
      <ButtonSection>
        <Button type='submit' onClick={handleSignUp}>Sign Up</Button>
        <Button type='submit' onClick={handleLogin}>Log In</Button>
      </ButtonSection>
    </LoginSection>
  )
}

const LoginSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 5px;
`
const InputSection = styled.div`
  display: flex;
  flex-direction: column;
`
const ButtonSection = styled.div`
  display: flex;
  flex-direction: row;
`
const Button = styled.button`
  background-color: #c77762;
  border: none;
  color: white;
  padding: 5px;
  height: 60px;
  width: 60px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 5px;
  cursor: pointer;
  border-radius: 50%;
`
