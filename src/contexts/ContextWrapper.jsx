import React, { createContext, useState } from "react"

export const ContextWrapper = createContext()

const ContextWrapperProvider = props => {
  const [theme, setTheme] = useState("light")
  const [spinner, setSpinner] = useState(true)

  return (
    <ContextWrapper.Provider value={{ theme, spinner, setSpinner }}>
      {props.children}
    </ContextWrapper.Provider>
  )
}

export default ContextWrapperProvider
