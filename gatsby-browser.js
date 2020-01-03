import React, { Component } from "react"
import Index from "./src/pages"
import ContextWrapperProvider from "./src/contexts/ContextWrapper"

export const wrapPageElement = ({ element, props }) => {
  console.log("ho")
  return <ContextWrapperProvider {...props}>{element}</ContextWrapperProvider>
}
