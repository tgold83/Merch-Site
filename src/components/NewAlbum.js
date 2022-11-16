import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";
import ReusableAlbumForm from "./ReusableAlbumForm";

function NewAlbum(props){

  function handleNewAlbumSubmission(event) {
    event.preventDefault();
    props.onNewAlbumCreation({
      name: event.target.name.value,
      date: event.target.date.value,
      description: event.target.description.value,
      quantity: event.target.quantity.value,
      id: v4()
    })
  }

  return (
    <React.Fragment>
      <ReusableAlbumForm
        formSubmissionHandler={handleNewAlbumSubmission}
        buttonText="Add New Album" />
    </React.Fragment>
  );
}

NewAlbum.propTypes = {
  onNewAlbum: PropTypes.func
};

export default NewAlbum;