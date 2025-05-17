import PropTypes from 'prop-types';
import { Controller, useFormContext } from 'react-hook-form';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function RHFMultiDropDown({
  name,
  label,
  options,
  placeholder,
  helperText,
  ...other
}) {
  const { control, setValue } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const currentValue = field.value || []; // Default to an empty array if field.value is null or undefined

        return (
          <Autocomplete
            {...field}
            multiple
            options={options}
            getOptionLabel={(option) => option.label || ''}
            isOptionEqualToValue={(option, value) => option.value === value}
            onChange={(event, newValue) =>
              setValue(
                name,
                newValue.map((item) => item.value),
                { shouldValidate: true }
              )
            }
            value={options.filter((opt) => currentValue.includes(opt.value))} // Ensure currentValue is an array
            renderInput={(params) => (
              <TextField
                {...params}
                label={label}
                placeholder={placeholder}
                error={!!error}
                helperText={error ? error.message : helperText}
                inputProps={{
                  ...params.inputProps,
                  autoComplete: 'new-password', // Disable browser autocomplete
                }}
              />
            )}
            {...other}
          />
        );
      }}
    />
  );
}

RHFMultiDropDown.propTypes = {
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
