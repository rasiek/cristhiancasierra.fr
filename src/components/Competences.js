import * as React from 'react'
import CompetenceCard from './CompetenceCard'
import { Wrapper } from './Competences.style'
import { compData } from '../data/comp-data'



const Competences = () =>

    <Wrapper>
        <h2>Competences</h2>
        <div className="cards-container">
            {compData.map((comp, index) => {
                return (

                    <CompetenceCard
                        key={index}
                        icon={comp.icon}
                        title={comp.title}
                        description={comp.description}
                        keywords={comp.keywords} />
                )
            }
            )}
        </div>
    </Wrapper>


export default Competences