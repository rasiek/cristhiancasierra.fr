import { ArrowRightAlt } from '@material-ui/icons'
import { Link } from 'gatsby'
import * as React from 'react'
import Card from './Card'
import { Grid, Wrapper } from './Showcase.style'

const Showcase = () => {

    return (
        <Wrapper>
            <h2 className="description">Je suis Cristhian Casierra, un designer doté d’une curiosité extreme et  passioné par la technologie et le <span>developpement.</span></h2>
            <h2 className="title">Projets</h2>
            <Grid>
                <Card
                    src="https://picsum.photos/800/600"
                    title="Lorem ipsum"
                    description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam"
                />
                <Card
                    src="https://picsum.photos/800/600"
                    title="Lorem ipsum"
                    description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam"
                />
                <Card
                    src="https://picsum.photos/800/600"
                    title="Lorem ipsum"
                    description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam"
                />
            </Grid>
            <Link to="/projets">Tous les projets <span><ArrowRightAlt /></span></Link>
        </Wrapper>
    )
}

export default Showcase