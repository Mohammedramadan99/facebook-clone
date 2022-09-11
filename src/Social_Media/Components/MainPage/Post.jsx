import React from 'react'
import me from '../../imgs/me.jpg'
import cover from '../../imgs/cover.jpg'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import Comment from './Comment';

function Post({ direction, post })
{
    return (
        <div className={`${direction}__posts__post`}>
            <div className={`${direction}__posts__post__userInfo`}>
                <div className={`${direction}__posts__post__userInfo__img img__rounded`}>
                    <img src={post?.user?.profilePhoto} alt="you" />
                </div>
                <div className={`${direction}__posts__post__userInfo__name`}>
                    {post?.user?.firstName} {post?.user?.lastName}
                </div>
            </div>
            <div className={`${direction}__posts__post__content`}>
                {post?.description}
            </div>
            <div className={`${direction}__posts__post__img`}>
                <img src={post?.image} alt="post img" />
            </div>
            <div className={`${direction}__posts__post__numbers`}>
                <div className={`${direction}__posts__post__numbers__likesNums">0 likes</di`}>
                    <div className={`${direction}__posts__post__numbers__commentsNums`}>
                        <span> {post.likes.length} <strong> like </strong> </span>
                        <span> {post.disLikes.length} <strong> dislike </strong> </span>
                        <span> {post.comments.length} <strong> comments </strong> </span>
                    </div>
                    <div className={`${direction}__posts__post__actions`}>
                        <div className={`${direction}__posts__post__actions__item`}>
                            <ThumbUpOffAltIcon /> like

                        </div>
                        <div className={`${direction}__posts__post__actions__item`}>
                            <ThumbDownOffAltIcon /> dislike

                        </div>
                        <div className={`${direction}__posts__post__actions__item`}>
                            <ChatBubbleOutlineIcon /> comment

                        </div>
                    </div>
                    <div className={`${direction}__posts__post__commentsGroupe`}>
                        <div className={`${direction}__posts__post__commentsGroupe__writeComment`}>
                            <div className={`${direction}__posts__post__commentsGroupe__writeComment__userImg img__rounded`}>
                                <img src={me} alt="img" />
                            </div>
                            <div className={`${direction}__posts__post__commentsGroupe__writeComment__input`}>
                                <input type="text" placeholder='write a comment' />
                            </div>
                        </div>
                        <div className={`${direction}__posts__post__commentsGroupe__comments`}>
                            <Comment />
                            <Comment />
                            <Comment />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Post