import styled from 'styled-components'
export const background = styled.div`
    width: 100vw;
    min-height: 100vh;
    max-height: 300vh;
    padding-top: 100px;
    padding-bottom: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`
export const optionButton = styled.div`
    width: 75px;
    aspect-ratio: 1 / 1;
    position: fixed;
    border-radius: 100%;
    background-color: lightgreen;
    box-shadow: 2px 2px 6px 1px gray;
    bottom: 5%;
    right: 5%;
`
export const wrapper = styled.div`
    width: 20%;
    min-width: 400px;
    max-width: 600px;
    display: flex;
    flex-direction: column;
`
export const title = styled.span`
    position: absolute;
    font-size: 40px;
    font-weight: bold;
    left: 2%;
    top: 2%;
`
export const cubeContainer = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    gap: 10px;
`
export const cubePicker = styled.div`
    height: 100%;
    aspect-ratio: 1 / 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    box-shadow: 1px 0px 3px 3px gray;
    transition: .15s ease-in-out;
    cursor: pointer;
    > img {
        width: 80%;
        aspect-ratio: 1 / 1;
    }
`
export const topCubePicker = styled(cubePicker)`
    border-top-left-radius: 10%;
    border-top-right-radius: 10%;
    margin-top: ${(props) => props.isPicked ? 1 : 5}%;
    &:hover {
        background-color: #f3f3f3;
        margin-top: ${(props) => props.isPicked ? 0 : 4}%;
    }
    `
export const bottomCubePicker = styled(cubePicker)`
    border-bottom-left-radius: 10%;
    border-bottom-right-radius: 10%;
    margin-top: -${(props) => props.isPicked ? 1 : 5}%;
    &:hover {
        background-color: #f3f3f3;
        margin-top: -${(props) => props.isPicked ? 0 : 4}%;
    }
`
export const mainContainer = styled.div`
    width: 100%;
    height: 500px;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    border-radius: 15px;
    box-shadow: 2px 2px 4px 4px gray;
    gap: 20px;
    z-index: 1;
`
export const optionContainer = styled.div`
    width: 80%;
    height: 40%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 5%;
    box-shadow: 1px 1px 3px 3px gray;
    gap: 10px;
    > span {
        font-size: 17px;
        text-shadow: 0 0 3px ${(props) => props.grade == 0 ? 'blue' : props.grade == 1 ? 'purple' : props.grade == 2 ? '#777700' : 'green'};
        transition: .15s ease-in-out
    }
`
export const processButton = styled.button`
    width: 80%;
    height: 5%;
    margin-top: 0px;
    background-color: white;
    outline: none;
    border: none;
    border-radius: 15px;
    box-shadow: 2px 2px 4px 4px gray;
    font-size: 15px;
    transition: .15s ease-in-out;
    cursor: pointer;
    &:active {
        background-color: #f7f7f7;
        margin-top: 2px;
    }
`