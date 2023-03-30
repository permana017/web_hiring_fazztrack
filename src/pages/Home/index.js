import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import Modal from '../../components/Modal'
import axios from "axios";




function Home() {

    
    const navigate = useNavigate()
    const [data, setData] = useState([])
    const [triger, setTriger] = useState(true)
    useEffect(() => {
        console.log("masuk");
        axios.get('https://api-mongodb-kappa.vercel.app/api/user')
        .then(function (response) {
        //   console.log(response.data);
          setData(response.data)
        })
        .catch(function (error) {
          console.log(error);
        })
    }, [triger])


    const handleDelete = (id) =>{

        axios.delete(`https://api-mongodb-kappa.vercel.app/api/user/${id}`)
        .then(function (response) {
          console.log(response.data)
          setTriger(!triger)
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    

    return (
        <div className="w-full flex flex-col items-center">
            <Navbar/>
            <div className='container w-full '>
                <div className='w-full p-5 flex'>
                    <>
                        <Modal refresh={setTriger} label={<label htmlFor="my-modal" className="btn btn-info">ADD USER</label>}/>
                    </>
                </div>
                <div className='w-full flex flex-wrap'>
                    {data.map((item, i)=>(
                        <div key={i}  className="card sm:w-[48%] md:w-[31%] lg:w-[23%] w-[98%] m-[1%] bg-neutral shadow-xl">
                            <div className="card-body p-4">
                                <h2 className="card-title">{item.username}</h2>
                                <p>Username : {item.username}</p>
                                <p>Phone : {item.phone}</p>
                                <p>Email : {item.email}</p>
                                <p>Address : {item.address}</p>
                                <div className="card-actions justify-end">
                                    <button onClick={()=>handleDelete(item._id)} className="btn btn-error">Delete</button>
                                    <Link to="/detail" state={{ some: item }}>
                                        <div>
                                            <button onClick={()=> navigate("/detail")} className="btn btn-primary">EDIT</button>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home