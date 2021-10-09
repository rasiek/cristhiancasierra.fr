import { Link, graphql } from 'gatsby'
import * as React from 'react'
import Card from '../../components/Card'
import Layout from "../../components/layout"
import styled from 'styled-components'


const Wrapper = styled.div`
display: flex;
flex-direction: column;
width: 80vw;
margin: 20px 0;

    h1 {
        
    }
`

const Grid = styled.div`
    width: 80vw;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-self: center;

    @media screen and (max-width: 700px) {

    grid-template-columns: 1fr;
    width: 60vw;
    gap: 20px;
}
`

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