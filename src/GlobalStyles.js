import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    :root {
        --logo-orange: #ef6009;
        --logo-light-orange: #ffcc83;
        --light-blue: #0493F1;
        --dark-blue: #003478;
        --nav-bg: rgba(255,255,255,0.8);
        --dark-black: #282828;
        --light-black: #4a4a4a;
        --box-shadow: 0 6px 16px rgb(52 105 203 / 16%);
    }

    html {
        &::-webkit-scrollbar {
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb {
            background-color: darkgrey;
        }
        scroll-behavior: smooth;
        overflow-x: hidden; 

    }
    body {
        font-family: 'Lato', sans-serif;
        overflow-x: hidden;
    
    }`;

export default GlobalStyles;
