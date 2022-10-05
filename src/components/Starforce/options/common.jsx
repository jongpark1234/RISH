import { useRecoilState } from 'recoil'
import { starCatchState, starProtectState, starPcState, starLevelState } from '../../../stores/atom'
import * as style from '../index.style'
import * as util from '../../../styles/util'
const Render = () => {
    const [starLevel, setStarLevel] = useRecoilState(starLevelState)
    const [starCatch, setStarCatch] = useRecoilState(starCatchState)
    const [starProtect, setStarProtect] = useRecoilState(starProtectState)
    const [starPc, setStarPc] = useRecoilState(starPcState)
    const options = [
        { type: '스타캐치', state: starCatch, func: setStarCatch },
        { type: 'PC방', state: starPc, func: setStarPc },
    ]
    return (
        <style.optionRow>
            <style.optionCategory>
                <style.line/>
                <util.Text fontsize='20'>common</util.Text>
                <style.line/>
            </style.optionCategory>
            <style.optionButtonContainer>
                <style.optionButton isturned={starCatch} onClick={() => {setStarCatch(starCatch ^ 1)}}>스타캐치</style.optionButton>
                <style.protectButton isturned={starProtect} starLevel={starLevel} onClick={() => {setStarProtect(starProtect ^ 1)}}>파괴방지</style.protectButton>
                <style.optionButton isturned={starPc} onClick={() => {setStarPc(starPc ^ 1)}}>PC방</style.optionButton>
            </style.optionButtonContainer>
        </style.optionRow>
    )
}
export default Render