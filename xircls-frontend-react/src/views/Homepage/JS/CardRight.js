import React from "react"

export default function CardRight({
  image,
  title,
  content
}) {
  return (
    <>
      <div className="container my-5 p-5 d-flex flex-column gap-5 flex-sm-row justify-content-between align-items-center">
        <img src={image} alt="" className="order-sm-1" />
        <div className="order-sm-0">
          <h4 className="color-blue display-6">{title}</h4>
          <p className="lead">{content}</p>
        </div>
      </div>
    </>
  )
}
