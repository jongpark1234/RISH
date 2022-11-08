import * as style from './index.style'
import Chart from 'chart.js/auto'
import Range from 'rc-slider'
import 'rc-slider/assets/index.css'

import { Line } from 'react-chartjs-2'

import * as percent from '../Starforce/percentages'

import { useState } from 'react'
import { useRecoilState } from 'recoil'
import { starCatchState, starDestroyedCountState, starforceCostState, starSuccessRatioState } from '../../stores/atom'

const Render = () => {
    const [starforceCost, setStarforceCost] = useRecoilState(starforceCostState)
    const [starDestroyedCount, setStarDestroyedCount] = useRecoilState(starDestroyedCountState)

    const [leftSliderValue, setLeftSliderValue] = useState(0)
    const [rightSliderValue, setRightSliderValue] = useState(24)
    const [starSuccessRatio, setStarSuccessRatio] = useRecoilState(starSuccessRatioState)
    const [starCatch, setStarCatch] = useRecoilState(starCatchState)
    const data =  {
        labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'].slice(leftSliderValue, rightSliderValue + 1),
        datasets: [
            {
                type: 'line',
                label: '정규 확률',
                backgroundColor: 'rgb(192, 192, 75)',
                borderWidth: 2,
                borderColor: 'rgb(192, 192, 75)',
                data: percent.Success[starCatch].slice(leftSliderValue, rightSliderValue + 1),
            }, 
            {
                type: 'line',
                label: '시도 확률',
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgb(75, 192, 192)',
                data: starSuccessRatio.slice(leftSliderValue, rightSliderValue + 1).map((element) => element[0] / element[1] * 100),
            }
        ],
    }
    const options = {
        interaction: {
            mode: 'index',
            intersect: false
        }
    }

    const handleSliderValue = (e) => {
        setLeftSliderValue(e[0])
        setRightSliderValue(e[1])
    }

    return (
        <style.background>
            <style.container>
                <style.textContainer>
                    <style.textKey>총 사용 메소</style.textKey>
                    <style.textValue>{starforceCost.toLocaleString()}</style.textValue>
                </style.textContainer>
                <style.textContainer>
                    <style.textKey>총 파괴 횟수</style.textKey>
                    <style.textValue>{starDestroyedCount}</style.textValue>
                </style.textContainer>
            </style.container>
            <style.chartContainer>
                <Line type='line' data={data} options={options}/>
                <style.sliderContainer>
                    <Range range min={0} max={24} onChange={(e) => handleSliderValue(e)} defaultValue={[leftSliderValue, rightSliderValue]}/>
                </style.sliderContainer>
            </style.chartContainer>
        </style.background>
    )
}
export default Render