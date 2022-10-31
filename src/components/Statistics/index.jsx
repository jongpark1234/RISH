import * as style from './index.style'
import Chart from 'chart.js/auto'
import { Line } from 'react-chartjs-2'

import * as percent from '../Starforce/percentages'
import { useRecoilState } from 'recoil'
import { starCatchState, starSuccessRatioState } from '../../stores/atom'

const Render = () => {
    const [starSuccessRatio, setStarSuccessRatio] = useRecoilState(starSuccessRatioState)
    const [starCatch, setStarCatch] = useRecoilState(starCatchState)
    const data =  {
        labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'],
        datasets: [
            {
                type: 'line',
                label: '정규 확률',
                backgroundColor: 'rgb(192, 192, 75)',
                borderWidth: 2,
                borderColor: 'rgb(192, 192, 75)',
                data: percent.Success[starCatch],
            }, 
            {
                type: 'line',
                label: '시도 확률',
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgb(75, 192, 192)',
                data: starSuccessRatio.map((element) => element[0] / element[1] * 100),
            }
        ],
    }
    const options = {
        interaction: {
            mode: 'index',
            intersect: false
        }
    }
    return (
        <style.background>
            <style.container>
                <style.textContainer>
                    <style.textKey>총 사용 메소</style.textKey>
                    <style.textValue>{5555}</style.textValue>
                </style.textContainer>
            </style.container>
            <style.container>
                <Line type='line' data={data} options={options}/>
            </style.container>
        </style.background>
    )
}
export default Render