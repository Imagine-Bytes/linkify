import styled from 'styled-components'
import { theme } from '../../assets/styles/theme'
export const HeaderStyled = styled.header`
    font-family: Nunito;
    height: 8vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacing.screenPadding};
    background-color: ${theme.colors.altBackgroundColor};
    a {
        color: ${theme.colors.whiteColor};
        text-decoration: none;
    }
    @media screen and (min-height: ${theme.breakpoints[2]}){
        height: 5vh;
    }
    
`