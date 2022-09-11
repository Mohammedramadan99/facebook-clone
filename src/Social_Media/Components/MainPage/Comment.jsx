import React from 'react'
import me from '../../imgs/me.jpg'

export default function Comment()
{
    return (
        <div className="mainPage__middle__posts__post__commentsGroupe__comments__comment">
            <div className="mainPage__middle__posts__post__commentsGroupe__comments__comment__img img__rounded">
                <img src={me} alt="img" />
            </div>
            <div className="mainPage__middle__posts__post__commentsGroupe__comments__comment__details">
                <div className="mainPage__middle__posts__post__commentsGroupe__comments__comment__details__name">mohammed abdallah</div>
                <div className="mainPage__middle__posts__post__commentsGroupe__comments__comment__details__commentContent">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel cupiditate ratione accusantium ab soluta. Fugit autem animi, quod numquam eligendi fuga delectus atque consequatur voluptatibus ut quae quam quo explicabo.
                </div>
            </div>
        </div>
    )
}
