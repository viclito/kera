import PropTypes from 'prop-types';
import { Controller, useFormContext } from 'react-hook-form';

import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

// Custom styled Autocomplete TextField
const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-root': {
    height: '40px', // Set the height of the input field
    padding: '0 12px', // Adjust padding for better alignment
    backgroundColor: '#F8FAFC',
  },
}));

export default function RHFDropDown({ name, label, options, placeholder, helperText, ...other }) {
  const { control, setValue } = useFormContext();

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
          <Autocomplete
            {...field}
            options={options}
            getOptionLabel={(option) => option.label ?? ''}
            isOptionEqualToValue={(option, value) => option.value === value.value} // Handle boolean properly
            onChange={(event, newValue) =>
              setValue(name, newValue?.value ?? '', { shouldValidate: true })
            }
            value={options?.find((opt) => opt.value === field.value) || null}
            renderInput={(params) => (
              <StyledTextField
                {...params}
                placeholder={placeholder}
                error={!!error}
                helperText={error ? error.message : helperText}
                inputProps={{
                  ...params.inputProps,
                  autoComplete: 'off', // Disable browser autocomplete
                }}
              />
            )}
            {...other}
          />
        </div>
      )}
    />
  );
}

RHFDropDown.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    })
  ).isRequired,
  placeholder: PropTypes.string,
  helperText: PropTypes.string,
};
