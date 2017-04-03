import {connect} from 'react-redux';
import Stations from '../components/Stations';

export const songsToStations = function (songs){
  let stationsObj = {};
  songs.forEach(function(song){
    let songGenre = song.genre;
    if (!stationsObj[songGenre]){
      stationsObj[songGenre] = [];
    }
    stationsObj[songGenre].push(song);
  });
  return stationsObj;
};

function mapStateToProps (state){
  return {
    stations: songsToStations(state.songs)
  };
}

function mapDispatchToProps (dispatch){
  return {

  };
}

const StationsContainer = connect(mapStateToProps, mapDispatchToProps)(Stations);

export default StationsContainer;
