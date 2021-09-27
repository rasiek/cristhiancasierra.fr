import styled from 'styled-components'


export const Wrapper = styled.section`

    margin: 20px auto;
    display: flex;
    flex-direction: column;
    height: 80vh;
    width: 80vw;
    max-width: 1280px;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 700px) {
        height: auto;
    }

    .description {
        color: #393e46;
        font-family: 'Josefin Sans', sans-serif;
        font-size: xx-large;
        text-align: center;
        max-width: 800px;

        span {
            color: #ef5f63;
            text-decoration: none;
            font-family: 'Josefin Sans', sans-serif;

        }
        
    }

    .title {
        color: #393e46;
        font-weight: normal;
        font-size: 2rem;
        align-self: flex-start;
        margin: 0;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    a {
        color: #ef5f63;
        align-self: flex-end;
        margin-top: 20px;
        font-family: 'Josefin Sans', sans-serif;
        font-size: 1.3rem;
        position: relative;

        span {
            vertical-align: middle;
        }

    }

    a:after {    
        background: none repeat scroll 0 0 transparent;
        bottom: -5px;
        content: "";
        display: block;
        height: 2px;
        left: 0;
        position: absolute;
        background: #ef5f63;
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
        width: 0;
    }
    a:hover:after { 
        width: 100%; 
        left: 0; 
    }
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    @media screen and (max-width: 700px) {
        grid-template-columns: 1fr;
        width: 60vw;
        gap: 20px;
    }
`