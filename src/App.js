import { useState } from 'react';
import './App.css';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUssersList] = useState([]);

 const addUserHandler =( uName, uAge)=>{
   setUssersList((oncekiListe)=>{
     return [
       ...oncekiListe,
       {name:uName, age: uAge}
     ]
   })
 }
  return (
    <div >
  <AddUser users={[usersList]}  />     
    </div>
  );
}

export default App;
