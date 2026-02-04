import React from 'react'
import navbar from './src'

const nevbar = () => {
  return (
    <div className='bg-primary flex justify-between px-5 py-2 '>
      <h1>chatkro</h1>
      <div>
        <span>home</span>
        <span>about</span>
      </div>
      <div className='flex gap-3'>
        <button className='btn btn-secondary'>Login</button>

        <select name="theam" id="theam"className="select">
          <option value="">--select theam--</option>
        </select>
      </div>
    </div>
  )
}

export default nevbar