import React, {useState} from 'react'
import {useLocation} from 'react-router'
import Input from '../../components/Input'
import Navbar from '../../components/Navbar'
import axios from 'axios'

function Detail() {
    let {state} = useLocation()

    const defaultData = state?.some

    console.log("default", state);

    const [getValue, setGetValue] = useState({
        username: defaultData
            ?.username,
        phone: defaultData?.phone,
        email: defaultData?.email,
        address: defaultData?.address
    })

    // console.log();

    const handleUpdate = (e) => {
        e.preventDefault()
        axios({
            method: 'put',
            url: `http://localhost:5000/api/user/${defaultData?._id}`,
            data: {
                ...getValue
            }
        })
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err.data);
            })
        }

    return (
        <div className='w-full flex flex-col items-center'>
            <Navbar/>
            <div className='container w-full flex justify-center mt-20'>
                <form
                    onSubmit={(e) => handleUpdate(e)}
                    className='w-1/2 p-10 bg-neutral rounded-xl'>
                    <p className='text-center font-bold text-xl mb-5'>EDIT</p>
                    <Input
                        label="Username:"
                        defaultValue={defaultData?.username}
                        type="text"
                        onChange={(e) => setGetValue({
                            ...getValue,
                            username: e.target.value
                        })}/>
                    <Input
                        label="Phone:"
                        defaultValue={defaultData?.phone}
                        type="text"
                        onChange={(e) => setGetValue({
                            ...getValue,
                            phone: e.target.value
                        })}/>
                    <Input
                        label="Email:"
                        defaultValue={defaultData?.email}
                        type="text"
                        onChange={(e) => setGetValue({
                            ...getValue,
                            email: e.target.value
                        })}/>
                    <Input
                        label="Address:"
                        defaultValue={defaultData?.address}
                        type="text"
                        onChange={(e) => setGetValue({
                            ...getValue,
                            address: e.target.value
                        })}/>
                    <div className=' w-full flex justify-end mt-10'>
                        <button type='submit' className='btn btn-primary'>update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Detail