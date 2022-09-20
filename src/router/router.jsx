import routes from './routes'
import Nav from '../components/common/Nav/index'
import Footer from '../components/common/Footer/index'
import { Route, Routes } from 'react-router-dom'
const Router = () => {
    return (
        <>
            <Nav/>
            <Routes>
                {
                    routes.map(element => {
                        return <Route
                        path={element.path}
                        element={element.component}
                        key={element.path}
                        />
                    })
                }
            </Routes>
            <Footer/>
        </>
    )
}
export default Router