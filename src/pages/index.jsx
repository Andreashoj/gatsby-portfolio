import React, { useContext } from "react"
import Layout from "../layout"
import "../layout/index.css"
import { ContextWrapper } from "../contexts/ContextWrapper"

const Index = () => {
  const { count } = useContext(ContextWrapper)
  console.log(count)
  return <Layout>asd</Layout>
}

export default Index
