import styled from 'styled-components'
import { theme } from '../../assets/styles/theme'

export const HomeStyled = styled.main`
    height: 90vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    padding: ${theme.spacing.screenPadding};
    padding-top: 10vh;


    #intro {
        margin-bottom: 8%;
        border: 1px solid red;
    }
    .form {
        
    }
    @media screen and (max-width: ${theme.breakpoints[4]}){
        padding: ${theme.spacing.screenPaddingSmall};
    padding-top: 10vh;
}

`