import styled from 'styled-components'
import { theme } from '../../assets/styles/theme'

export const SignupStyled = styled.main`
    height: 90vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    align-items: center;
    padding: ${theme.spacing.screenPadding};
    padding-top: 10vh;

    .title {
        margin-bottom: 3%;
        white-space: nowrap;
        overflow: hidden;
    }
    @media screen and (max-width: ${theme.breakpoints[4]}){
        padding: ${theme.spacing.screenPaddingSmall};
        padding-top: 10vh;
    }

    @media screen and (max-height: ${theme.breakpoints[5]}){
        height: unset;

        button {
            margin: 5vh;
        }
    }

    form {
        width: 100%;
    }
`