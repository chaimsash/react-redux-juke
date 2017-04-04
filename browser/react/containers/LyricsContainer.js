import {connect} from 'react-redux';
import {searchLyrics} from '../action-creators/lyrics';
import LyricsStatefullContainer from './LyricsStatefullContainer';

function mapStateToProps (state){
  return {
    text: state.lyrics.text

  };
}

function mapDispatchToProps (dispatch){
  return {
    searchLyricsMethod: function searchLyricsMethod(artistQuery, songQuery) {
      if (artistQuery && songQuery) {
        dispatch(searchLyrics(artistQuery, songQuery));
      }
    }
  };
}

const LyricsContainer = connect(mapStateToProps, mapDispatchToProps)(LyricsStatefullContainer);

export default LyricsContainer;
