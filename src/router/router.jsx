import routes from './routes'
import { Route, Routes } from 'react-router-dom'
const Router = () => {
    return (
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
    )
}
export default Router