import styled from 'styled-components'

export const Wrapper = styled.footer`
    background: linear-gradient(120deg, #393e46 50%, #00adb5 50%);
    height: 50vh;
    margin: auto;
    display: flex;

`

export const Content = styled.div`

    height: 40vh;
    width: 80vw;
    max-width: 1280px;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, 1fr);

    align-items: center;
    grid-auto-flow: column;
    justify-content: space-between;



    h4 {
        color: #eee;
        font-weight: normal;
        font-size: 1.5rem;
        margin: 0;

        @media screen and (max-width: 650px) {
            font-size: 1.2rem;
        }
    }

    a, p {
        color: #eee;
        font-size: 1.2rem;

        @media screen and (max-width: 650px) {
            font-size: 1rem;
        }
    }

    p{
        opacity: 0.7;
        font-size: 1rem;

        @media screen and (max-width: 650px) {
            font-size: 0.8rem;
        }

            a{
            vertical-align: middle;

        }
    }

    img {
        height: 30px;
        width: auto;

        @media screen and (max-width: 650px) {
            height: 20px;
        }
    }
    
    ul {
        grid-row-end: span 3;
        align-self: center;
        justify-self: end;
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        li {
            margin-top: 5px;
            margin-bottom: 5px;
        }

        hr {
            width: 100px;
            margin: 10px auto;
            border: 1px solid #eee;
            background-color: #eee;
            opacity: 0.4;
        }

    }

`