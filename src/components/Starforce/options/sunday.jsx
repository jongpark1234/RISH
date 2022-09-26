import { useState } from 'react'
import * as style from '../index.style'
import * as util from '../../../styles/util'
const Render = () => {
    const [sunOption1, setSunOption1] = useState(false)
    const [sunOption2, setSunOption2] = useState(false)
    const [sunOption3, setSunOption3] = useState(false)
    const options = [
        { type: '10↓\n1 + 1', state: sunOption1, func: setSunOption1 },
        { type: '30% ↓', state: sunOption2, func: setSunOption2 },
        { type: '1516', state: sunOption3, func: setSunOption3 },
    ]
    return (
        <style.optionRow>
            <style.optionCategory>
                <style.line/>
                <util.Text fontsize='20'>썬데이 메이플</util.Text>
                <style.line/>
            </style.optionCategory>
            <style.buttonContainer>
                {options.map((items) => {
                    return (
                        <style.optionButton isturned={items.state} onClick={() => {items.func(!items.state)}}>
                            <span>{items.type}</span>
                        </style.optionButton>
                    )
                })}
            </style.buttonContainer>
        </style.optionRow>
    )
}
export default Render