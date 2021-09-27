import { Link, graphql } from 'gatsby'
import * as React from 'react'
import Layout from "../../components/layout"

const ProjetsPage = ({ data }) => {
    return (
        <Layout pageTitle="Projets">
            <h1>Projets</h1>

            <ul>
                {
                    data.allContentfulProject.nodes.map(node => (
                        <article key={node.id}>
                            <h3>
                                <Link to={`/projets/${node.slug}`}>
                                    {node.title}
                                </Link>
                            </h3>
                        </article>
                    ))
                }
            </ul>
        </Layout>
    )
}

export const query = graphql`
    query {
        allContentfulProject {
            nodes {
                title
                id
                slug
            }
        }
    }
`

export default ProjetsPage