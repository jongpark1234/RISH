import Router from './router/router.jsx'
import { BrowserRouter } from "react-router-dom"
import { RecoilRoot } from 'recoil'
const App = () => {
    return (
        <RecoilRoot>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Router/>
            </BrowserRouter>
        </RecoilRoot>
    )
}
export default App
