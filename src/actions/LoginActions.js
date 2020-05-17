export const LoginAction = ( email, password, dispatch ) => {
  dispatch( {
    type: "LOG_IN",
    payload: {
      email,
      password
    }
  } )
}