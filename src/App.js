import './App.css';
import UserList from './component/UserList';
import UserForm from './component/UserForm'
import { useState } from 'react'

const TEST_DATA = [{
  name: 'Sydnee',
  age: 30,
  id: 1
}, 
{
  name: 'Benny',
  age: 29,
  id: 2
}]

function App() {
  const [userData, setUserData] = useState(TEST_DATA)
  const handleUserData = (userName, userAge, id) => {
    setUserData((prevData)=> [...prevData,{name: userName, age: userAge, id: id}])
  }

  return (
    <div className="App">
        <UserForm showUserData={handleUserData}/>
        <UserList users={userData}/>
    </div>
  );
}

export default App;
