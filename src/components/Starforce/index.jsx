import { useState } from 'react'

import * as style from './index.style'
import * as util from '../../styles/util'

import commonOption from './options/common'
import mvpOption from './options/mvp'
import sundayOption from './options/sunday'

import starbackground from './starbackground.png'
import successEffect from './star_success.gif'
import failedEffect from './star_failed.gif'
import distroyEffect from './star_destroyed.gif'
const Render = () => {
    const [level, setLevel] = useState(0)
    const handleLevel = (value) => {
        setLevel(Math.min(Math.max(0, level + value), 25))
    }
    return (
        <style.background>
            <style.title>스타포스 시뮬레이션</style.title>
            <style.Wrapper>
                <style.container>
                    <util.Text fontweight={'bold'}>스타포스 강화</util.Text>
                    <style.starContainer>
                        <util.Text fontsize='35' color={'pink'}>★</util.Text>
                        <util.Text fontsize='20'>x{level}</util.Text>
                    </style.starContainer>
                    <button onClick={() => {handleLevel(+1)}}>별 + 1</button>
                    <button onClick={() => {handleLevel(-1)}}>별 - 1</button>
                </style.container>
                <style.optionContainer>
                    <util.Text fontweight='bold'>옵션</util.Text>
                    <style.optionList>
                        {commonOption()}
                        {mvpOption()}
                        {sundayOption()}
                    </style.optionList>
                </style.optionContainer>
            </style.Wrapper>
        </style.background>
    )
}
export default Render