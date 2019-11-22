import React, { useState, useContext } from 'react';
import CharacterContext from '../../context/character/characterContext';

const CharacterForm = () => {
  const characterContext = useContext(CharacterContext);
  const [character, setCharacter] = useState({
    name: '',
    race: '',
    heroClass: '',
    bio: '',
    strength: '',
    dexterity: '',
    constitution: '',
    intelligence: '',
    wisdom: '',
    charisma: '',
    hitpoints: '',
    experience: ''
  });

  const {
    name,
    race,
    heroClass,
    bio,
    strength,
    dexterity,
    constitution,
    intelligence,
    wisdom,
    charisma,
    hitpoints,
    experience
  } = character;

  const onChange = e =>
    setCharacter({ ...character, [e.target.name]: e.target.value });

  const onClick = e => {
    e.preventDefault();
    // let stat =
    //   Math.floor(Math.random() * 6) +
    //   1 +
    //   (Math.floor(Math.random() * 6) + 1) +
    //   (Math.floor(Math.random() * 6) + 1);

    /* Safe Roll */
    let array = [];
    let counter = 0;
    array.push(Math.floor(Math.random() * 6) + 1);
    array.push(Math.floor(Math.random() * 6) + 1);
    array.push(Math.floor(Math.random() * 6) + 1);
    array.push(Math.floor(Math.random() * 6) + 1);
    array.sort().shift();
    array.forEach(i => {
      counter += i;
    });
    setCharacter({ ...character, [e.target.name]: counter });
  };

  const onSubmit = e => {
    e.preventDefault();
    characterContext.addCharacter(character);
    setCharacter({
      name: '',
      race: '',
      heroClass: '',
      bio: '',
      strength: '',
      dexterity: '',
      constitution: '',
      intelligence: '',
      wisdom: '',
      charisma: '',
      hitpoints: '',
      experience: ''
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>New Character</h2>
      <input
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Race'
        name='race'
        value={race}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Class'
        name='heroClass'
        value={heroClass}
        onChange={onChange}
      />
      <textarea
        type='text'
        placeholder='Bio'
        name='bio'
        value={bio}
        onChange={onChange}
      />
      <h2 className='text-primary'>Stats</h2>
      <div style={userStyle} className='card text-center'>
        <div className='badge badge-light'>
          <div>Strength</div>
          <input
            type='number'
            placeholder='0'
            name='strength'
            value={strength}
            onChange={onChange}
          />
          <button
            onClick={onClick}
            name='strength'
            value={strength}
            className='badge badge-primary'
          >
            Roll!
          </button>
        </div>
        <div className='badge badge-light'>
          <div>Intelligence</div>
          <input
            type='number'
            placeholder='0'
            name='intelligence'
            value={intelligence}
            onChange={onChange}
          />
          <button
            onClick={onClick}
            name='intelligence'
            value={intelligence}
            className='badge badge-primary'
          >
            Roll!
          </button>
        </div>
        <div className='badge badge-light'>
          <div>Dexterity</div>
          <input
            type='number'
            placeholder='0'
            name='dexterity'
            value={dexterity}
            onChange={onChange}
          />
          <button
            onClick={onClick}
            name='dexterity'
            value={dexterity}
            className='badge badge-primary'
          >
            Roll!
          </button>
        </div>
        <div className='badge badge-light'>
          <div>Wisdom</div>
          <input
            type='number'
            placeholder='0'
            name='wisdom'
            value={wisdom}
            onChange={onChange}
          />
          <button
            onClick={onClick}
            name='wisdom'
            value={wisdom}
            className='badge badge-primary'
          >
            Roll!
          </button>
        </div>
        <div className='badge badge-light'>
          <div>Constitution</div>
          <input
            type='number'
            placeholder='0'
            name='constitution'
            value={constitution}
            onChange={onChange}
          />
          <button
            onClick={onClick}
            name='constitution'
            value={constitution}
            className='badge badge-primary'
          >
            Roll!
          </button>
        </div>
        <div className='badge badge-light'>
          <div>Charisma</div>
          <input
            type='number'
            placeholder='0'
            name='charisma'
            value={charisma}
            onChange={onChange}
          />
          <button
            onClick={onClick}
            name='charisma'
            value={charisma}
            className='badge badge-primary'
          >
            Roll!
          </button>
        </div>
        <div className='badge badge-light'>
          <div>HitPoints</div>
          <input
            type='number'
            placeholder='0'
            name='hitpoints'
            value={hitpoints}
            onChange={onChange}
          />
        </div>
        <div className='badge badge-light'>
          <div>Experience</div>
          <input
            type='number'
            placeholder='0'
            name='experience'
            value={experience}
            onChange={onChange}
          />
        </div>
      </div>
      <div>
        <input
          type='submit'
          value='Create Character'
          className='btn btn-primary btn-block'
        />
      </div>
    </form>
  );
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)'
  //   gridGap: '1rem'
};

export default CharacterForm;
