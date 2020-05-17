import React, { memo } from 'react'
import { Redirect } from 'react-router-dom'
import { useAuthState } from '../../context/AuthenticationContext'

function ProtectedRoute() {
  const { loggedIn } = useAuthState()

  if ( loggedIn ) {
    return (
      <div>
        <span>Protected Route</span>
      </div>
    )
  } else {
    return <Redirect to="/login" />
  }
}

export default memo( ProtectedRoute );
