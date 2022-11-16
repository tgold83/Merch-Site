import React from "react";
import PropTypes from "prop-types";

function AlbumDetail(props){
  const { album, onClickingDelete} = props;

  return (
    <React.Fragment>
      <h1>Album Detail</h1>
      <h3>Album Title: {album.name}</h3>
      <h4>Release Date: {album.date} - Quantity in Stock: {album.quantity}</h4>
      <p><em>{album.description}</em></p>
      <button onClick={ props.onClickingEdit }>Update Album</button>
      <button onClick={()=> onClickingDelete(album.id) }>Delete Album</button> 
      <hr/>
    </React.Fragment>
  );
}

AlbumDetail.propTypes = {
  album: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func 
}

export default AlbumDetail;