import React from 'react';

const Character = ({data}) =>

  <li>
    <div><strong>Name:</strong> {data.name}</div>
    <div><strong>Species:</strong> {data.species}</div>
    <img src={data.image} alt={data.name}/>
  </li>

export default Character;
