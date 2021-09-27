import * as React from 'react'
import { Wrapper } from './Button.style'

const Button = ({ children }) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

export default Button