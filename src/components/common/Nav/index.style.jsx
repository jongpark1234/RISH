import styled from 'styled-components'
export const background = styled.div`
    width: 100vw;
    height: 75px;
    display: flex;
    background-color: #e6e6e6;
    align-items: center;
    justify-content: space-evenly;
`
export const container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f8f8f8;
    transition: .15s ease-in-out;
    &:hover {
        background-color: #e6e6e6;
    }
`
export const menu = styled.span`
    color: black;
    font-size: 25px;
    font-weight: bold;
`