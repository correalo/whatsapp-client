import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import axios from "axios";
import Upload from "./Upload";
import { Box, TextField } from "@mui/material";
import Send from "./Send";

export default function MessagePage() {
  const [value, setValue] = React.useState();
  const [messages, setMessages] = React.useState([]);
  const [message, setMessage] = React.useState([]);
  
  const componentMounted = React.useRef(false)
 
  const getMessages = async () => {
    const response = await axios.get(`http://localhost:3000/message`);
    setMessages(response.data);
  };

  React.useEffect(() => {
    getMessages();
  },[]);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:3000/message/${value}`);
      setMessage(response.data);
    }
    if(componentMounted.current) fetchData() 
    else componentMounted.current = true
   
  },[value]);


  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <br />
      <Upload />
      <br />
      <br />
      <FormControl>
        <FormLabel
          id="demo-row-radio-buttons-group-label"
          style={{ color: "blue" }}
        >
          MENSAGENS {value}
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          onChange={handleChange}
        >
          {messages.map((message) => {
            return (
              <FormControlLabel
                value={message.id}
                control={<Radio />}
                label={message.description}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "50ch" },
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
            defaultValue="Selecione a mensagem desejada acima"
            value={message.content}
          />
        </div>
      </Box>
      <Send />
    </div>
  );
}
