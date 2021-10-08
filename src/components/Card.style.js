import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;


    img {
        width: 90%;
        max-width: 450px;
        height: 250px;
        object-fit: cover;
    }

    h4 {

    }
`

export const TextContent = styled.div`
    width: 90%;

    h4 {
        margin: 10px 0 5px 0;
        font-weight: 500;
    }

    p {
        margin: 0;
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 400;
        color: #393e46;
    }

`