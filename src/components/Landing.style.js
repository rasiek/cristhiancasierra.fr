import styled from 'styled-components'


export const Wrapper = styled.section`
    height: 80vh;
    background-color: #00adb5;
    width: 100%;
    display: flex;
    align-content: center;
    justify-content: center;
    position: relative;
`

export const Content = styled.div`
    width: 80vw;
    max-width: 1280px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #eeeeee;

    h1 {
        font-size: 3rem;
        font-family: 'Patua One', sans-serif;
        font-weight: 400;
        margin: 0;
        line-height: 48px;

        @media screen and (max-width: 600px) {
            font-size: 2.5rem;
        }
    }

    .Typewriter {
        margin-top: 10px;
    }

    .Typewriter__wrapper {
        font-family: 'Josefin Sans', sans-serif;
        font-weight: normal;
        font-size: 1.5rem;

        @media screen and (max-width: 600px) {
            font-size: 1.2rem;
        }

    }

    .Typewriter__cursor {
        font-family: 'Josefin Sans', sans-serif;
        font-weight: normal;
        font-size: 1.6rem;
    }

    button {
        margin-top: 20px;
        width: 30%;
        max-width: 200px;
        min-width: 160px;
        line-height: 1rem;
    }

    svg {
        position: absolute;
        fill: #eee;
        left: 45%;
        top: 15%;
        width: auto;
        height: 90vh;
    }

`