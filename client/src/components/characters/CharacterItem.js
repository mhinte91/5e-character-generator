import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import CharacterContext from '../../context/character/characterContext';

const CharacterItem = ({ character }) => {
  const characterContext = useContext(CharacterContext);
  const { deleteCharacter, setCurrent, clearCurrent } = characterContext;

  const { id, name, race, heroClass, bio } = character;

  const onDelete = () => {
    deleteCharacter(id);
    clearCurrent();
  };

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
            Strength: {character.strength}
          </div>
          <div className='badge badge-primary'>
            Intelligence: {character.intelligence}
          </div>
          <div className='badge badge-primary'>
            Dexterity: {character.dexterity}
          </div>
          <div className='badge badge-primary'>Wisdom: {character.wisdom}</div>
          <div className='badge badge-primary'>
            Constitution: {character.constitution}
          </div>
          <div className='badge badge-primary'>
            Charisma: {character.charisma}
          </div>
          <div className='badge badge-dark'>
            HitPoints: {character.hitpoints}
          </div>
          <div className='badge badge-dark'>
            Experience: {character.experience}
          </div>
        </div>
      </ul>
      <p>
        <button
          className='btn btn-dark btn-sm'
          onClick={() => setCurrent(character)}
        >
          Edit
        </button>
        <button className='btn btn-danger btn-sm' onClick={onDelete}>
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
