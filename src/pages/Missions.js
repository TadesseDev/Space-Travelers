import React from 'react'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getMissions } from '../Redux/Missions/Mission';

export default function Missions() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissions());
  }, []);

  return (
    <div>Missions</div>
  )
}
