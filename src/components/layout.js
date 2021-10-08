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
import { Button, IconButton, Modal, TextField, Box, FormControl, InputLabel, Input } from '@material-ui/core'
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


const Layout = ({ pageTitle, children, isOpen }) => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    const [openModal, setOpenModal] = React.useState(false)



    const handleClickOpen = () => {
        setOpenModal(true)
    }

    const handleSubmit = (evt) => {

        evt.preventDefault()
        setOpenModal(false)
    }
    const handleClose = () => {

        console.log("inside habdleClose")
        setOpenModal(false)
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

            <Modal
                open={openModal}
                onClose={handleClose}>

                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    id="contact-form"
                    method="POST"
                    sx={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        gridTemplateRows: "repeat(5,1fr)",
                        background: "#eee",
                        width: "500px",
                        margin: '20px auto',
                        height: "60vh",
                        borderRadius: "10px"
                    }}>


                    <h1 style={{
                        gridColumn: 'span 2',
                        margin: '0 20px'
                    }}>
                        Formulaire de Contact</h1>

                    <FormControl style={{
                        margin: '0 20px'
                    }}>
                        <InputLabel htmlFor="lastname">Nom</InputLabel>
                        <Input id="lastname" aria-describedby="nom" required />
                    </FormControl>

                    <FormControl style={{
                        margin: '0 20px'
                    }}>
                        <InputLabel htmlFor="firstname">Prénom</InputLabel>
                        <Input id="firstname" aria-describedby="prenom" required />
                    </FormControl>

                    <FormControl style={{
                        gridColumn: 'span 2',
                        margin: '0 20px'
                    }}>
                        <InputLabel htmlFor="email">Email</InputLabel>
                        <Input id="email" aria-describedby="email" required />
                    </FormControl>

                    <FormControl style={{
                        gridColumn: 'span 2',
                        margin: '0 20px'
                    }}>
                        <InputLabel htmlFor="object">Sujet</InputLabel>
                        <Input id="object" aria-describedby="object" />
                    </FormControl>

                    <FormControl style={{
                        gridColumn: 'span 2',
                        margin: '0 20px'
                    }}>
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
                    </FormControl>
                    <Button
                        type="submit"
                        style={{
                            gridColumn: 'span 2',
                            margin: 'auto'
                        }}>
                        Envoyer
                    </Button>
                </Box>

            </Modal>

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