import { atom } from 'recoil'

// costs

export const starforceCostState = atom({ // 스타포스로 사용한 전체 메소
    key: 'starforceCost',
    default: 0
})
export const starProtectCostState = atom({ // 파괴 방지로 추가적으로 지불한 메소
    key: 'starProtectCost',
    default: 0
})
export const starProtectedCountState = atom({ // 파괴 방지로 인해 파괴를 막은 횟수
    key: 'starProtectedCount',
    default: 0
})
export const starProtectedCostState = atom({ // 파괴 방지로 인해 손해보지 않은 메소
    key: 'starProtectedCost',
    default: 0
})


// Starforce

// main

export const starLevelState = atom({
    key: 'starLevel',
    default: 0
})

export const starRequireLevelState = atom({
    key: 'starRequireLevel',
    default: 200
})

export const starItemCostState = atom({
    key: 'starItemCost',
    default: 1000000000
})

export const chancetimeState = atom({
    key: 'chancetime',
    default: 0
})

export const constantProcessStarforceState = atom({
    key: 'constantProcess',
    default: 0
})

export const constantProcessStarforceGoalState = atom({
    key: 'constantProcessStarforceGoal',
    default: 25
})

export const starSuccessRatioState = atom({
    key: 'starSuccessRatio',
    default: Array(25).fill([0, 0], 0, 25)
})

export const starDestroyedCountState = atom({
    key: 'starDestroyedCount',
    default: 0
})

// common
export const starCatchState = atom({
    key: 'starcatch',
    default: 0
})
export const starProtectState = atom({
    key: 'protect',
    default: 0
})
export const starPcState = atom({
    key: 'starPc',
    default: 0
})

// mvp
export const mvpLevelState = atom({
    key: 'mvp',
    default: 0
})

// sundayMaple
export const sundayOption1State = atom({
    key: 'sundayOption1',
    default: 0
})
export const sundayOption2State = atom({
    key: 'sundayOption2',
    default: 0
})
export const sundayOption3State = atom({
    key: 'sundayOption3',
    default: 0
})



// potential

export const cubePartState = atom({
    key: 'cubePart',
    default: 0
})
export const cubeSelectState = atom({
    key: 'cubeSelect',
    default: 0 // [occult, craftman, meister, red, black, occultAdditional, additional]
})
export const cubeGradeState = atom({
    key: 'cubeGrade',
    default: 0
})
export const cubeAdditionalGradeState = atom({
    key: 'cubeAdditionalGrade',
    default: 0
})
export const cubeCountState = atom({
    key: 'cubeCount',
    default: [0, 0, 0, 0, 0, 0, 0] // [occult, craftman, meister, red, black, occultAdditional, additional]
})
export const cubeOptionState = atom({
    key: 'cubeOption',
    default: ['', '', '']
})
export const cubeAdditionalOptionState = atom({
    key: 'cubeAdditionalOption',
    default: ['', '', '']
})
export const cubeUnavailableState = atom({
    key: 'cubeUnavailable',
    default: false
})