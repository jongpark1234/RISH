import styled from 'styled-components'
export const Text = styled.span`
    color: ${(props) => props.color || 'black'};
    font-size: ${(props) => props.fontsize || 30}px;
    font-weight: ${(props) => props.fontweight || 'lighter'};
`