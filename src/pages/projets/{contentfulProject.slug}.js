import * as React from 'react'
import Layout from '../../components/layout'
import { graphql, Link } from 'gatsby'
import { Body, Title, Wrapper } from './{contentfulProject.slug}.style'
import { ArrowRightAlt } from '@material-ui/icons'
import Slider from '../../components/Slider'


const Project = ({ data }) => {

    const show = 3


    const slides = data.contentfulProject.photos.map(photo => ({
        url: photo.file.url,
        title: photo.title
    }))

    const slidesTest = [
        {
            url: "https://picsum.photos/id/1001/800/600",
            title: "placeholder",
        },
        {
            url: "https://picsum.photos/800/600",
            title: "placeholder",
        },
        {
            url: "https://picsum.photos/800/600",
            title: "placeholder",
        },
        {
            url: "https://picsum.photos/800/600",
            title: "placeholder",
        },
        {
            url: "https://picsum.photos/800/600",
            title: "placeholder",
        },
        {
            url: "https://picsum.photos/800/600",
            title: "placeholder",
        },
        {
            url: "https://picsum.photos/800/600",
            title: "placeholder",
        },
        {
            url: "https://picsum.photos/800/600",
            title: "placeholder",
        },
        {
            url: "https://picsum.photos/id/237/800/600",
            title: "placeholder",
        },

    ]

    console.log(slides.length)
    return (
        <Layout pageTitle={data.contentfulProject.title}>

            <Wrapper>

                <Title>
                    <h1>{data.contentfulProject.title}</h1>
                    <p><span>{data.contentfulProject.isAcademique ? "Établissement" : "Client"}
                    </span> {data.contentfulProject.institution} <span>{data.contentfulProject.isAcademique ? "Sujet" : "Tâche"}</span> {data.contentfulProject.subject}</p>
                </Title>

                <Slider slides={slides}
                    show={show}
                    infiniteLoop={slides.length > show ? true : false}
                />

                <Body className="block-relative">
                    <span className="after">Tâche</span><br />
                    {data.contentfulProject.description}<br /><br />
                    <span>Description</span><br />
                    {data.contentfulProject.body2.body2}
                </Body>

                <Link to="/projets"><span id="arrow-projects"><ArrowRightAlt /></span>Tous les projets </Link>

            </Wrapper>


        </Layout>
    )
}


export const query = graphql`
    query ($id: String) {
    contentfulProject(id: {eq: $id}) {
        title
        description
        institution
        body2 {
            body2
        }
        subject
        tecnologies
        isAcademique
        heroPic {
            file {
                url
            }
        }
        slug
        photos {
            title
            description
            file {
                url
            }
        }
  }
}
`


export default Project