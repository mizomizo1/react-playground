import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
    const handleClick = () => {
        alert('Button clicked!');
    }
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text" onClick={handleClick}>Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}
