import Main from '../components/Main/index'
import NotFound from '../components/NotFound/index'
import Starforce from '../components/Starforce/index'
import Potential from '../components/Potential/index'
import Additional from '../components/Additional/index'
import Statistics from '../components/Statistics/index'
export default [
    { path: '*', component: <NotFound/> },
    { path: '', component: <Main/> },
    { path: 'starforce', component: <Starforce/> },
    { path: 'potential', component: <Potential/> },
    { path: 'additional', component: <Additional/> },
    { path: 'statistics', component: <Statistics/> },
]