import React from 'react'
import { useState } from 'react'
import Backdrop from './Backdrop'
import Modal12 from './Modal12'

const Todo = (props) => {

    const [modalHandle, setModalHandle] = useState(false)

    const deleteHandler = () =>{

        setModalHandle(true)

    }

    const CloseModal = () =>{
        setModalHandle(false)
    }
  return (
    <div className='listTemplate'>

        <h2>{props.text}</h2> 
        <button type='button' className='btn btn-primary' onClick={deleteHandler}>Delete</button>

        {modalHandle && <Backdrop onCancel={CloseModal}/>}
        {modalHandle && <Modal12 onCancel={CloseModal} onConfirm={CloseModal}/>}

    </div>
  )
}

export default Todo