import React from 'react';
import Person from './person';
import '../styles/selfIntroduction.css';
import imagePath from '../assets/avatar.jpg';
function Introduction() {
  const person = new Person('KAMIL', 24);
  return (
    <div className={'header'}>
      <img src={imagePath}></img>
      <h1 className={'introduce'}>
        HELLO,
        <br />
        {person.introduce().toUpperCase()}
      </h1>
    </div>
  );
}
export default Introduction;
