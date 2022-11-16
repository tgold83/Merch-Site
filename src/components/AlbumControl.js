import React from "react";
import NewAlbum from "./NewAlbum";
import AlbumList from "./AlbumList";
import AlbumDetail from "./AlbumDetail";
import EditAlbum from './EditAlbum';

class AlbumControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainAlbumList: [],
      selectedAlbum: null,
      editing: false
    };
  }

  handleAddingNewAlbumToList = (newAlbum) => {
    const newMainAlbumList = this.state.mainAlbumList.concat(newAlbum);
    this.setState({mainAlbumList: newMainAlbumList,
                  formVisibleOnPage: false });
  }

  handleClick = () => {
    if (this.state.selectedAlbum != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedAlbum: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleChangingSelectedAlbum = (id) => {
    const selectedAlbum = this.state.mainAlbumList.filter(album => album.id === id)[0];
    this.setState({selectedAlbum: selectedAlbum});
  }

  handleDeletingAlbum = (id) => {
    const newMainAlbumList = this.state.mainAlbumList.filter(album => album.id !== id);
    this.setState({
      mainAlbumList: newMainAlbumList,
      selectedAlbum: null
    });
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing: true});
  }

  handleEditingAlbumInList = (albumToEdit) => {
    const editedMainAlbumList = this.state.mainAlbumList
      .filter(album => album.id !== this.state.selectedAlbum.id)
      .concat(albumToEdit);
    this.setState({
        mainAlbumList: editedMainAlbumList,
        editing: false,
        selectedAlbum: null
      });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing ) {      
      currentlyVisibleState = 
      <EditAlbum
        album = {this.state.selectedAlbum} 
        onEditAlbum = {this.handleEditingAlbumInList}/>
      buttonText = "Return to Album List";
    } else if (this.state.selectedAlbum != null) {
      currentlyVisibleState = 
      <AlbumDetail 
        album = {this.state.selectedAlbum} 
        onClickingDelete = {this.handleDeletingAlbum} 
        onClickingEdit = {this.handleEditClick} />
      buttonText="Return to Album List"
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = 
      <NewAlbum 
        onNewAlbumCreation={this.handleAddingNewAlbumToList} />
      buttonText= "Return to Album List";
    } else {
      currentlyVisibleState = 
      <AlbumList 
        albumList = {this.state.mainAlbumList} 
        onAlbumSelection = {this.handleChangingSelectedAlbum} />
      buttonText= 'Add Album';
    }
    return(
    <React.Fragment>
      {currentlyVisibleState}
      <button onClick={this.handleClick}>{buttonText}</button>
    </React.Fragment>
    );
  }
}

export default AlbumControl;
