import React from 'react'
import { useNavigate } from 'react-router'

function Navbar() {
    const navigate = useNavigate()
    return (
        <div className="navbar bg-primary text-primary-content flex justify-center">
            <div className='container'>
                <div className='flex items-center '>
                    <p onClick={()=> navigate("/")} className="cursor-pointer normal-case font-semibold text-2xl mr-10">User</p>
                    <div className='flex'>
                        <p onClick={()=>navigate("/")} className='font-semibold cursor-pointer mr-5'>Task 1</p>
                        <p onClick={()=>navigate("/matrix")} className='font-semibold cursor-pointer '>Task 2</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar