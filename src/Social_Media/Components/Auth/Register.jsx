import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Intro from './Intro'
import { registerUserAction } from '../../redux/slices/users/usersSlices'

export default function Register()
{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    //select state from store
    const storeData = useSelector(store => store?.users);
    const { loading, appErr, serverErr, registered } = storeData;

    const [formData, setFormDate] = useState({
        firstName: "",
        lastName: "",
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
        dispatch(registerUserAction(formData))
    }
    // if (registered)
    // {
    //     return navigate("/login");
    // }
    return (
        <div className='register'>
            <div className="register__left">
                <Intro dir="register__left" />
            </div>
            <div className="register__right">
                <form className="register__right__form" onClick={submitHandler}>
                    <input type="text" placeholder='first name' name="firstName" onChange={onChange} />
                    <input type="text" placeholder='last name' name="lastName" onChange={onChange} />
                    <input type="email" placeholder='email' name="email" onChange={onChange} />
                    <input type="password" placeholder='password' name="password" onChange={onChange} />
                    <input type="submit" className='register__right__form__submit' value="register" />
                    <Link to="/login" className="register__right__form__loginPageBtn">
                        already have email , <strong>login </strong>
                    </Link>
                </form>
            </div>
        </div>
    )
}
