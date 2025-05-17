import PropTypes from 'prop-types';
import { Controller, useFormContext } from 'react-hook-form';

import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { uploadImageToS3 } from 'src/utils/uploadToS3';

// Hidden Input for File Upload
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

export default function RHFFileUpload({
  name,
  label,
  helperText,
  accept = '*',
  multiple = false,
  uploadUrl,
  onUploadComplete,
}) {
  const { control } = useFormContext();

  const handleFileUpload = async (file) => {
    try {
      const imageUrl = await uploadImageToS3(file);
      if (onUploadComplete) {
        onUploadComplete(imageUrl); // Notify parent of upload completion
      }
      return imageUrl;
    } catch (error) {
      console.error('File upload error:', error);
      return null;
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <Button component="label" variant="contained" fullWidth>
              {label}
              <VisuallyHiddenInput
                type="file"
                accept={accept}
                multiple={multiple}
                onChange={async (event) => {
                  const files = Array.from(event.target.files);
                  const uploadedFiles = await Promise.all(
                    files.map(async (file) => {
                      const uploadResult = await handleFileUpload(file);
                      return {
                        name: file.name,
                        type: file.type,
                        result: uploadResult, // Store server response for this file
                      };
                    })
                  );
                  field.onChange(uploadedFiles); // Update the form field with uploaded file results
                }}
              />
            </Button>
            {helperText && (
              <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                {helperText}
              </Typography>
            )}
            {error && (
              <Typography variant="body2" color="error">
                {error.message}
              </Typography>
            )}
            {/* Display uploaded file names */}
            {field.value?.length > 0 && (
              <ul>
                {field.value.map((file, index) => (
                  <li key={index}>
                    <Typography variant="body2">
                      {file.name} ({file.type || 'Unknown type'}) -{' '}
                      {file.result ? 'Uploaded' : 'Failed'}
                    </Typography>
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      />
    </Box>
  );
}

RHFFileUpload.propTypes = {
  name: PropTypes.string.isRequired, // Field name for the form
  label: PropTypes.string.isRequired, // Button label
  helperText: PropTypes.string, // Optional helper text
  accept: PropTypes.string, // Accepted file types
  multiple: PropTypes.bool, // Allow multiple file uploads
  uploadUrl: PropTypes.string.isRequired, // API endpoint for file upload
  onUploadComplete: PropTypes.func, // Callback for upload completion
};
