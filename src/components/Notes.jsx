import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { removeFromNotes } from '../Redux/noteSlice'
import toast from 'react-hot-toast'
import { Link, NavLink } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


const Notes = () => {

  const notes = useSelector((state) => state.note.notes)

  const [searchTerm, setSearchTerm] = useState("")

  const dispatch = useDispatch()

  const filteredData = notes.filter((note)=> note.title.toLowerCase().includes(searchTerm.toLowerCase()));
  
  function handleDelete(noteId){
    dispatch(removeFromNotes(noteId))
  }

  function handleCopy(noteContent){
    navigator.clipboard.writeText(noteContent)
    toast.success("Copied to Clipboard")
  }

  return (
    <div className='h-[90%] w-full flex-grow flex items-center  flex-col gap-5'>
      <div className='text-2xl flex justify-start font-bold'>
        <h2>All Notes</h2>
      </div>

      <div className='w-full flex justify-center'>
        <input 
          className='bg-[#212124] border border-white text-white text-sm rounded-lg w-[50%] p-2.5'
          type="search" 
          placeholder='Search your notes'
          value={searchTerm}
          onChange={(e)=>setSearchTerm(e.target.value)}
       />
      </div>

      <div className='flex flex-col gap-5 w-full h-[100%] overflow-y-scroll overflow-x-hidden items-center'>
          {
            filteredData.length > 0 && filteredData.map((note) => {
              return (
                  <div key={note?._id} className='w-[50%] h-[30%] flex flex-col border border-white rounded-lg '>
                    <div className='flex gap-4 justify-end items-center bg-purple-500 pr-3 py-1 rounded-tl-lg rounded-tr-lg'>
                    
                        <NavLink to={`/?noteId=${note?._id}`}>
                          <FontAwesomeIcon icon={faPenToSquare} title='Edit'/>
                        </NavLink>

                        <NavLink to={`/notes/${note?._id}`}>
                          <FontAwesomeIcon icon={faEye} title='View'/>
                        </NavLink>
                      
                        <FontAwesomeIcon icon={faTrash} title='Delete' onClick={() => handleDelete(note?._id)} />

                        <FontAwesomeIcon icon={faCopy} title='Copy' onClick={() => handleCopy(note?.content)} />

                    
                    </div>

                  <div className='flex justify-start items-center font-bold text-2xl mb-2 pl-3'>
                    {note.title}
                  </div>

                  <div className='flex justify-start items-center  overflow-hidden mb-2 pl-3'>
                    {note.content}
                  </div>

                  <div className='flex justify-end items-center pr-3 py-1 font-extralight'>
                    {note.createdAt}
                  </div>
                </div>
              )
            })
          }
      </div>

    </div>
  )
}

export default Notes