import React from 'react'
import SingleColor from './SingleColor'


const ColorList = ({colors}) => {
  return (
    <div className='d-flex flex-wrap mt-3'>
     {
        colors.map((color, index)=> {
            return <SingleColor color={color} key={index} index={index}/>
        })
     }
    </div>
  )
}

export default ColorList