import React from 'react'
import {Router} from '@reach/router'
import Client1 from '../components/Client1'
import Layout from '../components/Layout'

const App = () => {
    return (
        <div>
            <Layout>
                <Router basepath="/App">
                    <Client1 path ="/"/>
                    <Client1 path ="/Client2"/>
                </Router>
            </Layout>
        </div>
    )
}

export default App
