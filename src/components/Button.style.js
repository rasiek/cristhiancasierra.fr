import styled from 'styled-components'
import { Button } from '@material-ui/core'

export const Wrapper = styled(Button)`
    border-radius: 30px;
    width: ${props => props.width || "50px"};
`

