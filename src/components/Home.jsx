import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { addToNotes, updateToNotes } from '../Redux/noteSlice'

const Home = () => {

const [title, setTitle] = useState('')
const [value, setValue] = useState('')
const [searchParams, setSearchParams] = useSearchParams()
const noteId = searchParams.get("noteId")
const dispatch = useDispatch()
const allNotes = useSelector((state) => state.note.notes)

useEffect(() => {
    console.log("inside use effect")
    if(noteId){
        const note = allNotes.find((p) => p._id === noteId);
        console.log("page found")
        setTitle(note.title)
        setValue(note.content)
    }
 
}, [noteId])



function createNote(){

    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    const note = {
        title : title,
        content : value,
        _id : noteId || Date.now().toString(36),
        createdAt : new Date().toLocaleDateString('en-us', options),
    }

    if(noteId){
        //update
        dispatch(updateToNotes(note))
    }
    else{
        //create
        dispatch(addToNotes(note))
    }

    // after updation or creation 

    setTitle('')
    setValue('')
    setSearchParams({})
}

  return (
    <div className='h-[90%] w-full flex-grow flex items-center justify-center flex-col gap-5'>
        <div className='w-full flex gap-5 items-center justify-center'>
            <input 
                className='bg-[#212124] border border-white text-white text-sm rounded-lg sm:w-[40%] w-[70%] p-2.5'
                type='text'
                placeholder='Enter title here'
                value={title}
                required
                onChange={(e) => setTitle(e.target.value)}
            />

            <button 
            className=' text-white font-semibold  bg-purple-700 hover:bg-purple-800  rounded-lg text-sm px-4 py-2.5'
            
            onClick={createNote}>
                {
                    noteId ? "Update My Note"
                    : "Create My Note"
                }
            </button>
        </div>

        <div className='w-full'>
            <textarea
                className='bg-[#212124] border mx-auto border-white rounded-lg lg:w-[50%] md:w-[60%] sm:w-[70%] w-[80%] flex-grow p-2.5 flex text-white '
                value={value}
                placeholder='Enter content here'
                onChange={(e)=>setValue(e.target.value)}
                rows={20}
            />
        </div>
        
    </div>
  )
}

export default Home