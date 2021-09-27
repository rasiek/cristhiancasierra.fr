import * as React from 'react'
import { Content, Wrapper } from './Timeline.style'


const Timeline = ({ title, data }) => {

    return (
        <Wrapper>
            <h2>{title}</h2>
            <Content rows={data.length}>

                {data.map((exp, index) => {

                    if (data.indexOf(exp) % 2 === 0) {
                        return (
                            <React.Fragment key={index}>
                                <div className="even-desc">
                                    <h2>{exp.jobName}</h2>
                                    <h3>{exp.entreprise}</h3>
                                    {exp.jobDesc ? <p>{exp.jobDesc}</p> : null}
                                    <span>{exp.city}</span>
                                </div>
                                <div className="even-date">
                                    <h2>{exp.dateStart}</h2>
                                    <h2>{exp.dateEnd}</h2>
                                </div>
                            </React.Fragment>
                        )

                    } else {
                        return (
                            <React.Fragment key={index}>
                                <div className="odd-date">
                                    <h2>{exp.dateStart}</h2>
                                    <h2>{exp.dateEnd}</h2>
                                </div>
                                <div className="odd-desc">
                                    <h2>{exp.jobName}</h2>
                                    <h3>{exp.entreprise}</h3>
                                    <p>{exp.jobDesc}</p>
                                    <span>{exp.city}</span>
                                </div>
                            </React.Fragment>
                        )
                    }
                })}
                <hr />
            </Content>
        </Wrapper>
    )
}

export default Timeline