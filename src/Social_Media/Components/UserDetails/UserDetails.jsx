import React from 'react'
import cover from '../../imgs/cover.jpg'
import me from '../../imgs/me.jpg'
import Posts from '../MainPage/Posts'
import Sidebar from './Sidebar'
function UserDetails()
{
    return (
        <div className='user'>
            <div className="user__top">
                <div className="user__top__imgs">
                    <div className="user__top__imgs__cover">
                        <img src={cover} alt="" />
                    </div>
                    <div className="user__top__imgs__personalImg">
                        <img src={me} alt="img" />
                    </div>
                </div>
                <div className="user__top__info">
                    <div className="user__top__info__name ">mohammed ramadan</div>
                    <div className="user__top__info__edit">
                        edit profile
                    </div>
                </div>
            </div>
            <div className="user__bottom">
                <Sidebar />
                <div className="user__bottom__postsGroup">
                    <Posts direction="user__bottom__postsGroup" />
                </div>

            </div>
        </div>
    )
}

export default UserDetails