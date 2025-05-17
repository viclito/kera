import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Controller, useFormContext } from 'react-hook-form';

import TextField from '@mui/material/TextField';

// ----------------------------------------------------------------------

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-root': {
    height: '40px', // Set the height of the input field
    backgroundColor: '#F8FAFC',
  },
}));

export default function RHFTextField({ name, helperText, type, label, ...other }) {
  const { control } = useFormContext();
  const multiline = other.multiline || false;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {label && (
            <label htmlFor={name} style={{ fontWeight: '500', fontSize: '15px' }}>
              {label}
            </label>
          )}
          <StyledTextField
            {...field}
            fullWidth
            type={type}
            id={name}
            value={type === 'number' && field.value === 0 ? '' : field.value}
            autoComplete="off"
            onChange={(event) => {
              if (type === 'number') {
                field.onChange(Number(event.target.value));
              } else {
                field.onChange(event.target.value);
              }
            }}
            error={!!error}
            helperText={error ? error?.message : helperText}
            {...other}
            InputProps={{
              style: {
                height: multiline ? '100px' :'40px', 
              },
            }}
          />
        </div>
      )}
    />
  );
}

RHFTextField.propTypes = {
  helperText: PropTypes.node,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
};
