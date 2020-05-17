import React, { memo } from 'react'
import { Redirect } from 'react-router-dom'
import { useAuthState } from '../../context/AuthenticationContext'
import Dragons from '../Dragons/Dragons';
import DragonsProvider from '../../context/DragonsContext';

function ProtectedRoute() {
  const { loggedIn } = useAuthState()

  if ( loggedIn ) {
    return (
      <DragonsProvider>
        <Dragons />
      </DragonsProvider>
    )
  } else {
    return <Redirect to="/login" />
  }
}

export default memo( ProtectedRoute );
