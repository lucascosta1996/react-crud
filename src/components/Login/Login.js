import React from 'react'
import { Redirect } from 'react-router-dom'
import { useAuthState } from '../../context/AuthenticationContext'
import useForm from '../../hooks/useForm'
import { Login } from '../../actions/LoginActions'

function LoginForm( ) {
  const { values, handleChange, handleSubmit } = useForm( handleLogin )
  const { loggedIn, users } = useAuthState()

  function handleLogin() {
    const { email, password } = values

    const isUserValid =  users.find( user => ( email === user.email && password === user.password ) )

    if( isUserValid ) {
      Login( email, password );
    } else {
      alert( 'Email or password is incorrect' );
    }
  }

  if( loggedIn ) return <Redirect to="/" />

  return (
    <form onSubmit={ handleSubmit }>
      <div>
      <input
          className="input"
          id="email-input"
          name="email"
          onChange={ handleChange }
          type="text"
          value={ values.email }
        />
      </div>
      <div>
        <label className="label">Password</label>
        <input
          className="input"
          id="password-input"
          name="password"
          onChange={ handleChange }
          type="password"
          value={ values.password }
        />
      </div>
    </form>
  )
}

export default LoginForm
