
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Meme from './Meme';
import { useEffect, useState } from 'react';

function App() {

  const [data,setData]=useState({});

  useEffect(()=>{
    async function gen()
    {
    let val= fetch("https://api.imgflip.com/get_memes");
    val.then(res=>res.json()).then(data=>setData(data.data.memes))
    }
    return gen();
  },[])

  return (
    <>
      <Header/>
         <Meme data={data}/>

      <Footer/>
    </>
  );
}

export default App;
