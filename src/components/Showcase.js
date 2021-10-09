import { ArrowRightAlt } from '@material-ui/icons'
import { graphql, Link, useStaticQuery } from 'gatsby'
import * as React from 'react'
import Card from './Card'
import { Grid, Wrapper } from './Showcase.style'

const Showcase = () => {

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    const data = useStaticQuery(graphql`
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
    `)

    shuffleArray(data.allContentfulProject.nodes)
    const shuffleData = data.allContentfulProject.nodes.slice(0, 3)


    return (
        <Wrapper>
            <h2 className="description">Je suis Cristhian Casierra, un designer doté d’une curiosité extreme et  passioné par la technologie et le <span>developpement.</span></h2>
            <h2 className="title">Projets</h2>
            <Grid>
                {shuffleData.map(node => {
                    return (
                        <Card
                            key={node.id}
                            src={node.heroPic.file.url}
                            title={node.title}
                            description={node.description}
                        />
                    )
                })
                }

            </Grid>
            <Link to="/projets">Tous les projets <span><ArrowRightAlt /></span></Link>
        </Wrapper>
    )
}

export default Showcase