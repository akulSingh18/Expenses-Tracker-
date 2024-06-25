import { useState } from "react";
import Form from "../FormComponent/index"
import "./style.css"



const Borrowed = () =>{


    const [Brrowed,setBorrowed] = useState({
        FromWhom : "",
        Why : "",
        Amount : 0
    })



   



    return (
        <div className="borrowed-comp-cont">
            <div className="borrowed-heading">
                Borrowed
            </div>
            <div className="form-cont">
                <Form 
                type="Borrowed"
                Form={Borrowed}
                setForm={setBorrowed}
                />
            </div>
            <div className="borrowed-comp-list">

            </div>
            



        </div>
    )
}

export default Borrowed ;