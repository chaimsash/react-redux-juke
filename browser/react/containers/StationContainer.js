import {connect} from 'react-redux';
import Station from '../components/Station';
import {toggleSong} from '../action-creators/player';
import {convertSong} from '../utils';


function mapStateToProps (state, ownProps){
  const genre = ownProps.params.genreName;
  const capitalizedGenre = genre[0].toUpperCase() + genre.slice(1);

  return {
    genre: capitalizedGenre,
    songs: state.songs.filter((song) => song.genre === capitalizedGenre).map(convertSong),
    currentSong: state.player.currentSong,
    isPlaying: state.player.isPlaying,
  };
}

function mapDispatchToProps (dispatch){
  return {
    toggle: function toggle(song, list) {
      dispatch(toggleSong(song, list));
    }
  };
}

const StationContainer = connect(mapStateToProps, mapDispatchToProps)(Station);

export default StationContainer;