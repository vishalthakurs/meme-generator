import React, { useState } from 'react'
import Draggable from 'react-draggable'

const Text = () => {
  const [editMode,setEditMode]=useState(false);
  const [value,setValue]=useState('change');
  return (
    <Draggable>
    <div>
      {editMode?
      (<input onChange={(event)=>setValue(event.target.value)} onDoubleClick={()=>setEditMode(false)} style={{borderCollapse:'unset'}}></input>):
      (<h1 onDoubleClick={()=>setEditMode(true)}>{value}</h1>)}
    </div>
    </Draggable> 
  )
}

export default Text