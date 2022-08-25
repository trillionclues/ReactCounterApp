// button component
import React from 'react'

export default function Button(props) {
  const { action, title } = props
  return <button onClick={action}> {title} </button>
}
