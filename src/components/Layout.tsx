import React, { ReactNode } from 'react'
import Header from './Header'
type LayoutProps ={
    children: ReactNode
}
const Layout = ({children}:LayoutProps) => {
    return (
        <div>
            <Header title="My Application"/>
            <div>
                {children}
            </div>   
        </div>
    )
}

export default Layout
