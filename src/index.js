import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import GlobalFonts from './styles/fonts/pretendard'
import GlobalStyles from './styles/style'

ReactDOM.render(
    <React.StrictMode>
        <GlobalFonts/>
        <GlobalStyles/>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)