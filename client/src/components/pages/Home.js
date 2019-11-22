import React from 'react';
import Characters from '../characters/Characters';
import CharacterForm from '../characters/CharacterForm';

const Home = () => {
  return (
    <div className='grid-2'>
      <div>
        <CharacterForm />
      </div>
      <div>
        <Characters />
      </div>
    </div>
  );
};

export default Home;
