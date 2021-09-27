import styled from 'styled-components'


export const Wrapper = styled.section`
    display: flex;
    height: 80vh;
    width: 80vw;
    max-width: 1280px;
    flex-direction: column;
    align-items: center;
    margin: 20px auto;

    @media screen and (max-width: 1000px) {
        height: 60vh;
    }



    h2 {
        font-weight: normal;
        font-size: 2rem;
        align-self: flex-start;
        margin: 0;
    }
`