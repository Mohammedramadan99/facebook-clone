import React, { useEffect, useState } from 'react'
import Logo from '../Logo/Logo'
import HomeIcon from '@mui/icons-material/Home'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PostAddIcon from '@mui/icons-material/PostAdd';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import me from '../../imgs/me.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useRef } from 'react'
import { logoutAction } from '../../redux/slices/users/usersSlices'
function Navbar()
{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    let dropdownref = useRef()
    const [icons, setIcons] = useState([
        {
            icon: <HomeIcon />,
            title: 'Home',
            link: "/"
        },
        {
            icon: <PeopleOutlineIcon />,
            title: 'people',
            link: "/people"
        },
        {
            icon: <PostAddIcon />,
            title: 'Write',
            link: "/writePost"
        }
    ])

    const [startSearch, setStartSearch] = useState(false)
    const store = useSelector(state => state?.users)
    const { userAuth, loggedOut } = store
    const [activePage, setActivePage] = useState('Home')
    const [opened, setOpened] = useState(false)

    const logoutHandler = () =>
    {
        dispatch(logoutAction())
    }
    useEffect(() =>
    {
        let handler = e =>
        {
            if (!dropdownref.current.contains(e.target))
            {
                setOpened(false)
                console.log(dropdownref.current)
            }
        }
        document.addEventListener('mousedown', handler)
        return () =>
        {
            document.removeEventListener("mousedown", handler)
        }
    })
    useEffect(() =>
    {
        if (loggedOut)
        {
            navigate('/login')
        }
        console.log(loggedOut)
    }, [loggedOut])
    return (
        <div className="mainNav">
            <div className="nav-container" >
                <div className=" mainNav__left">
                    <div className="mainNav__left__logo">
                        <Logo />
                    </div>
                    <div className={startSearch ? `mainNav__left__search__active` : `mainNav__left__search`} >
                        <SearchIcon onClick={() => setStartSearch(!startSearch)} />
                        <input type="text" />
                        <CloseIcon className={startSearch ? `mainNav__left__search__active__close` : `mainNav__left__search__close`} onClick={() => setStartSearch(false)} />
                    </div>
                </div>
                <ul className=" mainNav__middle">
                    <div className="row">
                        {icons.map((item, i) => (
                            <li key={i} title={item.title} className={activePage == item.title ? 'col mainNav__middle__link active' : 'col mainNav__middle__link'} onClick={() => setActivePage(item.title)} > <Link to={`/${item.link}`}> {item.icon} </Link>  </li>
                        ))}
                    </div>
                </ul>
                <div className=" mainNav__right" ref={dropdownref}>

                    <div className="mainNav__right__item nav-icon">
                        {userAuth?.profilePhoto ? (
                            <img src={userAuth.profilePhoto} className="mainNav__right__item img__rounded" alt="personal img" />
                        ) : (
                            userAuth?.firstName && userAuth.firstName[0]
                        )}
                    </div>
                    <div className="mainNav__right__item nav-icon ">
                        <NotificationsIcon />
                    </div>
                    <div className="mainNav__right__item nav-icon " onClick={() => setOpened(!opened)}>
                        <SettingsIcon />
                    </div>

                    <ul className={opened ? `mainNav__right__dropDown active` : "mainNav__right__dropDown inactive"} >
                        {userAuth && (
                            <DropdownItem icon={<LogoutIcon />} text="logout" func={logoutHandler} />
                        )}
                        {!userAuth && (
                            <DropdownItem icon={<LoginIcon />} text="login" func={() => navigate('/login')} />
                        )}

                    </ul>
                </div>
            </div >
        </div >
    )
}
function DropdownItem({ icon, text, func })
{
    return (
        <li className='mainNav__right__dropDown__item' onClick={func}>
            <div className="mainNav__right__dropDown__item__icon"> {icon} </div>
            <div className="mainNav__right__dropDown__item__text"> {text} </div>
        </li>
    )
}
export default Navbar