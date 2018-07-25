import React from 'react';
import Characters from './Characters';
import Character from './Character';

import './App.css';

const App = () =>
  <ul>
    <Characters render={({characters})=>
      characters.length>0 && characters.map(
        character=>
        <Character key={character.id} data={character}/>
      )
    }/>
  </ul>

export default App;
