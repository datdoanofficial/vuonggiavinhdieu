import React from 'react'
import "./CardAnimation.scss"

type Props = {}

const CardAnimation = (props: Props) => {
  return (
    <div className="card-animation">
      <div className="card-01 card" id="card-01"></div>
      <div className="card-02 card" id="card-02"></div>
      <div className="card-03 card" id="card-03"></div>
      <div className="card-04 card" id="card-04"></div>
      <div className="card-05 card" id="card-05"></div>
      <div className="card-06 card" id="card-06"></div>
    </div>
  )
}

export default CardAnimation