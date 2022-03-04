import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios';

export default function MultilineTextFields() {
  const [message, setMessage] = React.useState([]);
 
  React.useEffect(() => {
    const fetchData = async () => {
        const response = await axios.get(`http://localhost:3000/message/did_not_attend`);
        setMessage(response.data);
    }

    fetchData();
  }, []);
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
          value={message.content}
        />
      </div>
      
    </Box>
  );
}












