import React from 'react';
import PropTypes from 'prop-types';

const CharacterItem = ({ character }) => {
  const { name, race, heroClass, bio, stats } = character;

  let statArray = stats.map(function(stat) {
    return stat;
  });

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        {name}
        {/* <button style={{ float: 'right' }} className='btn btn-primary btn-sm'>
          Stats
        </button> */}
      </h3>
      <ul className='list'>
        <li>
          <i className='fas fa-shield-alt' /> {race} {heroClass}
        </li>
        {bio && (
          <li>
            <i className='fas fa-atlas' /> {bio}
          </li>
        )}
        <div style={userStyle} className='card text-center'>
          <div className='badge badge-primary'>
            Strength: {character.stats[0].strength}
          </div>
          <div className='badge badge-primary'>
            Intelligence: {character.stats[0].intelligence}
          </div>
          <div className='badge badge-primary'>
            Dexterity: {character.stats[0].dexterity}
          </div>
          <div className='badge badge-primary'>
            Wisdom: {character.stats[0].wisdom}
          </div>
          <div className='badge badge-primary'>
            Constitution: {character.stats[0].constitution}
          </div>
          <div className='badge badge-primary'>
            Charisma: {character.stats[0].charisma}
          </div>
          <div className='badge badge-dark'>
            HitPoints: {character.stats[0].hitpoints}
          </div>
          <div className='badge badge-dark'>
            Experience: {character.stats[0].experience}
          </div>
        </div>
      </ul>
      <p>
        <button
          className='btn btn-dark btn-sm'
          //   onClick={() => setCurrent(character)}
        >
          Edit
        </button>
        <button className='btn btn-danger btn-sm' /*onClick={onDelete}*/>
          Delete
        </button>
      </p>
    </div>
  );
};

CharacterItem.propTypes = {
  character: PropTypes.object.isRequired
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)'
  //   gridGap: '1rem'
};

export default CharacterItem;
