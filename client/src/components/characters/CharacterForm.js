import React, { useState } from 'react';

const CharacterForm = () => {
  const [character, setCharacter] = useState({
    name: '',
    race: '',
    heroClass: '',
    bio: '',
    stats: []
  });

  const { name, race, heroClass, bio, stats } = character;

  const onChange = e =>
    setCharacter({ ...character, [e.target.name]: e.target.value });

  const onClick = e => {
    e.preventDefault();
    let stat =
      Math.floor(Math.random() * 6) +
      1 +
      (Math.floor(Math.random() * 6) + 1) +
      (Math.floor(Math.random() * 6) + 1);
  };

  return (
    <form>
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
      <input
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
            name='stats.strength'
            value={stats.strength}
            onChange={onChange}
          />
          <button
            onClick={onClick}
            name='stats.strength'
            value={stats.strength}
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
            name='stats.intelligence'
            value={stats.intelligence}
            onChange={onChange}
          />
        </div>
        <div className='badge badge-light'>
          <div>Dexterity</div>
          <input
            type='number'
            placeholder='0'
            name='stats.dexterity'
            value={stats.dexterity}
            onChange={onChange}
          />
        </div>
        <div className='badge badge-light'>
          <div>Wisdom</div>
          <input
            type='number'
            placeholder='0'
            name='stats.wisdom'
            value={stats.wisdom}
            onChange={onChange}
          />
        </div>
        <div className='badge badge-light'>
          <div>Constitution</div>
          <input
            type='number'
            placeholder='0'
            name='stats.constitution'
            value={stats.constitution}
            onChange={onChange}
          />
        </div>
        <div className='badge badge-light'>
          <div>Charisma</div>
          <input
            type='number'
            placeholder='0'
            name='stats.charisma'
            value={stats.charisma}
            onChange={onChange}
          />
        </div>
        <div className='badge badge-light'>
          <div>HitPoints</div>
          <input
            type='number'
            placeholder='0'
            name='stats.hitpoints'
            value={stats.hitpoints}
            onChange={onChange}
          />
        </div>
        <div className='badge badge-light'>
          <div>Experience</div>
          <input
            type='number'
            placeholder='0'
            name='stats.experience'
            value={stats.experience}
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
