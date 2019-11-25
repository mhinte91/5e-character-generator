import React from 'react';
import Characters from '../characters/Characters';
import CharacterForm from '../characters/CharacterForm';
import CharacterFilter from '../characters/CharacterFilter';

const Home = () => {
  return (
    <div className='grid-2'>
      <div>
        <CharacterForm />
      </div>
      <div>
        <CharacterFilter />
        <Characters />
      </div>
    </div>
  );
};

export default Home;
