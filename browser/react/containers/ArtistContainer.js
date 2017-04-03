import {connect} from 'react-redux';
import {toggleSong} from '../action-creators/player';
import Artist from '../components/Artist';

function mapStateToProps(state, ownProps) {
    return Object.assign({}, state.player, {
        selectedArtist: state.artists.selected,
        children: ownProps.children
    });
}

function mapDispatchToProps(dispatch) {
    return {
        toggleOne: function toggle(song, list) {
            dispatch(toggleSong(song, list));
        }
    };
}

const ArtistContainer = connect(mapStateToProps, mapDispatchToProps)(Artist);

export default ArtistContainer;
