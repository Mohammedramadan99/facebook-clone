import React, { useState } from 'react'
import cover from '../../imgs/cover.jpg'
import me from '../../imgs/me.jpg'
function Sidebar()
{
    const [loggedIn, setLoggedIn] = useState(false)
    return (
        <div className='mainPage__left__sidebar'>
            <div className="mainPage__left__sidebar__G1">
                <div className="mainPage__left__sidebar__G1__Imgs">
                    <div className="mainPage__left__sidebar__G1__Imgs__coverImg">
                        <img src={cover} />
                    </div>
                    <div className="mainPage__left__sidebar__G1__Imgs__profileImg img__rounded">
                        <img src={me} />
                    </div>
                </div>
                <div className="mainPage__left__sidebar__G1__name">
                    mohammed ramadan
                </div>
            </div>
            <hr />
            <div className="mainPage__left__sidebar__G2">
                <div className="mainPage__left__sidebar__G2__head">
                    people you may know
                </div>
                <div className="mainPage__left__sidebar__G2__persons">
                    <div className="mainPage__left__sidebar__G2__persons__person">
                        <div className="mainPage__left__sidebar__G2__persons__person__info">
                            <div className="mainPage__left__sidebar__G2__persons__person__info__img img__rounded">
                                <img src={me} alt="person" />
                            </div>
                            <div className="mainPage__left__sidebar__G2__persons__person__info__name">dimon targerian</div>
                        </div>
                        <div className="mainPage__left__sidebar__G2__persons__person__follow common_btn"> follow </div>
                    </div>
                    <div className="mainPage__left__sidebar__G2__persons__person">
                        <div className="mainPage__left__sidebar__G2__persons__person__info">
                            <div className="mainPage__left__sidebar__G2__persons__person__info__img img__rounded">
                                <img src={me} alt="person" />
                            </div>
                            <div className="mainPage__left__sidebar__G2__persons__person__info__name">dimon</div>
                        </div>
                        <div className="mainPage__left__sidebar__G2__persons__person__follow common_btn"> follow </div>
                    </div>
                    <div className="mainPage__left__sidebar__G2__persons__person">
                        <div className="mainPage__left__sidebar__G2__persons__person__info">
                            <div className="mainPage__left__sidebar__G2__persons__person__info__img img__rounded">
                                <img src={me} alt="person" />
                            </div>
                            <div className="mainPage__left__sidebar__G2__persons__person__info__name">dimon</div>
                        </div>
                        <div className="mainPage__left__sidebar__G2__persons__person__follow common_btn"> follow </div>
                    </div>
                    <div className="mainPage__left__sidebar__G2__persons__seeMore common_btn"> more </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar

// people , personal info