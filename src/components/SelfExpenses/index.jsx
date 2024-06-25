import "./style.css"
import Form from "../FormComponent/index"
import { useState } from "react";


const SelfExpenses = () =>{



    const [selfExpensesForm,setSelfExpensesForm] = useState({
        spendOn : "",
        amount : 0
    });

    return (
        <div className="self-expenses-comp-cont">
            <div className="self-expenses-heading">
                Self Expenses
            </div>
            <div className="form-cont">
                <Form 
                 Form={selfExpensesForm}
                 setForm={setSelfExpensesForm} 
                 type="SelfExpenses"
                />
            </div>
            <div className="self-expenses-comp-list">
                
            </div>

        </div>
    )
}


export default SelfExpenses;
