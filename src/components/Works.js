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

    return (
        <Wrapper>
            <h2>Ce que je fais</h2>
            <Carousel slides={slides} />
        </Wrapper>
    )
}

export default Works