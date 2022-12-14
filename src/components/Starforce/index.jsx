import { useRecoilState } from 'recoil'
import { chancetimeState, constantProcessStarforceGoalState, constantProcessStarforceState, mvpLevelState, starCatchState, starDestroyedCostState, starDestroyedCountState, starforceCostState, starItemCostState, starLevelState, starPcState, starProtectCostState, starProtectedCostState, starProtectedCountState, starProtectState, starRequireLevelState, starSuccessRatioState, sundayOption1State, sundayOption2State, sundayOption3State } from '../../stores/atom'

import * as style from './index.style'
import * as util from '../../styles/util'

import commonOption from './options/common'
import mvpOption from './options/mvp'
import sundayOption from './options/sunday'

import * as percent from './percentages'

import starbackground from './starbackground.png'
import successEffect from './star_success.gif'
import failedEffect from './star_failed.gif'
import distroyEffect from './star_destroyed.gif'

const Render = () => {
    // common states
    const [starRequireLevel, setStarRequireLevel] = useRecoilState(starRequireLevelState)
    const [starItemCost, setStarItemCost] = useRecoilState(starItemCostState)
    const [starLevel, setStarLevel] = useRecoilState(starLevelState)
    const [chancetime, setChancetime] = useRecoilState(chancetimeState)
    const [constantProcessStarforce, setConstantProcessStarforce] = useRecoilState(constantProcessStarforceState)
    const [constantProcessStarforceGoal, setConstantProcessStarforceGoal] = useRecoilState(constantProcessStarforceGoalState)
    const [starSuccessRatio, setStarSuccessRatio] = useRecoilState(starSuccessRatioState)
    const [starDestroyedCount, setStarDestroyedCount] = useRecoilState(starDestroyedCountState)
    // option states
    const [starCatch, setStarCatch] = useRecoilState(starCatchState)
    const [starProtect, setStarProtect] = useRecoilState(starProtectState)
    const [starPc, setStarPc] = useRecoilState(starPcState)
    const [mvpLevel, setMvpLevel] = useRecoilState(mvpLevelState)
    const [sundayOption1, setSundayOption1] = useRecoilState(sundayOption1State)
    const [sundayOption2, setSundayOption2] = useRecoilState(sundayOption2State)
    const [sundayOption3, setSundayOption3] = useRecoilState(sundayOption3State)
    // statistics states ( costs, counts )
    const [starforceCost, setStarforceCost] = useRecoilState(starforceCostState)
    const [starProtectedCount, setStarProtectedCount] = useRecoilState(starProtectedCountState)
    const [starProtectCost, setStarProtectCost] = useRecoilState(starProtectCostState)
    const [starProtectedCost, setStarProtectedCost] = useRecoilState(starProtectedCostState)


    const inputValue = ( state, func ) => {
        let Max = Infinity
        let Min = 0 
        if (func == setStarRequireLevel) { // ???????????? ?????? form
            Max = 300
            Min = 0
        }
        else if (func == setStarItemCost) { // ????????? ?????? ?????? form
            Max = Infinity
            Min = 0
        }
        else if (func == setConstantProcessStarforceGoal) { // ?????? ??? ?????? form
            Max = 25
            Min = 0
        }
        func(Math.max(Math.min(Number(state.toString().replace(/[^0-9]/g, '')), Max), Min))
    }
    const calcNormalCost = () => { // ???????????? ?????? ?????? ????????? ??????
        return Math.round((starLevel < 10 ? 1000 + ((starRequireLevel ** 3) * (starLevel + 1)) / 25 : 1000 + ((starRequireLevel ** 3) * ((starLevel + 1) ** 2.7)) / ((starLevel < 15) ? 400 : 200)) / 100) * 100
    }
    const calcDiscount = () => { // ????????? ?????? ??????
        const mvpDiscount = (starLevel < 17) ? [0, 0, 0.03, 0.05, 0.1, 0.1][mvpLevel] : 0 // mvp ????????? ??????
        const pcDiscount = starPc ? 0.05 : 0 // pc??? ?????? 5% ??????
        const sundayDiscount = sundayOption2 ? 0.7 : 1 // ????????? ????????? 30% ?????? ??????

        return (1 - mvpDiscount - pcDiscount) * sundayDiscount
    }
    const calcProtectCost = (normalCost) => { // ???????????? ?????? ?????? ??????
        // 12??? ~ 16??? + ???????????? ?????? => ???????????? ??????
        return ((12 <= starLevel && starLevel <= 16) && starProtect) ? normalCost : 0
    }
    const calcFinalCost = () => {
        // L: ?????? ??????, S: ???????????? ?????? ??????
        const normalCost = calcNormalCost() // ?????? ????????? ???????????? ?????? ??????
        const discount = calcDiscount() // ???????????? ?????? ??????
        const protectCost = calcProtectCost(normalCost) // ???????????? ?????? ??????
        return Math.round((normalCost * discount + protectCost) / 10) * 10
    }
    const calcPercents = () => { // ?????? ??????, ?????? ??????, ?????? ????????? ???????????? ???????????? function
        // ?????????????????????, 1516 ????????? ??? 5, 10, 15?????? ?????? ????????? ???????????? 100
        if ((chancetime == 2) || (sundayOption3 && [5, 10, 15].includes(starLevel))) {
            return { success: 100, failed: 0, destroyed: 0 }
        }
        if (starProtect && (12 <= starLevel && starLevel <= 16)) { // ???????????? ????????? ???
            return {
                success: percent.Success[starCatch][starLevel],
                failed: 100 - percent.Success[starCatch][starLevel],
                destroyed: 0
            }
        }
        return {
            success: percent.Success[starCatch][starLevel],
            failed: percent.Failed[starCatch][starLevel],
            destroyed: percent.Destroyed[starCatch][starLevel]
        }
    }
    const handleSuccessRatio = ( index ) => { // ????????? ???????????? ?????? ?????? ?????? ?????? ?????? ????????? ???????????? ????????? ???????????? function
        setStarSuccessRatio(starSuccessRatio.map((element, idx) => idx === starLevel ? [element[0] + Number(index == 0), element[1] + 1] : element))
    }
    const processStarforce = () => { // ???????????? ?????? ??????
        if (constantProcessStarforceGoal == starLevel) { // ?????? ????????? ?????? ????????? ???????????????
            return // ???????????? ??????
        }

        // L: ?????? ??????, S: ???????????? ?????? ??????
        const finalCost = calcFinalCost()
        const finalPercents = calcPercents()

        setStarforceCost(starforceCost + finalCost) // ?????? ????????? ??????

        const randomValue = Math.random() * 100 // 0=..100 ??? ?????? ??????

        if (randomValue >= percent.Success[starCatch][starLevel] + percent.Failed[starCatch][starLevel] && starProtect) { // ??????????????? ????????? ?????? ???????????? ?????????????????? ??????????????? ????????? ????????? ??????
            setStarProtectedCount(starProtectedCount + 1) // ????????? ????????? ?????? + 1
            setStarProtectedCost(starProtectedCost + starItemCost) // ?????? ????????? ????????? ?????? ??????
        }
        if (starProtect) { // ???????????? ????????? ???
            setStarProtectCost(starProtectCost + calcProtectCost(calcNormalCost()))
        }

        if (randomValue < finalPercents.success) { // ??????
            setChancetime(0) // ???????????? ?????????
            handleSuccessRatio(0) // ?????? ?????? + 1, ?????? ?????? + 1
            if (sundayOption1 && starLevel <= 10) { // ????????? ????????? ?????? ( 10??? ?????? ?????? ??? +2 )
                setStarLevel(starLevel + 2)
            }
            else {
                setStarLevel(starLevel + 1)
            }
        }
        else if (randomValue < finalPercents.success + finalPercents.failed) { // ??????
            handleSuccessRatio(1) // ?????? ?????? + 1
            if ([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20].includes(starLevel)) { // ?????? ?????? ??????
                setStarLevel(starLevel)
            }
            else { // ?????? ?????? ??????
                setStarLevel(starLevel - 1)
                setChancetime(chancetime + 1) // ???????????? + 1
            }
        }
        else { // ??????
            setChancetime(0) // ???????????? ?????????
            setStarDestroyedCount(starDestroyedCount + 1) // ?????? ?????? + 1
            handleSuccessRatio(1) // ?????? ?????? + 1
            if ((12 <= starLevel && starLevel <= 16) && starProtect) { // ?????? ?????? ?????????
                setStarProtectedCost(starProtectedCost + starItemCost) // ?????? ????????? ???????????? ?????? ?????? ??????
                setStarLevel(starLevel)
            }
            else { // ?????? ?????? ????????????
                setStarforceCost(starforceCost + starItemCost) // ???????????? ???????????? ????????? ???????????? ?????? ?????? ??????
                setStarLevel(12) // 12????????? ???
            }
        }
    }
    return (
        <style.background>
            <style.title>???????????? ???????????????</style.title>
            <style.Wrapper>
                <style.enhanceContainer>
                    <util.Text fontweight={'bold'}>???????????? ??????</util.Text>
                    <style.starContainer>
                        <style.starText fontsize='35' color={'pink'}>???</style.starText>
                        <util.Text fontsize='20'>x{starLevel}</util.Text>
                    </style.starContainer>
                    <util.Text fontsize='15'>?????? ?????? : {calcPercents().success.toFixed(2)}%&nbsp;?????? ?????? : {calcPercents().failed.toFixed(2)}%&nbsp;?????? ?????? : {calcPercents().destroyed.toFixed(2)}%</util.Text>
                    <util.Text fontsize='20'>?????? ?????? : {chancetime == 2 ? '?????????' : '????????????'}</util.Text>
                    <style.inputWrapper>
                        <style.inputContainer>
                            <util.Text fontsize='15'>?????? ?????? ??????</util.Text>
                            <style.enhanceInput type='text' value={starRequireLevel.toLocaleString('ko-KR')} onChange={(e) => {inputValue(e.target.value, setStarRequireLevel)}}/>
                        </style.inputContainer>
                        <style.inputContainer>
                            <util.Text fontsize='15'>????????? ??????</util.Text>
                            <style.enhanceInput type='text' value={starItemCost.toLocaleString('ko-KR')} onChange={(e) => {inputValue(e.target.value, setStarItemCost)}}/>
                        </style.inputContainer>
                        <style.inputContainer>
                            <util.Text fontsize='15'>?????? ??? ??????</util.Text>
                            <style.enhanceInput type='text' value={constantProcessStarforceGoal.toLocaleString('ko-KR')} onChange={(e) => {inputValue(e.target.value, setConstantProcessStarforceGoal)}}/>
                        </style.inputContainer>
                    </style.inputWrapper>
                    <style.percentContainer>
                        <util.Text fontsize='20'>?????? ?????? ?????? : {calcFinalCost().toLocaleString('ko-KR')}</util.Text>
                        <util.Text fontsize='20'>?????? ?????? ?????? : {starforceCost.toLocaleString('ko-KR')}</util.Text>
                    </style.percentContainer>
                    <style.processButtonContainer>
                        <style.processButton onClick={() => processStarforce()}>???????????? ??????</style.processButton>
                    </style.processButtonContainer>
                </style.enhanceContainer>

                <style.optionContainer>
                    <util.Text fontweight='bold'>??????</util.Text>
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