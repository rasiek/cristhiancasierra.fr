import styled from 'styled-components'



export const Wrapper = styled.div`
    display: flex;
    position: relative;
    width: 80vw;
    margin: 30px auto;

    .left-arrow, .right-arrow {
        position: absolute;
        z-index: 1;
        bottom: 50%;
        transform: translateY(50%);
        background-color: #eee;

        svg {
            width: 1.2em;
            height: auto;
            fill: #ef5f63;
            }
    }

    .left-arrow {
        left: 24px;
    }

    .right-arrow {
        right: 24px;
    }

`


export const ContentWrapper = styled.div`
    overflow: hidden;
    width: 100%;
    height: 100%;

    .show-2 > * {
        width: 50%;
    }

    .show-3 > * {
        width: calc(100% / 3);
    }

    .show-4 > * {
        width: calc(100% / 4);
    }

`



export const Content = styled.div`
    display: flex;
    transition: all 250ms linear;
    scrollbar-width: none;

    & > * {
        width: 100%;
        flex-shrink: 0;
        flex-grow: 1;
    }
    img {
        object-fit: cover;
        height: 100%;
        width: 100%;
    }
`



