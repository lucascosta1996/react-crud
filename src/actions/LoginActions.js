import { useAuthDispatch } from '../context/AuthenticationContext';

export const Login = ( email, password ) => {
  const dispatch = useAuthDispatch();

  dispatch( {
    type: "LOG_IN",
    payload: {
      email,
      password
    }
  } )
}