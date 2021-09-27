import styled from 'styled-components'

export const Wrapper = styled.section`

    display: flex;
    flex-direction: column;
    width: 80vw;

    h2 {
        font-size: 2rem;
    }

    .cards-container {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 10px;

        @media screen and (max-width: 1000px) {
            grid-template-columns: repeat(2,1fr);
        }
    }
`