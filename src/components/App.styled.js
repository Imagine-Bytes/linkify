import styled from 'styled-components';
import { theme } from '../assets/styles/theme'

// eslint-disable-next-line import/no-webpack-loader-syntax
import fonts from '!!raw-loader!../assets/styles/scss/_fonts.scss';

export const AppStyled = styled.body`
${fonts}
  *,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

  font-family: SourceSansPro;
  text-align: center;
  background: ${theme.colors.backgroundColor} ${theme.colors.bodyBg};
  background-position: right bottom;
  background-repeat: no-repeat;
  background-size: 100%;
  color: white;
  min-height: 100vh;
  h1,h2 {
    font-family: Nunito;
  }
  h1 {
      
        font-weight: 400;
        font-size: ${theme.fontSizes.xxlarge};
    }
  h2 {
        font-weight: 300;
        font-size: ${theme.fontSizes.
    xlarge};
    }

  h3 {
        font-weight: 400;
    }
    @media screen and (max-width: ${theme.breakpoints[0]}){
    
    
    h1 {
      font-size: 5em;
    }
  }

    .form {
      display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
  * input {
      background: ${theme.colors.altBackgroundColor};
      border: none;
      outline: none;
      border-radius: ${theme.shape.borderRadius};
  font-size: ${theme.fontSizes.large};
  padding: 10px 10px 10px 20px;
  width: 45%;
  height: 45px;
  margin: 15px;
  color: ${theme.colors.primaryTextColor};
  
  }
  

  button {
    
  }
  * {
    z-index: 1;
  }
  ::before {
    content: '';
    position: absolute;
    top: 20%;
    right: 10%;
    background-color: #431143;
    opacity: 0.4;
    width: 20vh;
    height: 20vh;
    border-radius: 100%;
    z-index: 0;
  }
  @media screen and (max-width: ${theme.breakpoints[1]}){
    
    
    h1 {
      font-size: 5em;
    }
    input {
      width: 70%;
    }
    button {
      width: 24%;
    }
  }

  
  .App-logo {
    height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

`