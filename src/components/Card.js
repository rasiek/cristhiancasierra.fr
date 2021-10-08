import * as React from 'react'
import { TextContent, Wrapper } from './Card.style'


const Card = ({ src, title, description }) => {

    return (
        <Wrapper>
            <img src={src} alt={title} />

            <TextContent>
                <h4>{title}</h4>
                <p>{description}</p>
            </TextContent>
        </Wrapper>
    )
}
export default Card