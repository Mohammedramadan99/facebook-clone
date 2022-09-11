import React from 'react'
import Posts from './Posts'
import Sidebar from './Sidebar'

function MainPage()
{
    return (
        <div className='mainPage'>
            <div className="mainPage-container">
                <div className="mainPage__left"> <Sidebar /> </div>
                <Posts direction="mainPage__middle" />
                <div className="mainPage__right"> <Sidebar /> </div>
            </div>
        </div>
    )
}

export default MainPage