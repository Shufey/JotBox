import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { addToNotes, updateToNotes } from '../Redux/noteSlice'



const ViewNotes = () => {

  const {id} = useParams();
  const allNotes = useSelector((state) => state.note.notes)

  const note = allNotes.filter((p) => p._id === id)[0];




  return (
    <div className='w-full'>
        <div className='w-full flex justify-center'>
            <input 
                className='bg-[#212124] border border-white text-white text-sm rounded-lg w-[50%] p-2.5'
                type='text'
                placeholder='Enter title here'
                value={note.title}
                disabled
                onChange={(e) => setTitle(e.target.value)}
            />

      
        </div>

        <div className='w-full flex justify-center'>
            <textarea
                className='mt-4 bg-[#212124] border border-white text-white text-sm rounded-lg w-[50%] p-2.5'
                value={note.content}
                disabled
                placeholder='Enter content here'
                onChange={(e)=>setValue(e.target.value)}
                rows={20}
            />
        </div>
    </div>
  )
}

export default ViewNotes