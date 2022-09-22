import { useState } from 'react'
import * as style from '../index.style'
import * as util from '../../../styles/util'
const Render = () => {
    const [starcatch, setStarcatch] = useState(false)
    const [protect, setProtect] = useState(false)
    const [pcroom, setPcroom] = useState(false)
    const options = [
        { type: '스타캐치', state: starcatch, func: setStarcatch },
        { type: '파괴방지', state: protect, func: setProtect },
        { type: 'PC방', state: pcroom, func: setPcroom },
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