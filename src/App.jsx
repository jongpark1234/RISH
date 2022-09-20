import Router from './router/router.jsx'
import { BrowserRouter } from "react-router-dom"
import GlobalFont from './styles/fonts/pretendard.js';
const App = () => {
    return (
        <BrowserRouter>
        <GlobalFont/>
            <Router/>
        </BrowserRouter>
    )
}
export default App
