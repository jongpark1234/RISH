import styled from 'styled-components'
export const background = styled.div`
    width: 100vw;
    min-height: 100vh;
    max-height: 300vh;
    display: flex;
    flex-direction: column;
`
export const container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    padding-top: 10px;
`
export const chartContainer = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
`
export const textContainer = styled.div`
    gap: 10px;
    display: flex;
    align-items: center;
`
export const sliderContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
`
export const textKey = styled.span`
    font-size: 20px;
    font-weight: bold;
`
export const textValue = styled.span`
    font-size: 18px;
`