import { graphql, useStaticQuery } from 'gatsby'
import * as React from 'react'
import Carousel from './Carousel'
import { Wrapper } from './Works.style'





const Works = () => {

    const data = useStaticQuery(graphql`
        query {
            allContentfulAsset(filter: {description: {eq: "works"}}) {
    nodes {
      file {
        url
      }
      title
    }
  }
        }
    `)

    const slides = data.allContentfulAsset.nodes.map(node => {
        return (
            {
                title: node.title,
                alt: node.title.replace(" ", "-").toLowerCase(),
                src: node.file.url,
            }
        )
    })

    console.log(slides)

    // const slides = [
    //     { title: "Création de Produit", alt: "creation-de-produit", src: "https://unsplash.com/photos/dQf7RZhMOJU" },
    //     { title: "Dévelopement Backend", alt: "developement-backend", src: "https://unsplash.com/photos/E-V6EMtGSUU" },
    //     { title: "Dévelopement Web", alt: "web-developement", src: "https://unsplash.com/photos/MI9-PY5cyNs" },
    //     { title: "Dévelopement Logiciel", alt: "placeholder", src: "https://picsum.photos/1920/1280" },
    //     { title: "Arduino", alt: "arduino", src: "https://unsplash.com/photos/aSvBypuXGkc" },
    //     { title: "Impression 3D", alt: "impression-3d", src: "https://unsplash.com/photos/aCniNTiIFd8" },
    // ]

    return (
        <Wrapper>
            <h2>Ce que je fais</h2>
            <Carousel slides={slides} />
        </Wrapper>
    )
}

export default Works