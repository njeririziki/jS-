import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import useFetchData from './hooks/useFetchData'
import PlainList from './components/List'

function App() {
 
const [users, setUsers] = useState([]);
// this is a custom hook calling
  const {getData}=useFetchData()

  //this is datafeched the async way
  const fetchTheData=()=>{
    const params={
      results:4,
      inc:'name ,email,gender,phone, picture,cell,id,registered,login'
  }
    const profile=[];
    getData('https://randomuser.me/api/',params)
    .then(res=> {
      addToAge(res.results);    })
    .catch(err=>console.log(err))
  }
  //callbacks
  async function fetchDataSynchronously(endpoint ,callbackFunc ) {
    const response = await fetch( endpoint); // use fetch to get data from an API
    const data = await response.json(); // wait for the response to resolve and parse the JSON data
    // handle the data
    callbackFunc(data.results)
  
  }
  

  //callback function
  function addToAge(data){
      console.log(data);
      const arr=[]
     data.map(item=>{
      arr.push( item.registered.age + 5)
     })
    return  console.log(arr)
  }
 


  return (
    <div className='w-screen h-screen bg-white flex justify-center items-center '>
    
      <div className='flex flex-col gap-8'>
        <button onClick={fetchTheData}>
          fetch asynchronously
        </button>
        <button onClick={()=>fetchDataSynchronously('https://randomuser.me/api/', addToAge
        )}>
          callback 
        </button>
        {/* <PlainList data={users}/> */}
      </div>
      
    </div>
  )
}

export default App;
