import styled from 'styled-components'

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
width: 80vw;
margin: 20px 0;

    h1 {
        
    }
`

export const Grid = styled.div`
    width: 80vw;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-self: center;

    @media screen and (max-width: 700px) {

    grid-template-columns: 1fr;
    width: 60vw;
    gap: 20px;
}
`