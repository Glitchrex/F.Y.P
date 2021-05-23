import React from 'react'

export default function Display(props) {
  const { state } = props.location
  return (
    <>
      <div>
        <h1>welcome to display {state}</h1>
      </div>
      <button type='submit'>Google Search</button>
    </>
  )
}
