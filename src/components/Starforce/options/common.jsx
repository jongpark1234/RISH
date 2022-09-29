import { useRecoilState } from 'recoil'
import { starCatchState, starProtectState, starPcState } from '../../../stores/atom'
import * as style from '../index.style'
import * as util from '../../../styles/util'
const Render = () => {
    const [starCatch, setStarCatch] = useRecoilState(starCatchState)
    const [starProtect, setStarProtect] = useRecoilState(starProtectState)
    const [starPc, setStarPc] = useRecoilState(starPcState)
    const options = [
        { type: '스타캐치', state: starCatch, func: setStarCatch },
        { type: '파괴방지', state: starProtect, func: setStarProtect },
        { type: 'PC방', state: starPc, func: setStarPc },
    ]
    return (
        <style.optionRow>
            <style.optionCategory>
                <style.line/>
                <util.Text fontsize='20'>common</util.Text>
                <style.line/>
            </style.optionCategory>
            <style.buttonContainer>
                {options.map((items) => {
                    return (
                        <style.optionButton isturned={items.state} onClick={() => {items.func(items.state ^ 1)}}>
                            <span>{items.type}</span>
                        </style.optionButton>
                    )
                })}
            </style.buttonContainer>
        </style.optionRow>
    )
}
export default Render