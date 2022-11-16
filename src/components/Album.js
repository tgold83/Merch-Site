import React from "react";
import PropTypes from "prop-types";

function Album(props){
  return(
    <React.Fragment>
      <div onClick={() => props.whenAlbumClicked(props.id)}>
        <h2>{props.name}</h2>
        <h5>Click for more info about this album.</h5>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Album.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired, 
  id: PropTypes.string,
  whenAlbumClicked: PropTypes.func
};

export default Album;