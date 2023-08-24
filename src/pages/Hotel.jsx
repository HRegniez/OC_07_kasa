import React from 'react'
import { useParams } from 'react-router-dom'

function Hotel({props}) {
    const params = useParams()
    console.log(params)
    console.log(props)
  return (
    <div>
      
    </div>
  )
}

export default Hotel
