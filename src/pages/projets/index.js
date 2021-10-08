import { Link, graphql } from 'gatsby'
import * as React from 'react'
import Card from '../../components/Card'
import Layout from "../../components/layout"
import { Wrapper, Grid } from './index.style'

const ProjetsPage = ({ data }) => {




    return (
        <Layout pageTitle="Projets">

            <Wrapper>
                <h1>Projets</h1>

                <Grid>

                    {
                        data.allContentfulProject.nodes.map(node => (
                            <Link
                                key={node.id}
                                to={`/projets/${node.slug}`}>
                                <Card
                                    key={node.id}
                                    src={node.heroPic.file.url}
                                    title={node.title}
                                    description={node.description}
                                />
                            </Link>

                        ))
                    }

                </Grid>
            </Wrapper>
        </Layout>
    )
}

export const query = graphql`
    query {
        allContentfulProject {
            nodes {
                title
                description
                id
                slug
                heroPic {
                    file {
                        url
                    }
                }
            }
        }
    }
`

export default ProjetsPage