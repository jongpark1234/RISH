import styled from 'styled-components'
export const Text = styled.span`
    color: ${(props) => props.color || 'black'};
    font-size: ${(props) => props.fontsize || 30}px;
`
export const flexDiv = styled.div`
    display: flex;
`