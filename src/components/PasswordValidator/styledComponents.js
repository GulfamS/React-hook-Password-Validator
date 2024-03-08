import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #24263c;
  height: 100vh;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const PasswordCard = styled.div`
  background-color: #383a4e;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  border-radius: 6px;
`
export const PasswordHeading = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 35px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 0px;
`
export const PasswordDescription = styled.p`
  font-family: 'Roboto';
  color: #f8fafc;
  font-size: 12px;
  text-align: center;
  margin-bottom: 30px;
`
export const PasswordInput = styled.input`
  border: none;
  outline: none;
  background-color: #edeeff;
  padding: 6px;
  width: 300px;
`
export const ErrorMsg = styled.p`
  font-family: 'Roboto';
  color: #ef4444;
  text-align: center;
  font-size: 10px;
`
