import React from 'react';

export default function Rocket({ id, name, description, image, reserved }) {
  return (
    <div className="rocket-container">
      <img src={image} alt={name} />
      <div className="rocket-description">
        <h3>{name}</h3>
        <p>{description}</p>
        {reserved ?
          (<button className="reserved" id={id}>reserved</button>) :
          (<button className="not-reserved" id={id}>not reserved</button>)}
      </div>
    </div>
  )
}