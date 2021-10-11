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
import { Button, IconButton, Modal, TextField, Box, FormControl, InputLabel, Input, Snackbar } from '@material-ui/core'
import { Email } from '@material-ui/icons'
import { Alert } from '@material-ui/lab'


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

    const [state, setState] = React.useState({
        lastname: '',
        firstname: '',
        email: '',
        object: '',
        message: '',
    })

    const [openSnack, setOpenSnack] = React.useState(false)
    const [openErrorSnack, setOpenErrorSnack] = React.useState(false)
    const [openModal, setOpenModal] = React.useState(false)
    const encode = data => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
            .join('&')
    }

    const GETFORM_ENDPOINT = "https://getform.io/f/baadc445-240d-495e-936c-689a0e48a51a"

    const handleSnackClose = () => {
        setOpenSnack(false)
    }

    const handleErrorSnackClose = () => {
        setOpenErrorSnack(false)
    }

    const handleErrorSnackOpen = () => {
        setOpenErrorSnack(true)
    }


    const handleClickOpen = () => {
        setOpenModal(true)
    }

    const handleSnackOpen = () => {
        setOpenSnack(true)
    }

    const handleSubmit = (evt) => {

        fetch(GETFORM_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({ 'form-name': 'contact', ...state }),
        })
            .then(() => handleSnackOpen())
            .catch(() => handleErrorSnackOpen())

        console.log(state)
        evt.preventDefault()

        handleClose()
    }

    const handleChange = e => setState({ ...state, [e.target.name]: e.target.value })

    const handleClose = () => {

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

            <Snackbar open={openSnack} autoHideDuration={6000} onClose={handleSnackClose}>
                <Alert onClose={handleSnackClose} severity="success" >
                    Formulaire envoyé!
                </Alert>
            </Snackbar>

            <Snackbar open={openErrorSnack} autoHideDuration={6000} onClose={handleErrorSnackClose}>
                <Alert onClose={handleErrorSnackClose} severity="error" >
                    Quelque chose s'est mal passé...
                </Alert>
            </Snackbar>

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

                    <input type="hidden" name="form-name" value="contact" />
                    <h1 style={{
                        gridColumn: 'span 2',
                        margin: '0 20px'
                    }}>
                        Formulaire de Contact</h1>

                    <FormControl style={{
                        margin: '0 20px'
                    }}>
                        <InputLabel htmlFor="lastname">Nom</InputLabel>
                        <Input name="lastname" id="lastname" aria-describedby="nom" onChange={handleChange} required />
                    </FormControl>

                    <FormControl style={{
                        margin: '0 20px'
                    }}>
                        <InputLabel htmlFor="firstname">Prénom</InputLabel>
                        <Input id="firstname" name="firstname" aria-describedby="prenom" onChange={handleChange} required />
                    </FormControl>

                    <FormControl style={{
                        gridColumn: 'span 2',
                        margin: '0 20px'
                    }}>
                        <InputLabel htmlFor="email">Email</InputLabel>
                        <Input id="email" type="email" name="email" aria-describedby="email" onChange={handleChange} required />
                    </FormControl>

                    <FormControl style={{
                        gridColumn: 'span 2',
                        margin: '0 20px'
                    }}>
                        <InputLabel htmlFor="object">Sujet</InputLabel>
                        <Input id="object" name="object" aria-describedby="object" onChange={handleChange} />
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
                            name="message"
                            minRows="5"
                            placeholder="Écrire votre message ici..."
                            onChange={handleChange}
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
                            {/* <form data-netlify="true" netlify-honeypot="bot-field" name="contact" hidden>
                                <input type="hidden" name="form-name" value="contact" />
                                <input type="hidden" name="bot-field" />
                                <input
                                    type="text"
                                    name="lastname"
                                />
                                <input
                                    type="text"
                                    name="firstname"
                                />
                                <input
                                    type="email"
                                    name="email"
                                />
                                <input
                                    type="text"
                                    name="object"
                                />
                                <textarea
                                    name="message"
                                ></textarea>
                            </form> */}
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