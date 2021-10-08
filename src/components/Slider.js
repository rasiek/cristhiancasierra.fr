
import * as React from 'react'
import { ContentWrapper, Wrapper, Content } from './Slider.style'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { IconButton } from '@material-ui/core';






const Slider = ({ slides, show, infiniteLoop }) => {

    const [currentIndex, setCurrentIndex] = React.useState(infiniteLoop ? show : 0)
    const [length, setLength] = React.useState(slides.length)

    const [isRepeating, setIsReapeating] = React.useState(infiniteLoop && slides.length > show)
    const [transitionEnabled, setTransitionEnabled] = React.useState(true)


    const handleNext = () => {

        if (isRepeating || currentIndex < (length - show)) {
            setCurrentIndex(prevState => prevState + 1)
        }
    }

    const handlePrev = () => {

        if (isRepeating || currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }

    React.useEffect(() => {
        setLength(slides.length)
        setIsReapeating(infiniteLoop && slides.length > show)
    }, [slides, infiniteLoop, show])

    React.useEffect(() => {
        if (isRepeating) {
            if (currentIndex === show || currentIndex === length) {
                setTransitionEnabled(true)
            }
        }
    }, [currentIndex, isRepeating, show, length])


    const handleTransEnd = () => {
        if (isRepeating) {
            if (currentIndex === 0) {
                setTransitionEnabled(false)
                setCurrentIndex(length)
            } else if (currentIndex === length + show) {
                setTransitionEnabled(false)
                setCurrentIndex(show)
            }
        }
    }

    const renderExtraPrev = () => {
        let output = []
        for (let index = 0; index < show; index++) {
            output.push(slides[(length - 1) - index])
        }
        output.reverse()
        return output
    }

    const renderExtraNext = () => {
        let output = []
        for (let index = 0; index < show; index++) {
            output.push(slides[index])
        }
        return output
    }
    console.log(`currentIndex ${currentIndex}\n${isRepeating}`)


    return (
        <Wrapper>
            {   (isRepeating || currentIndex > 0) &&
                <IconButton className="left-arrow" onClick={handlePrev}>
                    <ChevronLeftIcon />
                </IconButton>}

            <ContentWrapper>
                <Content
                    className={`show-${show}`}
                    style={{
                        transform: `translateX(-${currentIndex * (100 / show)}%)`,
                        transition: !transitionEnabled ? "none" : undefined,
                    }}
                    onTransitionEnd={() => handleTransEnd()}
                >
                    {(length > show && isRepeating) && renderExtraPrev().map((slide, index) => {
                        return (
                            <div key={`${index}b`}>
                                <div
                                    style={{
                                        padding: 4,
                                        height: "50vh"
                                    }}
                                >
                                    <img src={slide.url} alt={slide.title} />
                                </div>
                            </div>
                        )
                    }

                    )}
                    {slides.map((slide, index) => {
                        return (
                            <div key={index}>
                                <div
                                    style={{
                                        padding: 4,
                                        height: "50vh"
                                    }}
                                >
                                    <img src={slide.url} alt={slide.title} />
                                </div>
                            </div>
                        )
                    })}
                    {(length > show && isRepeating) && renderExtraNext().map((slide, index) => {
                        return (
                            <div key={`${index}a`}>

                                <div
                                    style={{
                                        padding: 4,
                                        height: "50vh"
                                    }}
                                >
                                    <img src={slide.url} alt={slide.title} />
                                </div>
                            </div>
                        )
                    })}
                </Content>
            </ContentWrapper>

            {   (isRepeating || currentIndex < (length - show)) &&
                <IconButton className="right-arrow" onClick={handleNext}>
                    <ChevronRightIcon />
                </IconButton>}
        </Wrapper>
    )
}

export default Slider
