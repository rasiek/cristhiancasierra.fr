import styled from 'styled-components'


export const Wrapper = styled.div`

    .contact-btn {
        display: none;
        @media screen and (max-width:1200px) {

            background-color: #eee;
            display: block;
            position: fixed;
            bottom: 40px;
            right: 20px;
            z-index: 1;

            svg {
            width: 1.2em;
            height: auto;
            fill: #ef5f63;
            }

        }
    }
`

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`


