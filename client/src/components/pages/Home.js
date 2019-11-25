import React, { useContext, useEffect } from 'react';
import Characters from '../characters/Characters';
import CharacterForm from '../characters/CharacterForm';
import CharacterFilter from '../characters/CharacterFilter';
import AuthContext from '../../context/auth/authContext';

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

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
