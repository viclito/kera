import PropTypes from 'prop-types';
import { Controller, useFormContext } from 'react-hook-form';

import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

// ----------------------------------------------------------------------

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-root': {
    backgroundColor: '#F8FAFC',
  },
}));

export default function RHFTextAreaField({ name, helperText, type, label, ...other }) {
  const { control } = useFormContext();

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
          />
        </div>
      )}
    />
  );
}

RHFTextAreaField.propTypes = {
  helperText: PropTypes.node,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
};
