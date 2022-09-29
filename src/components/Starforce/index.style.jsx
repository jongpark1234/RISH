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
export const Wrapper = styled.div`
    padding-top: 100px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 30px;
`
export const title = styled.span`
    position: absolute;
    font-size: 40px;
    font-weight: bold;
    left: 2%;
    top: 2%;
`
export const enhanceContainer = styled.div`
    width: 80%;
    min-width: 650px;
    max-width: 850px;
    height: 400px;
    padding-top: 20px;
    display: flex;
    row-gap: 15px;
    flex-direction: column;
    align-items: center;
    border-radius: 15px;
    box-shadow: 2px 2px 4px 4px gray;
`
export const starText = styled.span`
    font-size: 30px;
    color: #ffff70;
    text-shadow: 0px 1px 4px black;
`
export const percentContainer = styled.div`
    display: flex;
    gap: 20px;
`
export const inputWrapper = styled.div`
    display: flex;
    gap: 20px;
`
export const inputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const enhanceInput = styled.input`
    display: flex;
    width: 100px;
    height: 20px;
    padding-left: 3px;
    border: 1px solid black;
    outline: none;
`
export const optionContainer = styled.div`
    width: 20%;
    min-width: 400px;
    max-width: 600px;
    height: 500px;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 15px;
    box-shadow: 2px 2px 4px 4px gray;
    gap: 30px;
`
export const optionList = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`
export const optionRow = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
export const optionCategory = styled.div`
    display: flex;
    align-items: center;
`
export const line = styled.hr`
    width: 30%;
    height: 0;
`
export const buttonContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`
export const optionButton = styled.div`
    height: 75px;
    aspect-ratio: 1 / 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.isturned ? '#ffff00' : 'buttonface'};
    border: 1px solid black;
    border-radius: 5px;
    transition: .15s ease-in-out background-color;
    cursor: pointer;
    > span {
        user-select: none;
        font-size: 15px; 
    }
    &:hover {
        background-color: ${(props) => props.isturned ? '#dddd00' : 'lightgray'};
    }
`
export const protectButton = styled(optionButton)`
    background-color: ${(props) => props.isturned ? (12 <= props.starLevel && props.starLevel <= 16 ? '#ffff00' : '#dddd00') : (12 <= props.starLevel && props.starLevel <= 16 ? 'buttonface' : 'lightgray')};
    &:hover {
        background-color: ${(props) => props.isturned ? (12 <= props.starLevel && props.starLevel <= 16 ? '#dddd00' : '#bbbb00') : (12 <= props.starLevel && props.starLevel <= 16 ? 'lightgray' : 'darkgray')};
    }
`
export const mvpImg = styled.img`
    width: 75px;
    aspect-ratio: 1 / 1;
    user-select: none;
`
export const starContainer = styled.div`
    display: flex;
    align-items: flex-end;
`