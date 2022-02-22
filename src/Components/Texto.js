import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function MultilineTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>

        <TextField
          id="outlined-multiline-static"
          label="Digite ou cole o texto"
          multiline
          rows={10}
          defaultValue="texto a ser realizado"
        />
      </div>
      
    </Box>
  );
}











