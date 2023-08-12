import './App.css';
import Card from './component/Card'
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
      <Card>
        <UserForm showUserData={handleUserData}/>
        </Card>
      <Card>
      {
        userData.map((person) => {
          return <p key={person.id}>{person.name + ' (' + person.age + ' years old)'}</p>
        })
      }
      </Card>
    </div>
  );
}

export default App;
