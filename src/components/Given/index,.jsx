import Form from "../FormComponent/index"
import "./style.css"
import { useState } from "react"

const Given = () =>{

  const [GivenForm,setGivenForm] = useState({
    
    ToWhom : "",
    Why :"",
    Amount : 0

  })








    return(
        <div className="given-comp-cont">
            <div className="given-heading">
                Given
            </div>
            <div className="form-cont"> 
                <Form 
                type="Given"
                Form ={GivenForm}
                setForm={setGivenForm}
                />
            </div>
            <div className="given-comp-list">

            </div>

        </div>
    )
}


export default Given;