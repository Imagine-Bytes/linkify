import styled from 'styled-components'
import { theme } from '../../assets/styles/theme'
export const HeaderStyled = styled.header`
    height: 10vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacing.screenPadding};
    * {
        color: ${theme.colors.whiteColor};
        text-decoration: none;
    }
    @media screen and (max-width: ${theme.breakpoints[4]}){
        padding: ${theme.spacing.screenPaddingSmall};
}
`