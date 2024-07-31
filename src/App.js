import React from 'react'
import ChemicalApp from './components/exam/ChemicalApp'
import { Provider } from 'react-redux'
import store from './components/redux/store'

export default function App() {
    return (
        <div>
            <Provider store={store}>
                <ChemicalApp />
            </Provider>
        </div>
    )
}
