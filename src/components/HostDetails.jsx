import React from 'react'

function HostDetails(props) {
   const host = props.host

  return (
    <div className='hotel_host--details'>
      <h2>{host.name}</h2>
      <img src={host.picture} alt={`picture of ${host.name}`} />
    </div>
  )
}

export default HostDetails
