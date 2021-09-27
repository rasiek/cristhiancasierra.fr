import styled from 'styled-components'


export const Content = styled.div.attrs(props => ({
    rows: props.rows,
}))`
display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 70vw;
    max-width: 900px;
    position: relative;
    height: fit-content;
    justify-items: center;
    align-items: center;
    margin: auto;
    padding: 30px;

    @media screen and (max-width: 700px) {
        grid-template-rows: repeat(${props => props.rows}, fit-content(200px));
        grid-auto-flow: column;
        grid-template-columns: 30% ;

    }

    .even-desc {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding: 20px;

        @media screen and (max-width: 700px) {
            order: 2;
            align-self: baseline;
            align-items: self-start;
            justify-self: flex-start;
            
        }

        h2 ,h3 {
            margin: 0;
        }

        h3:after {
            right: 50%;
            transform: translateX(50%);
            position: absolute;
            width: 15px;
            height: 15px;
            background-color: #393e46;
            border-radius: 50%;
            content: "";

            @media screen and (max-width: 700px) {
            right: 68%;
            transform: translateX(48%);
            
        }
        }

        p {
            margin-bottom: 10px;
            text-align: end;

            @media screen and (max-width: 700px) {
            text-align: left;     
        }
        }
        span {

            font-size: 0.8rem;
            font-family: 'Josefin Sans', sans-serif;
            font-weight: bold;

        }
    }

    .even-date {
        display: flex;
        flex-direction: column;
        padding: 20px;
        justify-content: flex-start;
        justify-self: start;
        align-self: self-start;

        @media screen and (max-width: 700px) {
            order: 1;
            justify-self: self-end;
            align-items: flex-end;
        }

        h2 {
            margin: 0;
        }
    }

    .odd-desc {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 20px;

        @media screen and (max-width: 700px) {
            order: 2;
            align-self: baseline;
            align-items: self-start;
            
        }

        h2 ,h3 {
            margin: 0;
        }

        h3:after {
            right: 50%;
            transform: translateX(50%);
            position: absolute;
            width: 15px;
            height: 15px;
            background-color: #393e46;
            border-radius: 50%;
            content: "";

            @media screen and (max-width: 700px) {
            right: 68%;
            transform: translateX(48%);
            
        }

            
        }

        p {
            margin-bottom: 10px;
            text-align: start;
        }
        span {

            font-size: 0.8rem;
            font-family: 'Josefin Sans', sans-serif;
            font-weight: bold;

        }
    }

    .odd-date {
        display: flex;
        flex-direction: column;
        padding: 20px;
        justify-content: flex-end;
        justify-self: end;
        align-items: flex-end;
        align-self: self-start;

        @media screen and (max-width: 700px) {
            order: 1;
            justify-self: self-end;
            align-items: flex-end;
        }

        h2 {
            margin: 0;
        }
    }


    hr {
        position: absolute;
        height: 100%;
        top: 0;
        right: 50%;
        transform: translateX(50%);
        width: 5px;
        background-color: #393e46;
        border: none;

        @media screen and (max-width: 700px) {

        right: 68%;
        transform: translateX(50%);
        }
    }
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 80vw;
`