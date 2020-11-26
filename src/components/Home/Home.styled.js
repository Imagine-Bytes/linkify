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
        
    }
    .form {
        
    }
    @media screen and (max-width: ${theme.breakpoints[4]}){
        padding: ${theme.spacing.screenPaddingSmall};
    padding-top: 10vh;
}
@media screen and (max-width: ${theme.breakpoints[5]}){
    #intro {
        h1 {
            font-size: 15vw;
        }
    }
}
@media screen and (max-width: ${theme.breakpoints[7]}){
    #intro {
        h1 {
            font-size: 20vw;
        }
    }
}

`