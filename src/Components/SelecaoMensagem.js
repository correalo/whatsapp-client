import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import axios from 'axios';

export default function SelecaoMensagem() {
  const [value, setValue] = React.useState();
  const [messages, setMessages] = React.useState([]);

  const getMessages = async () => {
    const response = await axios.get(`http://localhost:3000/message`);
    setMessages(response.data);
  }

  React.useEffect(() => {
    getMessages();
  }, []);


  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
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
      { 
        messages.map(message => {
          return <FormControlLabel
            value={message.id}
            control={<Radio />}
            label={message.description}
          />
        })
      }
      </RadioGroup>
    </FormControl>
  );
}
