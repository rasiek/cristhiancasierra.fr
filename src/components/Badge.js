import * as React from 'react'
import { Wrapper } from './Badge.style'


const Badge = ({ icon, qty, description }) => {

    return (
        <Wrapper>
            <div>
                {icon}
            </div>
            <h3>{qty}</h3>
            <p>{description}</p>
        </Wrapper>

    )
}



export default Badge