import React from "react";
import ReusableAlbumForm from "./ReusableAlbumForm";
import PropTypes from "prop-types";

function EditAlbum (props) {
  const { album } = props;

  function handleEditAlbumSubmission(event) {
    event.preventDefault();
    props.onEditAlbum({name: event.target.name.value, date: event.target.date.value, description: event.target.description.value, quantity: event.target.quantity.value, id: album.id})
  }

  return (
    <React.Fragment>
      <ReusableAlbumForm 
        formSubmissionHandler = {handleEditAlbumSubmission}
        buttonText="Update Album" />
    </React.Fragment>
  );
}

EditAlbum.propTypes = {
  album: PropTypes.object,
  onEditAlbum: PropTypes.func
};

export default EditAlbum;