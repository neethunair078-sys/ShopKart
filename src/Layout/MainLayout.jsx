import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const MainLayout = () => {
    return (
        <>
            {/* <Navbar />
            <Outlet />
            <Footer /> */}
            <div className="layout">
                <Navbar />

                <main className="layout-content">
                    <Outlet />
                </main>

                <Footer />
            </div>
        </>
    )
}

export default MainLayout
