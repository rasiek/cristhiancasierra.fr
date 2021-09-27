import * as React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'

const Project = ({ data }) => {
    return (
        <Layout pageTitle={data.contentfulProject.title}>
            <p>{data.contentfulProject.description}</p>
            <p>{data.contentfulProject.institution}</p>
            <p>{data.contentfulProject.subject}</p>
        </Layout>
    )
}


export const query = graphql`
    query ($id: String) {
    contentfulProject(id: {eq: $id}) {
        title
        description
        institution
        subject
        tecnologies
        slug
  }
}
`


export default Project