import React from "react";
import PropTypes from "prop-types";

function ReusableAlbumForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Album Name' />
        <input
          type='text'
          name='date'
          placeholder='Release Date' />
        <input
          type='text'
          name='description'
          placeholder='Describe this album.' />
        <input
          type='number'
          name='quantity'
          placeholder='# of albums in stock' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableAlbumForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableAlbumForm;