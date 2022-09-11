import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Intro from './Intro'
import { loginUserAction } from '../../redux/slices/users/usersSlices'

export default function Login()
{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { userAuth, loading, serverErr, appErr } = useSelector(state => state?.users);

    const [formData, setFormDate] = useState({
        email: "",
        password: "",
    });
    const onChange = (e) =>
    {
        setFormDate((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };
    const submitHandler = e =>
    {
        e.preventDefault()
        dispatch(loginUserAction(formData))
    }
    useEffect(() =>
    {
        if (userAuth)
        {
            return navigate("/");
        }
    }, [userAuth])

    return (
        <div className='login'>
            <div className="login__left">
                <Intro dir="login__left" />
            </div>
            <div className="login__right">
                <form className="login__right__form" onClick={submitHandler}>
                    <input type="text" placeholder='email' name="email" onChange={onChange} />
                    <input type="password" placeholder='password' name="password" onChange={onChange} />
                    <input type="submit" className='login__right__form__submit' value="login" />
                    <Link to="#" className="login__right__form__link"> forgotten password </Link>
                    <Link to="/register" className="login__right__form__createNewAccbtn">
                        create new account
                    </Link>
                </form>
            </div>
        </div>
    )
}
