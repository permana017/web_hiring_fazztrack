

import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar';

function Matrix() {
    
    const [getValue, setGetValue] = useState(0)

    console.log(getValue);
    const dataMatrix = []
    function math(value) {
        let tempArr = []
        let j = 1
        console.log("val", value);
        
        if (value > 0) { //for value positive
            let pangkat = value * value
            for (let i = 1; i <= pangkat ; i++) {
                if (j <= value) {
                    tempArr.push(i)
                    j++
                    if (i === pangkat) {
                        dataMatrix.push(tempArr)
                    }
                } else {
                    dataMatrix.push(tempArr)
                    tempArr=[i]
                    j = 2
                }
            }
        } else {   //for value negative
            let pangkat = value * value * -1
            for (let i = -1; i >= pangkat ; i--) {
                if (j <= (value*-1)) {
                    tempArr.push(i)
                    j++
                    if (i === pangkat) {
                        dataMatrix.push(tempArr)
                    }
                } else {
                    dataMatrix.push(tempArr)
                    tempArr=[i]
                    j = 2
                }
            }
            
        }
    }
    

    const generate = (e) =>{
        setGetValue(e)
    }
    
    math(getValue)
    console.log(dataMatrix)

    


  return (
    <div className="w-full flex flex-col items-center">
        <Navbar/>
        <div className="container flex justify-center">
            <div className="w-[50%] bg-[] flex flex-col items-center mt-20 ">
                <div className='flex mb-5'>
                    <input onChange={(e)=>generate(e.target.value)} type="number" placeholder="input matrix value" className="input input-bordered w-[60%] mr-[2%]" />
                    <button className="btn w-[38%]" >generate</button>
                </div>
                <p className='font-semibold text-2xl mb-2 text-white'>Result</p>
                {dataMatrix.map((item,i)=>(
                    <>  
                        <div key={i} className="m-1">[{item.toString()}]</div>
                    </>
                ))}
            </div>
        </div>
    </div>

  )
}

export default Matrix