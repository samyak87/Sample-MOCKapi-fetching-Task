import './App.css';
import GetList from './components/GetList';
import {useEffect, useState} from 'react';
function App() {
  const [propertyList, setPropertyList]= useState([])
  useEffect(()=>{
   async function fetchpropertyList() {
    try{
    const requestURL='https://64369e578205915d34f8504d.mockapi.io/List/';
    const response = await fetch(requestURL);
    const responseJSON=await response.json();
    console.log(responseJSON);
    
    setPropertyList(responseJSON);
    }
    catch{
    console.log("error");
    }
  }
  fetchpropertyList();
  },[]);
  return (
    <>
     <h1>Property List fetched from MockAPI</h1>
      <GetList propertyList={propertyList}/>
  
    </>
  );
}

export default App;
