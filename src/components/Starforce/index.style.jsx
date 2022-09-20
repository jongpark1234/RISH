import styled from 'styled-components'
export const background = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`
export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const title = styled.span`
    position: absolute;
    font-size: 40px;
    font-weight: bold;
    left: 2%;
    top: 2%;
`
export const container = styled.div`
    width: 80%;
    min-width: 650px;
    max-width: 850px;
    height: 400px;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 15px;
    box-shadow: 2px 2px 4px 4px gray;
`
export const starContainer = styled.div`
    display: flex;
    align-items: flex-end;
`