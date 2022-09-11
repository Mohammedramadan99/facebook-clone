import React, { useEffect } from 'react'
import Post from './Post'
import WritePost from './WritePost'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPostsAction } from '../../redux/slices/posts/postSlices'
function Posts({ direction })
{
    const dispatch = useDispatch()
    const { postLists } = useSelector(state => state.post)
    useEffect(() =>
    {
        dispatch(fetchPostsAction(''))
    }, [])

    return (
        <div className={direction}>
            <WritePost />
            {postLists?.map(p => <Post key={p._id} post={p} direction={direction} />)}

        </div>
    )
}

export default Posts