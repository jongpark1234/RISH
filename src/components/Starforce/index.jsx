import { useRecoilState } from 'recoil'
import { chancetimeState, mvpLevelState, starCatchState, starforceCostState, starItemCostState, starLevelState, starPcState, starProtectState, starRequireLevelState, sundayOption1State, sundayOption2State, sundayOption3State } from '../../stores/atom'

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
    const [starRequireLevel, setStarRequireLevel] = useRecoilState(starRequireLevelState)
    const [starItemCost, setStarItemCost] = useRecoilState(starItemCostState)
    const [starLevel, setStarLevel] = useRecoilState(starLevelState)
    const [chancetime, setChancetime] = useRecoilState(chancetimeState)
    const [starforceCost, setStarforceCost] = useRecoilState(starforceCostState)
    const [starCatch, setStarCatch] = useRecoilState(starCatchState)
    const [starProtect, setStarProtect] = useRecoilState(starProtectState)
    const [starPc, setStarPc] = useRecoilState(starPcState)
    const [mvpLevel, setMvpLevel] = useRecoilState(mvpLevelState)
    const [sundayOption1, setSundayOption1] = useRecoilState(sundayOption1State)
    const [sundayOption2, setSundayOption2] = useRecoilState(sundayOption2State)
    const [sundayOption3, setSundayOption3] = useRecoilState(sundayOption3State)
    const inputValue = (state, func) => {
        func(Number(state.toString().replace(/[^0-9]/g, '')))
    }
    const calcNormalCost = () => {
        let ret = 0
        if (starLevel < 10) {
            ret = 1000 + ((starRequireLevel ** 3) * (starLevel + 1)) / 25
        } else {
            ret = 1000 + ((starRequireLevel ** 3) * ((starLevel + 1) ** 2.7)) / ((starLevel < 15) ? 400 : 200)
        }
        return Math.round(ret / 100) * 100
    }
    const calcDiscount = () => {
        const mvpDiscount = (starLevel < 17) ? [0, 0, 0.03, 0.05, 0.1, 0.1][mvpLevel] : 0 // mvp 할인율 계산
        const pcDiscount = starPc ? 0.05 : 0 // pc방 할인 5% 여부
        const sundayDiscount = sundayOption2 ? 0.7 : 1 // 썬데이 메이플 30% 할인 여부

        return (1 - mvpDiscount - pcDiscount) * sundayDiscount
    }
    const calcFinalCost = () => {
        // L: 레벨 제한, S: 스타포스 강화 상태
        const normalCost = calcNormalCost() // 해당 단계의 스타포스 기본 비용
        const discount = calcDiscount() // 스타포스 할인 비율
        // 12성 ~ 16성 + 파괴방지 켜짐 => 파괴방지 적용
        const protectCost = ((12 <= starLevel && starLevel <= 16) && starProtect) ? normalCost : 0
        return Math.round((normalCost * discount + protectCost) / 10) * 10
    }
    const calcPercents = () => { // 성공 확률, 실패 확률, 파괴 확률을 계산하여 반환하는 function
        // 찬스타임이거나, 1516 이벤트 시 5, 10, 15성일 때는 무조건 성공확률 100
        if ((chancetime == 2) || (sundayOption3 && [5, 10, 15].includes(starLevel))) {
            return { success: 100, failed: 0, destroyed: 0 }
        }
        if (starProtect && (12 <= starLevel && starLevel <= 16)) { // 파괴방지 활성화 시
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
    const processStarforce = () => {
        // L: 레벨 제한, S: 스타포스 강화 상태
        const finalCost = calcFinalCost()
        const finalPercents = calcPercents()

        setStarforceCost(starforceCost + finalCost) // 누적 사용액 추가

        const randomValue = Math.random() * 100 // 0=..100 의 난수 생성

        if (randomValue < finalPercents.success) { // 성공
            setChancetime(0) // 찬스타임 초기화
            if (sundayOption1 && starLevel <= 10) { // 썬데이 메이플 옵션 ( 10성 이하 강화 시 +2 )
                setStarLevel(starLevel + 2)
            }
            else {
                setStarLevel(starLevel + 1)
            }
        }
        else if (randomValue < finalPercents.success + finalPercents.failed) { // 실패
            if ([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20].includes(starLevel)) { // 강화 단계 유지
                setStarLevel(starLevel)
            }
            else { // 강화 단계 하락
                setStarLevel(starLevel - 1)
                setChancetime(chancetime + 1) // 찬스타임 + 1
            }
        }
        else { // 파괴
            setChancetime(0) // 찬스타임 초기화
            if ((12 <= starLevel && starLevel <= 16) && starProtect) { // 파괴 방지 활성화
                setStarLevel(starLevel)
            }
            else { // 파괴 방지 비활성화
                setStarforceCost(starforceCost + starItemCost)
                setStarLevel(12)
            }
        }
    }

    return (
        <style.background>
            <style.title>스타포스 시뮬레이션</style.title>
            <style.Wrapper>
                <style.enhanceContainer>
                    <util.Text fontweight={'bold'}>스타포스 강화</util.Text>
                    <style.starContainer>
                        <style.starText fontsize='35' color={'pink'}>★</style.starText>
                        <util.Text fontsize='20'>x{starLevel}</util.Text>
                    </style.starContainer>
                    <util.Text fontsize='15'>성공 확률 : {calcPercents().success.toFixed(2)}%&nbsp;실패 확률 : {calcPercents().failed.toFixed(2)}%&nbsp;파괴 확률 : {calcPercents().destroyed.toFixed(2)}%</util.Text>
                    <util.Text fontsize='20'>피버 타임 : {chancetime == 2 ? '활성화' : '비활성화'}</util.Text>
                    <style.inputWrapper>
                        <style.inputContainer>
                            <util.Text fontsize='15'>장비 요구 레벨</util.Text>
                            <style.enhanceInput type='text' value={starRequireLevel.toLocaleString('ko-KR')} onChange={(e) => {inputValue(e.target.value, setStarRequireLevel)}}/>
                        </style.inputContainer>
                        <style.inputContainer>
                            <util.Text fontsize='15'>아이템 가격</util.Text>
                            <style.enhanceInput type='text' value={starItemCost.toLocaleString('ko-KR')} onChange={(e) => {inputValue(e.target.value, setStarItemCost)}}/>
                        </style.inputContainer>
                    </style.inputWrapper>
                    <style.percentContainer>
                        <util.Text fontsize='20'>현재 단계 메소 : {calcFinalCost().toLocaleString('ko-KR')}</util.Text>
                        <util.Text fontsize='20'>누적 사용 메소 : {starforceCost.toLocaleString('ko-KR')}</util.Text>
                    </style.percentContainer>
                    <style.processButton onClick={() => processStarforce()}>스타포스 시행</style.processButton>
                </style.enhanceContainer>
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