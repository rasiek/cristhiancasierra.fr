import { useStaticQuery, graphql } from 'gatsby'
import * as React from 'react'
import { Helmet } from 'react-helmet'
import Footer from './Footer'
import { Body, Wrapper } from './layout.style'
import Navbar from './Navbar'
import Favicon from '../images/favicon.ico'
import { createGlobalStyle } from 'styled-components'
import { theme } from './Theme'
import { ThemeProvider } from '@material-ui/styles'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TextField } from '@material-ui/core'
import { Email } from '@material-ui/icons'


const GlobalStyle = createGlobalStyle`
    body {
        background-color: #eeeeee;
        margin: 0;
        overflow-x: hidden;
    }
    .drawer {

        ul {
        list-style: none;
        margin: 20px 40px auto 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        height: 20vh;
        text-transform: uppercase;
        font-weight: 600;
        }
    }

    h1, h2, h3, h4 {
        font-family: 'Patua One', sans-serif;
    }

    p, span, a {
        font-family: 'Reem Kufi', sans-serif;
    }

    a {
        text-decoration: none;
    }
`


const Layout = ({ pageTitle, children }) => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    const [open, setOpen] = React.useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleSubmit = () => {
        setOpen(false)
    }



    return (
        <>
            <Helmet>
                <title>{pageTitle} | {data.site.siteMetadata.title}</title>
                <link rel="icon" href={Favicon}></link>
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
                <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;700&family=Patua+One&?family=Reem+Kufi:wght@400;500;700&display=swap" rel="stylesheet"></link>
            </Helmet>

            <Dialog open={open}
                onClick={handleClickOpen}>

                <DialogTitle>Formulaire de Contact</DialogTitle>

                <DialogContent d>
                    <TextField
                        margin="dense"
                        id="name"
                        label="Nom"
                        type="text"
                        variant="standard"
                        required />

                    <TextField
                        margin="dense"
                        id="email"
                        label="Adresse email"
                        type="email"
                        variant="standard"
                        required
                        style={{ marginLeft: 20 }}
                    />
                    <TextField
                        margin="dense"
                        id="objet"
                        label="Sujet"
                        type="text"
                        fullWidth
                        variant="standard" />

                    <TextField
                        margin="dense"
                        aria-label="message"
                        multiline
                        label="Message"
                        id="message"
                        minRows="5"
                        placeholder="Écrire votre message ici..."
                        fullWidth
                        required
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSubmit}>Envoyer</Button>
                </DialogActions>

            </Dialog>

            <ThemeProvider theme={theme} >
                <React.Fragment>
                    <GlobalStyle />
                    <Wrapper>
                        <IconButton className="contact-btn" onClick={handleClickOpen}>
                            <Email />
                        </IconButton>
                        <Navbar modalOpen={handleClickOpen} />
                        <Body>
                            {children}
                        </Body>
                        <Footer />
                    </Wrapper>
                </React.Fragment>
            </ThemeProvider>
        </>
    )
}

export default Layout