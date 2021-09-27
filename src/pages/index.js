import * as React from "react"
import Landing from "../components/Landing"
import Layout from "../components/layout"
import Showcase from "../components/Showcase"
import Works from "../components/Works"


const IndexPage = () => {
  return (
    <Layout pageTitle="Accueil">
      <Landing />
      <Showcase />
      <Works />
    </Layout>
  )
}

export default IndexPage
