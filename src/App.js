import './App.css';
import React, {useEffect, useState} from 'react'
const nayok=[{name:`Md Mazharul Islam`, job:`front-end-developer`},
{name:`nabila`, job:`tilugiri`}]
const names = [`shovon`,`nabila`]
function App() {
  return (
    <div className="App">
      <header className="App-header">
      {
        nayok.map(item => <MyName name={item.name} job={item.job}></MyName>)
      }

      <MyData></MyData>
      </header>
    </div>
  );
}
const MyData =()=>{
  const [user,setUser]= useState([])
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res=>res.json())
    .then(data=> setUser(data))
  },[])
  return(
    <div>
      {
        user.map(item=> {
          return <div>
            <li>{item.name}</li>
            <li>{item.email}</li>
          </div>
          
        })
      }
    </div>
  )
}
const MyName=(props)=>{
    return (
      <div>
        <h2>{props.name}</h2>
        <p>{props.job}</p>
      </div>
    )
}
export default App;
