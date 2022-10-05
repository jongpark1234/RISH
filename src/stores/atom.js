import { atom } from 'recoil'

// costs

export let starforceCostState = atom({
    key: 'starforceCost',
    default: 0
})



// Starforce

// main

export let starLevelState = atom({
    key: 'starLevel',
    default: 0
})

export let starRequireLevelState = atom({
    key: 'starRequireLevel',
    default: 200
})

export let starItemCostState = atom({
    key: 'starItemCost',
    default: 1000000000
})

export let chancetimeState = atom({
    key: 'chancetime',
    default: 0
})

export let constantProcessStarforceState = atom({
    key: 'constantProcess',
    default: 0
})

export let constantProcessStarforceGoalState = atom({
    key: 'constantProcessStarforceGoal',
    default: 17
})

// common
export let starCatchState = atom({
    key: 'starcatch',
    default: 0
})
export let starProtectState = atom({
    key: 'protect',
    default: 0
})
export let starPcState = atom({
    key: 'starPc',
    default: 0
})

// mvp
export let mvpLevelState = atom({
    key: 'mvp',
    default: 0
})

// sundayMaple
export let sundayOption1State = atom({
    key: 'sundayOption1',
    default: 0
})
export let sundayOption2State = atom({
    key: 'sundayOption2',
    default: 0
})
export let sundayOption3State = atom({
    key: 'sundayOption3',
    default: 0
})
