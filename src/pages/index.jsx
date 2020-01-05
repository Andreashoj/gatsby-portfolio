import React, { useContext } from "react"
import Layout from "../layout"
import "../layout/index.css"
import { ContextWrapper } from "../contexts/ContextWrapper"

const Index = () => {
  const { theme } = useContext(ContextWrapper)

  return <Layout>asd</Layout>
}

export default Index
