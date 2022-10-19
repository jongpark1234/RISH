import { useRecoilState } from 'recoil'
import { cubeAdditionalGradeState, cubeAdditionalOptionState, cubeGradeState, cubeOptionState, cubePartState, cubeSelectState } from '../../stores/atom'

import * as style from './index.style'

import { processCube, processUpgrade } from './percentages/index'
import cube1 from '../../images/cube/cube1.png'
import cube2 from '../../images/cube/cube2.png'
import cube3 from '../../images/cube/cube3.png'
import cube4 from '../../images/cube/cube4.png'
import cube5 from '../../images/cube/cube5.png'
import cube6 from '../../images/cube/cube6.png'
import cube7 from '../../images/cube/cube7.png'

const Render = () => {
    const [cubeGrade, setCubeGrade] = useRecoilState(cubeGradeState)
    const [cubeAdditionalGrade, setCubeAdditionalGrade] = useRecoilState(cubeAdditionalGradeState)
    const [cubePart, setCubePart] = useRecoilState(cubePartState)
    const [cubeSelect, setCubeSelect] = useRecoilState(cubeSelectState)
    const [cubeOption, setCubeOption] = useRecoilState(cubeOptionState)
    const [cubeAdditionalOption, setCubeAdditionalOption] = useRecoilState(cubeAdditionalOptionState)
    const pickCube = (idx) => {
        setCubeSelect(idx)
    }
    const processButton = () => {
        tryUpgrade()
        applyOption()
    }

    const tryUpgrade = () => { // 큐브 등급 상승을 시도하는 함수
        const temp = processUpgrade(cubeGrade, cubeAdditionalGrade, cubeSelect) // 현재 아이템 단계와 큐브에 맞는 등급 상승을 가져옴.
        const randValue = Math.random() * 100 // 0 ~ 99.999 의 난수
        if (randValue < temp) { // temp 보다 난수의 값이 적으면 강화 성공
            if (cubeSelect < 5) { // 윗잠
                setCubeGrade(cubeGrade + 1)
            }
            else { // 아랫잠
                setCubeAdditionalGrade(cubeAdditionalGrade + 1)
            }
        }
    }

    const applyOption = () => { // 옵션을 랜덤으로 돌려 적용시키는 함수
        const options = processCube(cubeGrade, cubeAdditionalGrade, cubePart, cubeSelect)
        if (cubeSelect < 5) { // 윗잠
            setCubeOption(options)
        }
        else { // 아랫잠
            setCubeAdditionalOption(options)
        }
    }
    const topCubelist = [cube1, cube2, cube3, cube4, cube5]
    const bottomCubelist = [cube6, cube7]
    return (
        <style.background>
            <style.title></style.title>
            <style.wrapper>
                <style.cubeContainer>
                    { topCubelist.map((element, idx) => {
                        return (
                            <style.topCubePicker onClick={() => {pickCube(idx)}} isPicked={cubeSelect == idx} key={idx}>
                                <img src={element}/>
                            </style.topCubePicker>
                        )
                    }) }
                </style.cubeContainer>
                <style.mainContainer>
                    <style.optionContainer grade={cubeGrade}>
                        <span>{cubeOption[0]}</span>
                        <span>{cubeOption[1]}</span>
                        <span>{cubeOption[2]}</span>
                    </style.optionContainer>
                    <style.optionContainer grade={cubeAdditionalGrade}>
                        <span>{cubeAdditionalOption[0]}</span>
                        <span>{cubeAdditionalOption[1]}</span>
                        <span>{cubeAdditionalOption[2]}</span>
                    </style.optionContainer>
                    <style.processButton onClick={processButton}/>
                </style.mainContainer>
                <style.cubeContainer>
                    { bottomCubelist.map((element, idx) => {
                        return (
                            <style.bottomCubePicker onClick={() => {pickCube(idx + 5)}} isPicked={cubeSelect == idx + 5} key={idx}>
                                <img src={element}/>
                            </style.bottomCubePicker>
                        )
                    }) }
                </style.cubeContainer>
            </style.wrapper>
        </style.background>
    )
}
export default Render