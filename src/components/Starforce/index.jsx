import { useState } from 'react'
import * as style from './index.style'
import * as util from '../../styles/util'
import successEffect from './star_success.gif'
import failedEffect from './star_failed.gif'
import distroyEffect from './star_destroyed.gif'
const Render = () => {
    const [level, setLevel] = useState(0)
    const [starcatch, setStarcatch] = useState(false)
    const [protect, setProtect] = useState(false)
    const [pcroom, setPcroom] = useState(false)
    const [mvp, setMvp] = useState(0)
    const renderOption = () => {
    }
    return (
        <style.background>
            <style.title>스타포스 시뮬레이션</style.title>
            <style.Wrapper>
                <style.container>
                    <util.Text fontweight={'bold'}>스타포스 강화</util.Text>
                    <style.starContainer>
                        <util.Text fontsize={35} color={'pink'}>★</util.Text>
                        <util.Text fontsize={20}>x{level}</util.Text>
                    </style.starContainer>
                    <button onClick={() => {setLevel(level + 1)}}>별 + 1</button>
                    <button onClick={() => {setLevel(level - 1)}}>별 - 1</button>
                </style.container>
                <style.optionContainer>
                    <util.Text fontweight='bold'>옵션</util.Text>
                    <style.optionList>
                        <style.optionRow>
                            <style.optionButton isturned={starcatch} onClick={() => {setStarcatch(!starcatch)}}>
                                <span>스타캐치</span>
                            </style.optionButton>
                            <style.optionButton isturned={protect} onClick={() => {setProtect(!protect)}}>
                                <span>파괴방지</span>
                            </style.optionButton>
                            <style.optionButton isturned={pcroom} onClick={() => {setPcroom(!pcroom)}}>
                                <span>PC방</span>
                            </style.optionButton>
                            <style.optionButton isturned={mvp} onClick={() => {setMvp(!mvp)}}>
                                <span>MVP</span>
                            </style.optionButton>
                        </style.optionRow>
                    </style.optionList>
                </style.optionContainer>
            </style.Wrapper>
        </style.background>
    )
}
export default Render