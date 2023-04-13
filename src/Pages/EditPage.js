import React, { useState,useRef } from 'react'
import { Button } from 'react-bootstrap';
import {useSearchParams} from 'react-router-dom'
import Text from '../Components/Text';
import {exportComponentAsJPEG} from 'react-component-export-image'

const EditPage = () => {
    const [params]=useSearchParams();
    const [count,setCount]=useState(0);
    const inputRef=useRef();
    const addText=()=>{
      setCount(count +1);
    }
    const saveImage=()=>{
      exportComponentAsJPEG(inputRef);
    }
  return (
    <div>
      <div className='meme mt-5' ref={inputRef}>
        <img src={params.get('url')} alt="" width='400px' />
        {
          Array(count).fill(0).map((element)=> <Text />)
        }
        </div>
        <Button variant='primary' onClick={addText}>Text</Button>
        <Button variant='success' onClick={saveImage}>Save</Button>
    </div>
    
  )
}

export default EditPage