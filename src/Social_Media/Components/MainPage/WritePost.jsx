import React, { useEffect, useState } from 'react'
import PanoramaIcon from '@mui/icons-material/Panorama';
import cover from '../../imgs/cover.jpg'
import me from '../../imgs/me.jpg'
import { fetchCategoriesAction } from '../../redux/slices/category/categorySlice'
import { createpostAction } from '../../redux/slices/posts/postSlices'
import { useDispatch, useSelector } from 'react-redux';
function WritePost()
{
    const dispatch = useDispatch()
    const { categoryList } = useSelector(state => state?.category)
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState("")
    const [formData, setFormDate] = useState({
        desciption: "",
        category: "",
    })
    // for checking 
    const [addImg, setAddImg] = useState(false)
    // for inputs
    const [postContent, setPostContent] = useState("")

    const createPostImagesChange = (e) =>
    {
        const file = e.target.files[0];

        const Reader = new FileReader();
        Reader.readAsDataURL(file);

        Reader.onload = () =>
        {
            if (Reader.readyState === 2)
            {
                setImage(file);
                setImagePreview(Reader.result)
            }
        };
    };
    const addPhotoHandler = () =>
    {
        setAddImg(!addImg)
        addImg && setImagePreview("")
    }
    const onChange = (e) =>
    {
        setFormDate((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };
    const createPost = () =>
    {
        const allData = { ...formData, image }
        dispatch(createpostAction(allData))
        console.log(allData)
    }
    useEffect(() =>
    {
        dispatch(fetchCategoriesAction())
    }, [])
    return (
        <div className='mainPage__middle__writePost' >
            <div className="mainPage__middle__writePost__user">
                <div className="mainPage__middle__writePost__user__img img__rounded">
                    <img src={me} alt="you" />
                </div>
                <div className="mainPage__middle__writePost__user__name"> mohammed ramadan </div>
            </div>
            <div className="mainPage__middle__writePost__top">
                {addImg && (
                    <>
                        <input type="file" accept="image/*" onChange={createPostImagesChange} />
                        {imagePreview && (
                            <div className="mainPage__middle__writePost__top__postImg">
                                <img src={imagePreview} width="100" height="200" alt="Product Preview" />
                            </div>
                        )}

                    </>
                )}

                <div className="mainPage__middle__writePost__top__postContent">
                    <textarea placeholder='what do you want to say?' name="description" onChange={onChange}></textarea>
                </div>
                <div className="mainPage__middle__writePost__top__postCategory">
                    <select name="category" onChange={onChange}>
                        {categoryList?.map(cat => <option key={cat._id} value={cat.title}> {cat.title} </option>)}
                    </select>
                </div>
            </div>
            <hr />
            <div className="mainPage__middle__writePost__bottom">

                <div className="mainPage__middle__writePost__bottom__postPhoto" onClick={addPhotoHandler}>
                    <div className="mainPage__middle__writePost__bottom__postPhoto__icon"> <PanoramaIcon /> </div>
                    photo
                </div>
                <div className="mainPage__middle__writePost__bottom__btn" style={postContent || imagePreview ? { opacity: "1" } : { opacity: ".3" }} onClick={() => createPost()}>
                    post
                </div>
            </div>
        </div>
    )
}

export default WritePost