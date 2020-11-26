import styled from 'styled-components'
import theme from './theme'
export const Button = styled.button`
    background: ${theme.colors.primaryColor};
    border: none;
    outline: none;
    padding: 10px 10px;
    border-radius: ${theme.shape.borderRadiusSmall};
    width: 12%;
    min-width: 100px;
    max-width: 180px;
    font-size: 16px;
    /* font-weight: 600; */
    color: ${theme.colors.backgroundColor};
`

export const WarningButton = styled(Button)`
    background: ${theme.colors.error100};
`