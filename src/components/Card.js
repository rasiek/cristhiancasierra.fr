import * as React from 'react'
import { TextContent, Wrapper } from './Card.style'


const Card = () => {

    return (
        <Wrapper>
            <img src="https://picsum.photos/800/600" alt="placeholder" />

            <TextContent>
                <h4>Lorem ipsum</h4>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</p>
            </TextContent>
        </Wrapper>
    )
}
export default Card