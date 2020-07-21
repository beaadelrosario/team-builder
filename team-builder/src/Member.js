import React from 'react'

export default function Member(props) {
  const { details } = props

  if (!details) {
    return <h3>Working fetching your teammates&apos;s details...</h3>
  }

  return (
    <div className='teammate container'>
      <h3>{details.name}</h3>
      <p>Email: {details.email}</p>
      <p>Location: {details.location}</p>
      <p>Role: {details.role}</p>
    </div>
  )
}