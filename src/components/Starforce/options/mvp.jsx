import { useRecoilState } from 'recoil'
import { mvpLevelState } from '../../../stores/atom'
import * as style from '../index.style'
import * as util from '../../../styles/util'
import mvpNone from '../../../images/none.png'
import mvpBronze from '../../../images/b.png'
import mvpSilver from '../../../images/s.png'
import mvpGold from '../../../images/g.png'
import mvpDiamond from '../../../images/d.png'
import mvpRed from '../../../images/r.png'
const Render = () => {
    const [mvp, setMvp] = useRecoilState(mvpLevelState)
    const imglist = [mvpNone, mvpBronze, mvpSilver, mvpGold, mvpDiamond, mvpRed]
    const handleMvp = (value) => {
        setMvp(Math.min(Math.max(mvp + value, 0), 5))
    }
    return (
        <style.optionRow>
            <style.optionCategory>
                <style.line/>
                <util.Text fontsize='20'>MVP</util.Text>
                <style.line/>
            </style.optionCategory>
            <style.optionButtonContainer>
                <style.optionButton onClick={() => {handleMvp(-1)}}>등급 ▼</style.optionButton>
                <style.mvpImg src={imglist[mvp]}/>
                <style.optionButton onClick={() => {handleMvp(+1)}}>등급 ▲</style.optionButton>
            </style.optionButtonContainer>
        </style.optionRow>
    )
}
export default Render