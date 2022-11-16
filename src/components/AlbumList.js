import React from "react";
import Album from "./Album";
import PropTypes from "prop-types";

function AlbumList(props){
  return (
    <React.Fragment>
      <hr/>
      {props.albumList.map((album) =>
        <Album 
          whenAlbumClicked = { props.onAlbumSelection }
          name={album.name}
          date={album.date}
          description={album.description}
          quantity={album.quantity}
          id={album.id}
          key={album.id}/>
      )}
    </React.Fragment>
  );
}

AlbumList.propTypes = {
  albumList: PropTypes.array,
  onAlbumSelection: PropTypes.func
};

export default AlbumList;