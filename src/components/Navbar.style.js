import styled from 'styled-components'

export const Wrapper = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #00adb5;
    padding: 30px;

    svg {
        width: auto;
        height: 30px;
        margin: auto 0;

        .cls-1 {
        fill: #eee;
    }
    }
    

    

        div {
            display: flex;
            margin-top: 10px;
            width: 400px;
            justify-content: space-between;
            align-items: center;
            font-family: 'Josefin Sans', sans-serif;
            text-transform: uppercase;
            letter-spacing: 0.10rem;
            padding: 0;
            font-weight: bold;

            @media screen and (max-width: 1200px) {
                display: none;

            }

            a {
                position: relative;
                color: #eee;
            }

            a:visited {
                color: #576490;
            }

            a:hover {
                color: #ef5f63;
                transition: 0.3s;

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

        }

        .menu-icon {

            color: #eee;

            @media screen and (min-width: 1200px) {
                display: none;
            }
        }

        .menu-list {
            @media screen and (max-width: 1200px) {
                display: none;
            }
        }
`