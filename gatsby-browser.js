import React, { Component } from "react"
import Index from "./src/pages"
import ContextWrapperProvider from "./src/contexts/ContextWrapper"

export const wrapPageElement = ({ element, props }) => {
  return <ContextWrapperProvider {...props}>{element}</ContextWrapperProvider>
}
