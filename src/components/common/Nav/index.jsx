import { Link } from 'react-router-dom'
import * as style from './index.style'
const Render = () => {
    const contents = [
        { title : '메인화면', params : '/' }, 
        { title : '스타포스', params : '/starforce' }, 
        { title : '잠재능력', params : '/potential' }, 
        { title : '추가옵션', params : '/additional' }, 
        { title : '통계', params : '/statistics' }, 
    ]
    return (
        <style.background>
            {
                contents.map((items) => {
                    return (
                        <style.container to={items.params}>
                            <style.menu>
                                {items.title}
                            </style.menu>
                        </style.container>
                    )
                })
            }
        </style.background>
    )
}
export default Render