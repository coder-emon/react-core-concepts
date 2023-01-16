import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const nayoks = ['Sakib khans', 'Bapparaz', 'Rajjak', 'Jasim', 'Rubel']

  return (
    <div className="App">
      <Counter></Counter>
      <h1>data pass to component direct from component attrribute</h1>
      <Person name='Emon' profession='web developer'></Person>
      <Person name='Rabbi' profession='web developer'></Person>
      <Person name='Nayeem' profession='web developer'></Person>
      <h2>data pass to comonent through array direct inddexing by component attirbute</h2>
      <Nayok name={nayoks[0]}></Nayok>
      <Nayok name={nayoks[1]}></Nayok>
      <Nayok name={nayoks[2]}></Nayok>
      <Nayok name={nayoks[3]}></Nayok>
      <Nayok name={nayoks[4]}></Nayok>
      <h2>data pass to component through array map method by dynamic way</h2>
      {
        nayoks.map(nayok => <Nayok name={nayok}></Nayok>)
      }
      <h2>Data pass to component through array mapping by dynamic way but this time pass array of objects</h2>
      <StudentContainer></StudentContainer>
      <h2>Data load from an external API</h2>
      <LoadUserData></LoadUserData>
      
    </div>
  );
}
function Person(props) {
  const personStyle = {
    border: '2px solid aqua',
    borderRadius: '5px',
    width: '350px',
    margin: '10px auto'
  }
  return (
    <div style={personStyle}>
      <h2>Name: {props.name}</h2>
      <h2>Profession: {props.profession}</h2>
    </div>
  )
}

function Nayok(props) {
  return (
    <div className='nayok'>
      <h2>{props.name}</h2>
    </div>
  )
}
function StudentContainer() {
  const students = [
    { name: 'Emon Howlader', class: '13', roll: 314, address: 'shyampur' },
    { name: 'Golam Rabbi', class: '13', roll: 432, address: 'Bakergonj' },
    { name: 'Nayeem Sheikh', class: '15', roll: 245, address: 'Noyakhali' },
    { name: 'Sajib Khan', class: '13', roll: 456, address: 'Kusongol' },
    { name: 'Rahim Akon', class: '13', roll: 574, address: 'Sorupkathi' },
    { name: 'Rakib khan', class: '13', roll: 436, address: 'Sorupkathi' }
  ]
  return (
    <div className='student-container'>
      {
        students.map(student => <Student name={student.name} class={student.class} roll={student.roll} address={student.address} ></Student>)
      }
    </div>
  )
}
function Student(props) {
  return (
    <div className='student'>
      <h2>{props.name}</h2>
      <p>{props.class}</p>
      <p>{props.roll}</p>
      <p>{props.address}</p>
    </div>
  )
}

// Couter by useState
function Counter(){
  const btnStyle = {
    padding:'10px 20px',
    backgroundColor:'blue',
    borderRadius:'5px',
    color:'white',
    marginRight:'10px',
    
  }
  const [count, setCount] = useState(0);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => {
    if(count > 0){
      setCount(count - 1)
    }else{
      return;
    }
  };
  return(
    <div>
      <h2>Counnt: {count}</h2>
      <button style={btnStyle} onClick={decreaseCount}>Decrease</button>
      <button style={btnStyle}onClick={increaseCount}>Increase</button>
    </div>
  )
}

// Loadading data from an api
function LoadUserData() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  
 
  return (
    <div className='user-container'>
      {
        
        users.map(user => <User name={user.name} id={user.id} email={user.email} ></User>)
      }
    </div>

  )
}
function User(props) {
  return (
    <div className='user'>
      <h2>{props.id}</h2>
      <h2>{props.name}</h2>
      <p>{props.email}</p>
    </div>
  )
}

export default App;
