import './App.css';
import Card from './component/Card'
const TEST_DATA = [{
  name: 'Sydnee',
  age: 30
}, 
{
  name: 'Benny',
  age: 29
}]

function App() {
  return (
    <div className="App">
      {
        TEST_DATA.map((person) => {
          return <Card>{person.name + ' (' + person.age + ' years old)'}</Card>
        })
      }
    </div>
  );
}

export default App;
