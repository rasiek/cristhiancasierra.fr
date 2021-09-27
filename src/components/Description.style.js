import styled from 'styled-components'


export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    width: 80vw;
    height: 70vh;
    justify-content: space-evenly;

    @media screen and (max-width: 600px) {

        height: fit-content;
    }

    h1 {
        font-size: 3rem;
    }

    p {
        width: 80%;
        align-self: center;
        text-align: justify;
    }

    .badges-container {
        display: flex;
        width: 50%;
        align-self: center;
        align-items: center;
        justify-content: center;
    }
`