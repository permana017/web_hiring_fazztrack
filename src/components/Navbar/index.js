import React from 'react'
import { useNavigate } from 'react-router'

function Navbar() {
    const navigate = useNavigate()
    return (
        <div className="navbar bg-primary text-primary-content flex justify-center">
            <div className='container'>
                <p onClick={()=> navigate("/")} className="cursor-pointer normal-case font-semibold text-2xl">User</p>
            </div>
        </div>
    )
}

export default Navbar