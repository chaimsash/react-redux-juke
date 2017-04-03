'use strict';

const React = require('react');

import Songs from './Songs'


export default function Station(props) {
  const currentSong = props.currentSong;
  const isPlaying = props.isPlaying;
  const toggle = props.toggle;


  return (
    <div>
      <h3>{`${props.genre} Station`}</h3>
      < Songs songs={props.songs} currentSong={currentSong} isPlaying={isPlaying} toggleOne={toggle} />

    </div>
  );
}

