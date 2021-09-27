import * as React from 'react'
import { Wrapper } from './CompetenceCard.style'


const CompetenceCard = ({ icon, title, description, keywords }) =>

    <Wrapper>
        <>
            {icon}
        </>
        <h3>{title}</h3>
        <p>{description}</p>
        <div>{keywords.map((keyword, index) =>
            <span key={index}>{keyword}</span>
        )}</div>
    </Wrapper>


export default CompetenceCard