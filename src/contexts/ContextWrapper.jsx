import React, { createContext, useState } from "react"

const defaultState = {
  spinner: true,
}

export const ContextWrapper = createContext(defaultState)

const ContextWrapperProvider = props => {
  const [spinner, setSpinner] = useState(true)

  return (
    <ContextWrapper.Provider value={{ spinner, setSpinner }}>
      {props.children}
    </ContextWrapper.Provider>
  )
}

export default ContextWrapperProvider
