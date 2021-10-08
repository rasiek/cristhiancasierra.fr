import styled from 'styled-components'

export const Wrapper = styled.div`
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    width: 80vw;  

    a {
        color: #ef5f63;
        margin-top: 20px;
        font-family: 'Josefin Sans', sans-serif;
        font-size: 1.3rem;
        position: relative;
        width: fit-content;


        span {
            vertical-align: middle;
        svg {
            transform: rotate(180deg);

        }
        }

    }

    a:after {    
        background: none repeat scroll 0 0 transparent;
        bottom: -5px;
        content: "";
        display: block;
        height: 2px;
        right: 0;
        position: absolute;
        background: #ef5f63;
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
        width: 0;
    }
    a:hover:after { 
        width: 100%; 
        right: 0; 
    }
    
`

export const Title = styled.div`

    margin-bottom: 20px;
    h1 {
        margin: 0;
        
    }
    p {
        margin: 0;
        span {
            font-weight: bold;
        }
    }
`

export const Body = styled.p`

    position: relative;
    width: 50vw;
    max-width: 500px;
    align-self: center;
    text-align: justify;

    span {
        font-weight: bold;
        margin-bottom: 10px;
    }

    .after:after {

        content: "";
        position: absolute;
        right: -30vw;
        left: -30vw;
        height: 110%;
        background-color: #00adb5;
        z-index: -1;
        opacity: 0.2;
        bottom: 50%;
        transform: translateY(50%);
    }

    p {
        margin: 0;
        
        span {
            font-weight: bolder;
        }
    }

`