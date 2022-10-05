import { useRecoilState } from 'recoil'
import { sundayOption1State, sundayOption2State, sundayOption3State } from '../../../stores/atom'
import * as style from '../index.style'
import * as util from '../../../styles/util'
const Render = () => {
    const [sundayOption1, setSundayOption1] = useRecoilState(sundayOption1State)
    const [sundayOption2, setSundayOption2] = useRecoilState(sundayOption2State)
    const [sundayOption3, setSundayOption3] = useRecoilState(sundayOption3State)
    const options = [
        { type: '10↓\n1 + 1', state: sundayOption1, func: setSundayOption1 },
        { type: '30% DC', state: sundayOption2, func: setSundayOption2 },
        { type: '1516', state: sundayOption3, func: setSundayOption3 },
    ]
    return (
        <style.optionRow>
            <style.optionCategory>
                <style.line/>
                <util.Text fontsize='20'>썬데이 메이플</util.Text>
                <style.line/>
            </style.optionCategory>
            <style.optionButtonContainer>
                {options.map((items) => {
                    return (
                        <style.optionButton isturned={items.state} onClick={() => {items.func(items.state ^ 1)}}>
                            <span>{items.type}</span>
                        </style.optionButton>
                    )
                })}
            </style.optionButtonContainer>
        </style.optionRow>
    )
}
export default Render