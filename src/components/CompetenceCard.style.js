import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #00adb5;
    border-radius: 10px;
    max-height: 400px;
    padding: 20px;

    svg {
        width: auto;
        height: 3rem;
        color: #eee;
    }

    h3 {
        color: #eee;
        font-weight: 400;
    }
    p {
        color: #eee;
    }

    div {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 3px;

        span {
            background-color: #eee;
            color: #00adb5;
            border-radius: 5px;
            padding: 2px;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
        }
    }

`