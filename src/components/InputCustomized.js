import { TextField, Grid } from '@mui/material';

import React from 'react';

const Input_customized = ({
  fullwidth,
  type,
  label,
  handleChange,
  name,
  value,
}) => {
  return (
    <Grid>
      <TextField
        required
        name={name}
        value={value}
        variant="outlined"
        fullwidth={fullwidth}
        type={type}
        label={label}
        onChange={handleChange}
      />
    </Grid>
  );
};

export default Input_customized;
