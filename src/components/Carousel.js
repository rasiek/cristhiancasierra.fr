import * as React from 'react'
import { useState } from 'react'
import { Card, Dots, Wrapper } from './Carousel.style'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { IconButton } from '@material-ui/core';


const Carousel = ({ slides }) => {

    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    const moveDot = index => setCurrent(index)

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null
    }




    return (
        <Wrapper>
            <IconButton className="left-arrow" onClick={prevSlide}>
                <ChevronLeftIcon />
            </IconButton>

            <IconButton className="right-arrow" onClick={nextSlide}>
                <ChevronRightIcon />
            </IconButton>
            {slides.map((slide, index) =>
                <Card key={index} className={current === index ? "slide active" : "slide"}>
                    {index === current && (
                        <>
                            <img
                                src={slide.src}
                                alt={slide.title}
                            />
                            <h3>{slide.title}</h3>
                        </>
                    )}
                </Card>)}
            <Dots>
                {Array.from({ length: length }).map((item, index) =>
                    <div
                        className={current === index ? "dot active-dot" : "dot"}
                        onClick={() => moveDot(index)}
                        onKeyDown={() => moveDot(index)}
                        key={index}
                        role="button"
                        tabIndex={0}
                        aria-label="Focus dot"
                    ></div>
                )}
            </Dots>
        </Wrapper>
    )
}

export default Carousel