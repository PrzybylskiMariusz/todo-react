import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 62.5%;
    }

    *,
    *:before,
    *:after {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: "Mulish", sans-serif;
        font-size: 1.6rem;
        font-weight: 400;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        height: 100vh;
        width: 100%;
        color: #101010;
        background-color: #F9F9F9;
    }
`;
