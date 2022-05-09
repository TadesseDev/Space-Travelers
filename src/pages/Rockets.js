import React from 'react'
import { useSelector } from 'react-redux';
export default function Rockets() {

  const Rocket = useSelector(state => state.Rockets);
  return (
    <div>Rockets{Rocket.length}</div>
  )
}
