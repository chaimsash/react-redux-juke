import {previous, next, setProgress, toggleSong} from '../action-creators/player';
import Player from '../components/Player';
import {connect} from 'react-redux';

function mapStateToProps(state) {
    return state.player;
}

function mapDispatchToProps(dispatch) {
    return {
        nextSong: function nextSong() {
            dispatch(next());
        },
        prev: function prev() {
            dispatch(previous());
        },
        toggleOne: function toggle(song, list) {
            dispatch(toggleSong(song, list));
        },
        updateProgress: function updateProgress (progress){
          dispatch(setProgress(progress));
        }
    };
}

const PlayerContainer = connect(mapStateToProps, mapDispatchToProps)(Player);

export default PlayerContainer;
