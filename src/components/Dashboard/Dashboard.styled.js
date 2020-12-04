import styled from 'styled-components'
import { theme } from '../../assets/styles/theme'

export const DashboardStyled = styled.main`
    min-height: 100vh;
    
    text-align: start;
    padding: ${theme.spacing.screenPadding};
    padding-top: 10vh;
    section {
        min-height: 50vh;
        padding-bottom: 30px;
    }
    .item {
        padding: 10px 20px;
        background-color: ${theme.colors.altBackgroundColor};
        border-radius: ${theme.shape.borderRadius};
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-height: 45px;
        margin: 15px 0;
        gap: 70px;
        .details {
            overflow: hidden;
            display: flex;
            justify-content: space-between;
            width: 100%;
            gap: 20px;
            
        }
        .delete-btn {
            
            text-align: end;
        }
        @media screen and (max-width: ${theme.breakpoints[4]}){
            gap: 10px;
            .details {
                flex-direction: column;
                gap: 5px;
            
            }
            
            
        }

    }
`