import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Backdrop from './Components/Backdrop';
import Modal12 from './Components/Modal12';
import Todo from './Components/Todo';

function App() {
  return (
    <>
        {/* <Backdrop/>
        <Modal12/> */}
        <Todo text="Learn React"/>
        <Todo text="Learn Next"/>
        <Todo text="Learn Python"/>

    </>
    
  );
}

export default App;
