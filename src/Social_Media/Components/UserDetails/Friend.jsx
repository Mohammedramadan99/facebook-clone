import React from 'react'
import { Link } from 'react-router-dom'
import me from '../../imgs/me.jpg'
export default function Friend()
{
    return (
        <Link to="#" className='user__bottom__sidebar__friendsCard__friendsList__friend'>
            <div className="user__bottom__sidebar__friendsCard__friendsList__friend__img">
                <img src={me} alt="img" />
            </div>
            <div className="user__bottom__sidebar__friendsCard__friendsList__friend__name">mohammed ramadan desoki</div>
        </Link>
    )
}
