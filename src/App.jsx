import { useState } from 'react';
import './App.css'

function App() {
  const [data, setData] = useState();

  const fetchData = ()=>{
    fetch('https://demo-app-backend-h8sr.onrender.com/')
    .then((response)=>{
      return response.json()
    })
    .then((jsonData)=>{
        setData(jsonData.message);
    })
    .catch((err)=>{
      console.log('Fetch Error:', err)
    })
  }
  return (
    <>
     <h1>MY SPA</h1>
     <button onClick={fetchData}>Fetch</button>
     {!data && <p>no message availble</p>}
     {data && <p>message: {data}</p>}
    </>
  )
}

export default App
