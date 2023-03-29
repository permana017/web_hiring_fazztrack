import {useState} from "react"
import Input from "../Input"
import axios from "axios"

function Modal({label, refresh}) {

    const [getValue, setGetValue] = useState(
        {username: "", phone: "", email: "", address: ""}
    )
    const [triger, setTriger] = useState(false)
    refresh(!triger)

    const handlePost = () =>{
        console.log("hahahha")
        axios({
            method: 'post',
            url: `http://localhost:5000/api/user`,
            data: {
              ...getValue
            }
          }).then((res)=>{
            console.log(res.data);
            setTriger(!triger)
          }).catch((err)=>{
            console.log(err.data);
          })
    }

    console.log(getValue)
    return (
        <> {
            label
        } < input type = "checkbox" id = "my-modal" className = "modal-toggle" /> <form className="modal">
            <div className="modal-box p-10">
                <Input
                    onChange={(e) => setGetValue({
                        ...getValue,
                        username: e.target.value
                    })}
                    placeholder=""
                    type="text"
                    label="Username:"/>
                <Input
                    onChange={(e) => setGetValue({
                        ...getValue,
                        phone: e.target.value
                    })}
                    placeholder=""
                    type="number"
                    label="Phone:"/>
                <Input
                    onChange={(e) => setGetValue({
                        ...getValue,
                        email: e.target.value
                    })}
                    placeholder=""
                    type="text"
                    label="Email:"/>
                <Input
                    onChange={(e) => setGetValue({
                        ...getValue,
                        address: e.target.value
                    })}
                    placeholder=""
                    type="text"
                    label="Address:"/>
                <div className="modal-action">
                    <label onClick={()=>handlePost()} htmlFor="my-modal" className="btn">Yay!</label>
                </div>
            </div>
        </form>
    </>
    )
}

export default Modal