import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Input = styled('input')({
  display: 'none',
});

export default function Upload() {
  return (
    <Stack direction="column" alignItems="center">
      <label htmlFor="contained-button-file">
        <Input accept=".csv" id="contained-button-file" multiple type="file" />
        <Button variant="contained" component="span">
          Upload
        </Button>
      </label>
    </Stack>
  );
}