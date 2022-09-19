import Main from '../components/Main/index'
import NotFound from '../components/NotFound/index'
import Starforce from '../components/Starforce/index'
export default [
    {path: '', component: <Main/>},
    {path: '*', component: <NotFound/>},
    {path: 'main', component: <Main/>},
    {path: 'starforce', component: <Starforce/>},
]