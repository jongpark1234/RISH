import { Link } from 'react-router-dom'
import * as style from './index.style'
const Render = () => {
    return (
        <style.background>
            <Link to='/'><style.menu>메인화면</style.menu></Link>
            <Link to='/starforce'><style.menu>스타포스</style.menu></Link>
            <Link to='/potential'><style.menu>잠재능력</style.menu></Link>
            <Link to='/additional'><style.menu>추가옵션</style.menu></Link>
            <Link to='/statistics'><style.menu>통계</style.menu></Link>
        </style.background>
    )
}
export default Render