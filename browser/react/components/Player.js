import React from 'react';
import AUDIO from '../audio';

export default class Player extends React.Component {
  constructor(){
    super()
    this.toggleSong = this.toggleSong.bind(this)
  }

    componentDidMount() {
        AUDIO.addEventListener('ended', this.props.next);
        AUDIO.addEventListener('timeupdate', () => {
          this.props.updateProgress(AUDIO.currentTime / AUDIO.duration);
        });
    }

    toggleSong (e) {
      const toggle = this.props.toggleOne;
      toggle (this.props.currentSong);
    }

    render() {
        const currentSong = this.props.currentSong;
        const isPlaying = this.props.isPlaying;
        const progress = this.props.progress;
        const prev = this.props.prev;
        const next = this.props.nextSong;

        return (
            <footer>
                <div style={!currentSong.id
                    ? {
                        display: 'none'
                    }
                    : null}>
                    <div className="pull-left">
                        <button className="btn btn-default" onClick={prev}>
                            <span className="glyphicon glyphicon-step-backward"></span>
                        </button>
                        <button className="btn btn-default" onClick={this.toggleSong}>
                            <span className={isPlaying
                                ? 'glyphicon glyphicon-pause'
                                : 'glyphicon glyphicon-play'}></span>
                        </button>
                        <button className="btn btn-default" onClick={next}>
                            <span className="glyphicon glyphicon-step-forward"></span>
                        </button>
                    </div>
                    <div className="bar">
                        <div className="progress">
                            <div className="progress-bar" style={{
                                width: `${progress * 100}%`
                            }}></div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
