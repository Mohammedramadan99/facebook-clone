import React from 'react'
import Friend from './Friend'
import FavoriteIcon from '@mui/icons-material/Favorite'
import SchoolIcon from '@mui/icons-material/School';
export default function Sidebar()
{
    return (
        <div className='user__bottom__sidebar'>
            <div className="user__bottom__sidebar__introCard">
                <div className="user__bottom__sidebar__introCard__title">
                    intro
                </div>
                <div className="user__bottom__sidebar__introCard__content">
                    <div className="user__bottom__sidebar__introCard__content__bio">
                        Full Stack Developer
                    </div>
                    <div className="user__bottom__sidebar__introCard__content__study">
                        <SchoolIcon /> Studied at Faculty of commerce
                    </div>
                    <div className="user__bottom__sidebar__introCard__content__status">
                        <FavoriteIcon /> single
                    </div>
                </div>
            </div>
            <div className="user__bottom__sidebar__friendsCard">
                <div className="user__bottom__sidebar__friendsCard__title">
                    friends
                </div>
                <div className="user__bottom__sidebar__friendsCard__friendsList">
                    <Friend />
                    <Friend />
                    <Friend />
                </div>
                <div className="user__bottom__sidebar__friendsCard__btn common_btn">see all friends</div>
            </div>
        </div>
    )
}
