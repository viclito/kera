import * as React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

function NormalFileUpload({ text }) {
  return (
    <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
    >
        {text}
      <VisuallyHiddenInput
        type="file"
        onChange={(event) => console.log(event.target.files)}
        multiple
      />
    </Button>
  );
}

// Define prop types
NormalFileUpload.propTypes = {
  text: PropTypes.string.isRequired, // Ensure `text` is a required string
};


export default NormalFileUpload;
