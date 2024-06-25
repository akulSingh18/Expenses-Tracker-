import "./style.css"

const Form = (props) => {

    const { type,Form, setForm} = props;


  // console.log(selfExpensesForm);

  const handleChange = (e) => {
    const { name, value} = e.target;
    setForm(prev => ({ ...prev, [name]: value}))
  }

  const handleClickAdd = () =>{
    console.log(Form)
  }

  const handleGiven = (e) => {

    const {name ,value} = e.target;
    setForm(prev => ({...prev,[name]:value}))
  }





    return(
        <div className="form">
          <div className="self-expenses-cont">
          {type === "SelfExpenses" && 
            <div className="spend-cont">
                <label htmlFor="spend-on">Spend on</label>
                <input name="spendOn" value={Form?.spendOn} onChange={(e)=> handleChange(e)} type="text" />
            </div>
          }
          {type === "Borrowed" &&
            <>
                  <div className="spend-cont">
                  <label > From whom</label>
                    <input name="FromWhom" value={Form?.FromWhom} onChange={(e)=>handleGiven(e)}  type="text" />
                  </div>
                  <div className="spend-cont">
                    <label >Why</label>
                    <input name="Why" value={Form?.Why} onChange={(e)=>handleChange(e)} type="text" />
                  </div>
            </>    
          }
          {type === "Given" && 
            <>
            <div className="spend-cont">
                  <label> To Whom</label>
                  <input name="ToWhom" value={Form?.ToWhom} onChange={(e)=>handleGiven(e)} type="text" />

                </div>
                <div className="spend-cont">
                  <label>Why</label>
                  <input name="Why" value={Form?.Why}  onChange={(e)=>handleGiven(e)} type="text" />

                </div>
            </>
          }
          <div className="spend-cont">
            <label  >Amount</label>
            <input name="Amount" value={Form?.Amount} onChange={(e)=>handleGiven(e)} type="number" />

          </div>
          <div className="add-button-cont">
            <button  onClick={(e)=>handleClickAdd(e)} >ADD</button>
          </div>
          </div>
        </div>
    )

}

export default Form;