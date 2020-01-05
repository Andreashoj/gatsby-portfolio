import React, { createContext, useState } from "react"

export const ContextWrapper = createContext()

const ContextWrapperProvider = props => {
  const [theme, setTheme] = useState("light")
  console.log("yi")

  return (
    <ContextWrapper.Provider value={{ theme }}>
      {props.children}
    </ContextWrapper.Provider>
  )
}

export default ContextWrapperProvider
