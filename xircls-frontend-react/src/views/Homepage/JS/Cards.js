import React from "react"

export default function Cards({image, title, content}) {
  return (
    <>
      <img src={image} alt="" className="img-fluid my-3" />
      <h4 className="color-blue my-2">{title}</h4>
      <p>
        {content}
      </p>
    </>
  )
}
