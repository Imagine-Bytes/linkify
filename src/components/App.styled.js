import styled from 'styled-components';
import { theme } from '../assets/styles/theme'

export const AppStyled = styled.body`
  *,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

  text-align: center;
  background: ${theme.colors.backgroundColor} ${theme.colors.bodyBg};
  background-position: right bottom;
  background-repeat: no-repeat;
  background-size: 100%;
  color: white;
  height: 100vh;
  h1 {
        font-weight: 400;
        font-size: ${theme.fontSizes.xxlarge};
    }
    h3 {
        font-weight: 400;;
    }
    @media screen and (max-width: ${theme.breakpoints[0]}){
    
    background-size: 1928.88px;
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
    margin-top: 30px;
    background: ${theme.colors.primaryColor};
    border: none;
    outline: none;
    padding: 10px 10px;
    border-radius: ${theme.shape.borderRadiusSmall};
    width: 12%;
    min-width: 100px
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
  }
  @media screen and (max-width: ${theme.breakpoints[1]}){
    
    background-size: 1928.88px;
    h1 {
      font-size: 5em;
    }
    input {
      width: 100%;
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