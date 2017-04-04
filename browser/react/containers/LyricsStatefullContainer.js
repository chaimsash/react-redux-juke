import React, {Component} from 'react';
import Lyrics from '../components/Lyrics';

class LyricsStatefullContainer extends Component {

  constructor() {
    super();

    this.state = {
      artistQuery: '',
      songQuery: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleArtistInput = this.handleArtistInput.bind(this);
    this.handleSongInput = this.handleSongInput.bind(this);

  }

  handleArtistInput(artist) {
    this.setState({ artistQuery: artist });
  }

  handleSongInput(song) {
    this.setState({ songQuery: song });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.searchLyricsMethod(this.state.artistQuery, this.state.songQuery);
  }

  render() {
    return (
      <Lyrics
        artistQuery={this.state.artistQuery}
        songQuery={this.state.songQuery}
        text={this.props.text}
        handleChange={this.handleChange}
        setArtist={this.handleArtistInput}
        setSong={this.handleSongInput}
        handleSubmit={this.handleSubmit} />
    );
  }

}

export default LyricsStatefullContainer;
