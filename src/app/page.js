'use client'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { addname, deletename } from './redux/slices'

export default function Home() {
  const [name, setName] = useState(null)
  const [data, setdata] = useState(null)
  const reduxdata = useSelector((state) => state.names)
  const dispatch = useDispatch()

  useEffect(() => {

    setdata(reduxdata)

  }, [reduxdata])



  function addnames() {
    dispatch(addname(name))
  }
  function deletefun(index) {
    dispatch(deletename(index))
  }

  return (
    <div>
      <input type="text" placeholder='add name....' className='p-2 rounded-md' onChange={(e) => setName(e.target.value)} /> <button className='p-3 rounded-md text-white bg-green-600 hover:bg-green-500' onClick={() => addnames()}>add</button>
      <br />
      <br />
      <ul className='list-disc flex flex-col gap-5'>
        {
          data && data.map((item, index) => (
            <li key={index} className='flex flex-wrap gap-5 items-center'>
              <span>{item}</span>
              <button onClick={() => deletefun(index)} className='p-1 rounded-md text-white bg-red-600 hover:bg-red-500'>delete</button>
            </li>
          ))
        }
      </ul>

    </div>
  )
}
