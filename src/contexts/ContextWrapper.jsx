import React, { createContext, useState } from "react"

export const ContextWrapper = createContext()

const ContextWrapperProvider = props => {
  const [count, setCount] = useState(1)
  console.log("yi")

  return (
    <ContextWrapper.Provider value={{ count }}>
      {props.children}
    </ContextWrapper.Provider>
  )
}

export default ContextWrapperProvider
