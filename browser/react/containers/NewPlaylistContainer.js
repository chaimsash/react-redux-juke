import {connect} from 'react-redux';
import {addNewPlaylist} from '../action-creators/playlists';
import NewPLaylistStatefullContainer from './NewPLaylistStatefullContainer';

function mapStateToProps(state){
  return {

  };
}

function mapDispatchToProps (dispatch){
  return {
    inputSubmit: function inputSubmit(input) {
        dispatch(addNewPlaylist(input));
      }
  };
}

const NewPlaylistContainer = connect(mapStateToProps, mapDispatchToProps)(NewPLaylistStatefullContainer);

export default NewPlaylistContainer;

//
// class NewPlaylistContainer extends React.Component {
//
//   constructor(props) {
//     super(props);
//     this.state = {
//       inputValue: '',
//       dirty: false
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//
//   handleChange(evt) {
//     const value = evt.target.value;
//     this.setState({
//       inputValue: value,
//       dirty: true
//     });
//   }
//
//   handleSubmit(evt) {
//
//     evt.preventDefault();
//     store.dispatch(addNewPlaylist(this.state.inputValue));
//   }
//
//   render() {
//
//     const dirty = this.state.dirty;
//     const inputValue = this.state.inputValue;
//     let warning = '';
//
//     if (!inputValue && dirty) warning = 'You must enter a name';
//     else if (inputValue.length > 16) warning = 'Name must be less than 16 characters';
//
//     return (
//       <NewPlaylist
//         handleChange={this.handleChange}
//         handleSubmit={this.handleSubmit}
//         inputValue={inputValue}
//         warning={warning}
//       />
//     );
//   }
//
// }
//
// export default NewPlaylistContainer;
