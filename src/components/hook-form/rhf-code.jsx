import PropTypes from 'prop-types';
import { MuiOtpInput } from 'mui-one-time-password-input';
import { Controller, useFormContext } from 'react-hook-form';

import FormHelperText from '@mui/material/FormHelperText';

// ----------------------------------------------------------------------

export default function RHFCode({ name, length, label, ...other }) {
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
          <div>
            <MuiOtpInput
              {...field}
              autoFocus
              gap={1.5}
              length={length}
              onChange={(value) => setValue(name, value, { shouldValidate: true })}
              ty
              TextFieldsProps={{
                size: 'small',
                error: !!error,
                placeholder: '-',
                backgroundColor: '#F8FAFC',
                type: 'number',
              }}
              {...other}
            />

            {error && (
              <FormHelperText sx={{ px: 2 }} error>
                {error.message}
              </FormHelperText>
            )}
          </div>
        </div>
      )}
    />
  );
}

RHFCode.propTypes = {
  name: PropTypes.string,
  length: PropTypes.number,
  label: PropTypes.string,
};
