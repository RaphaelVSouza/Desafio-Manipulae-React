import { createGlobalStyle } from 'styled-components'
import theme from './theme'

const GlobalStyles = createGlobalStyle`

    * {
      box-sizing: border-box;
    }

    html {
      font-size: 62.5%;
      
    }

    html, body {
      scroll-behavior: smooth;
    }
    
    body {
      font-size: 1.6rem;
      font-family: 'Poppins', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background-color: ${theme.colors.secondary};
      color: #FFFFFF;
      
    }

`

export default GlobalStyles
