import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { user } from '../reducers/user'

const SIGNUP_URL = 'http://localhost:8080/users'
const LOGIN_URL = 'http://localhost:8080/sessions'

export const Login = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const accessToken = useSelector(store => store.user.login.accessToken)
  const returnError = useSelector (store => store.user.login.errorMessage) 
  const errorCreateUser = returnError === 'Could not create user' 
  const errorSignIn = returnError === 'User not found' 

  const handleSignUp = event => {
    event.preventDefault()

    fetch(SIGNUP_URL, {
      method: 'POST',
      body: JSON.stringify({ name, password }),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
    .then(json => {
      dispatch(user.actions.setAccessToken({ accessToken: json.accessToken }))
      dispatch(user.actions.setUserId({ userId: json.userId }))
      dispatch(user.actions.setErrorMessage({ errorMessage: json.message}))
      setName('')
      setPassword('')
    })
  }

  const handleLogin = event => {
    event.preventDefault()

    fetch(LOGIN_URL, {
      method: 'POST',
      body: JSON.stringify({ name, password }),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
    .then(json => {
      dispatch(user.actions.setAccessToken({ accessToken: json.accessToken }))
      dispatch(user.actions.setUserId({ userId: json.userId }))
      dispatch(user.actions.setErrorMessage({ errorMessage: json.message}))
      setName('')
      setPassword('')
    })
  }


  return (
    <LoginSection>
      {!accessToken &&
            <ErrorMessageSection>
            <SignupLoginSection>
            <InputSection>
              <label>
                <Input required minLength="3" type='text' placeholder='Name' value={name} onChange={event => setName(event.target.value)}/>
              </label>
              <label>
                <Input required minLength="3" type='password' placeholder='Password' value={password} onChange={event => setPassword(event.target.value)}/>
              </label>
            </InputSection>
            <ButtonSection>
              <Button type='submit' onClick={handleSignUp}>Sign Up</Button>
              <Button type='submit' onClick={handleLogin}>Log In</Button>
            </ButtonSection>
            </SignupLoginSection>
            {errorCreateUser && 'Could not create user, please try another username.'}
            {errorSignIn && 'Wrong username or password? Please try again.'}
            </ErrorMessageSection> }

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
const ErrorMessageSection = styled.div`
  display: flex;
  flex-direction: column;
`
const SignupLoginSection = styled.div`
  display: flex;
  flex-direction: row;
`
const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`
const Input = styled.input`
  margin: 2px;
  width: 100%;
  height: 20px;
`
const ButtonSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`
const Button = styled.button`
  width: 70px;
  margin: 2px 0 2px 20px;
  border-radius: 10px;
  cursor: pointer;
`
