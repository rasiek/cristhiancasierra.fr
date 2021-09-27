import * as React from 'react'
import { Content, Wrapper } from "./Footer.style"
import LogoImg from '../images/cristhian-casierra.png'
import { Link } from 'gatsby'
import { IconButton } from '@material-ui/core'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GatsbyLogo from '../images/icon.png'


const Footer = () => {

    return (
        <Wrapper>
            <Content>

                <img
                    src={LogoImg}
                    alt="Cristhian Casierra logo"
                />

                <div>
                    <h4>Reseaux Sociaux</h4>
                    <div>
                        <IconButton>
                            <GitHubIcon fontSize="large" color="secondary" />
                        </IconButton>

                        <IconButton>
                            <LinkedInIcon fontSize="large" color="secondary" />
                        </IconButton>

                    </div>
                </div>
                <div>
                    <p>Cristhian Casierra 2021<br />Made with <a href="https://www.gatsbyjs.com" target="_blank" rel="noreferrer"><img src={GatsbyLogo} alt="Gatsby logo" /></a></p>

                </div>
                <ul>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><hr /></li>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/a-propos">À propos</Link></li>
                    <li><Link to="/projets">Projets</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>

            </Content>

        </Wrapper>
    )
}

export default Footer