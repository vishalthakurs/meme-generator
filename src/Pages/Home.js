import React, { useEffect, useState } from 'react'
import MemeCard from '../Components/MemeCard'

import { getAllMemes } from '../api/Memes';

const Home = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
       getAllMemes().then((element)=>setData(element.data.memes)); 
    },[])
  return (
    <div className="row">
        {
            data.map((element)=><MemeCard title={element.title} img={element.url}/>)
        }
    </div>
  )
}

export default Home