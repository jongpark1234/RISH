import { useState } from 'react'
import * as style from './index.style'
import * as util from '../../styles/util'
const Render = () => {
    const [level, setlevel] = useState(0)
    return (
        <style.background>
            <style.title>스타포스 시뮬레이션</style.title>
            <style.Wrapper>
                <style.container>
                    <util.Text>스타포스 강화</util.Text>
                    <style.starContainer>
                        <util.Text fontsize={35} color={'pink'}>★</util.Text>
                        <util.Text fontsize={20}>x{level}</util.Text>
                    </style.starContainer>
                    <button onClick={() => {setlevel(level + 1)}}>별 + 1</button>
                    <button onClick={() => {setlevel(level - 1)}}>별 - 1</button>
                </style.container>
            </style.Wrapper>
        </style.background>
    )
}
export default Render