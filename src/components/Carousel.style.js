import styled from 'styled-components'

export const Wrapper = styled.div`
    position: relative;
    height: 80%;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;

    .right-arrow {
        position: absolute;
        transform: translateY(-50%);
        top: 50%;
        right: 32px;
        font-size: 3rem;
        color: #ef5f63;
        z-index: 10;
        cursor: pointer;
        user-select: none;
    }

    .left-arrow {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 32px;
        font-size: 3rem;
        color: #ef5f63;
        z-index: 10;
        cursor: pointer;
        user-select: none;
    }

    .slide {
        opacity: 0;
        transition-duration: 1s ease;
    }

    .slide.active {
        opacity: 1;
        transition-duration: 1s;
        transform: scale(1.08);
    }
`

export const Card = styled.div`
    width: auto;
    height: auto;

    img {
        width: auto;
        max-width: 450px;
        height: 50vh;
        border-radius: 10px;
        object-fit: contain;

        @media screen and (max-width: 1000px) {
            height: 30vh;
        }
    }
    h3 {
        margin: 0;
        padding-left: 10px;
        font-weight: normal;
    }
`

export const Dots = styled.div`
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    z-index: 10;

    @media screen and (max-width: 1000px) {
        bottom: 10px;
    }


    @media screen and (max-width: 700px) {
        bottom: 0;
    }

    .dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        border: 3px solid #ef5f63;
        margin: 0 5px;
        background: #ef5f63;
        cursor: pointer;

    }

    .dot.active-dot {
        background: #eeeeee;
    }
`