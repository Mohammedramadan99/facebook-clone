import React from 'react'
import { Link } from 'react-router-dom'

export default function Logo()
{
    return (
        <Link to="/" className='logo__litter' style={{ color: "#fff" }}>
            M
        </Link>
    )
}
