import {useState} from 'react'

import {
  AppContainer,
  PasswordCard,
  PasswordHeading,
  PasswordDescription,
  PasswordInput,
  ErrorMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')

  const showErrorMsg = password.length < 8

  const onChangePassword = event => {
    setPassword(event.target.value)
  }

  return (
    <AppContainer>
      <PasswordCard>
        <PasswordHeading>Password Validator</PasswordHeading>
        <PasswordDescription>
          Check how strong and secure is your password
        </PasswordDescription>
        <PasswordInput
          type="password"
          onChange={onChangePassword}
          value={password}
        />
        {showErrorMsg && (
          <ErrorMsg>Your password must be at least 8 characters</ErrorMsg>
        )}
      </PasswordCard>
    </AppContainer>
  )
}
export default PasswordValidator
