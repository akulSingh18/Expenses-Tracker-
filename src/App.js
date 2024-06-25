import StartingComponent from './components/StartingComponent';
import Form from "./components/FormComponent/index"
import SelfExpenses  from './components/SelfExpenses';
import Borrowed  from './components/Borrowed';
import Given from './components/Given/index,'
import './App.css';


function App() {
  return (
    // <div className="App">

    //   <div className='heading-cont'>
    //       Expenses Tracker
    //   </div>
    //   <div className='components-cont'>
    //     <StartingComponent text="Self Expenses"/>
    //     <StartingComponent text="Borrowed"/>
    //     <StartingComponent text = "Given"/>
    //   </div>
    // </div>

    <Borrowed/>

     
  )
}

export default App;
