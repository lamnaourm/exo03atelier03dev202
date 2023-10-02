import React from 'react'

export default function Image({image, titre}) {
  return (
    <img src={image} alt={titre} />
  )
}
