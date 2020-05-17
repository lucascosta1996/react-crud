import React, { useEffect, useContext, Fragment } from 'react'
import { ModalProvider } from "react-modal-hook"
import { DragonsContext } from '../../context/DragonsContext' 
import Dragon from './Dragon'

function DragonsList() {
  const context = useContext( DragonsContext )
  
  useEffect( () => {
    context.dragons.set();
  }, [] )

  if ( context.loading.get ) return <div>Loading</div>

  return (
    <ModalProvider>
      <ul>
        <DragonsContext.Consumer>
          {
            (context) => {
              const dragons = context.dragons.get
              return (
                <Fragment>
                  {
                    dragons.map( ( dragon ) => (
                      <Dragon dragon={ dragon } />
                    ) )
                  }
                </Fragment>
              )
            }
          }
        </DragonsContext.Consumer>
      </ul>
    </ModalProvider>
  )
}

export default DragonsList
