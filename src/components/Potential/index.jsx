import { useRecoilState } from 'recoil'
import { cubeSelectState } from '../../stores/atom'

import * as style from './index.style'
import cube1 from '../../images/cube/cube1.png'
import cube2 from '../../images/cube/cube2.png'
import cube3 from '../../images/cube/cube3.png'
import cube4 from '../../images/cube/cube4.png'
import cube5 from '../../images/cube/cube5.png'
import cube6 from '../../images/cube/cube6.png'
import cube7 from '../../images/cube/cube7.png'
const Render = () => {
    const [cubeSelect, setCubeSelect] = useRecoilState(cubeSelectState)
    const pickCube = (idx) => {
        let ret = [0, 0, 0, 0, 0, 0, 0]
        ret[idx] = 1
        setCubeSelect(ret)
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
                            <style.topCubePicker onClick={() => {pickCube(idx)}} isPicked={cubeSelect[idx]} key={idx}>
                                <img src={element}/>
                            </style.topCubePicker>
                        )
                    }) }
                </style.cubeContainer>
                <style.mainContainer>
                </style.mainContainer>
                <style.cubeContainer>
                    { bottomCubelist.map((element, idx) => {
                        return (
                            <style.bottomCubePicker onClick={() => {pickCube(idx + 5)}} isPicked={cubeSelect[idx + 5]} key={idx}>
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