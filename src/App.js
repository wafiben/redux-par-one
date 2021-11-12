import './App.css';
import { useDispatch,useSelector} from "react-redux" 
import {Increment,Decrement} from './redux/Actions'
import Home from './home'
function App() {
  const state=useSelector(state=>state)
  const dispatch=useDispatch();
  function handleClickIcrement(){
   dispatch(Increment())
  }
  function handleClickDecrement(){
   dispatch(Decrement());
  }
  return (
    <div className="App">
     <button onClick={handleClickIcrement} >+</button>
     <span>{state}</span>
     <button onClick={handleClickDecrement}>-</button>
     <Home></Home>
    </div>
  );
}

export default App;
