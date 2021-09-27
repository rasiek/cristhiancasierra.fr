import * as React from 'react'
import Carousel from './Carousel'
import { Wrapper } from './Works.style'





const Works = () => {

    const slides = [
        { title: "Création de Produit", alt: "placeholder", src: "https://picsum.photos/1920/1280" },
        { title: "Dévelopement Backend", alt: "placeholder", src: "https://picsum.photos/1920/1280" },
        { title: "Dévelopement Web", alt: "placeholder", src: "https://picsum.photos/1920/1280" },
        { title: "Dévelopement Logiciel", alt: "placeholder", src: "https://picsum.photos/1920/1280" },
        { title: "Arduino", alt: "placeholder", src: "https://picsum.photos/1920/1280" },
        { title: "Impression 3D", alt: "placeholder", src: "https://picsum.photos/1920/1280" },
    ]

    return (
        <Wrapper>
            <h2>Ce que je fais</h2>
            <Carousel slides={slides} />
        </Wrapper>
    )
}

export default Works