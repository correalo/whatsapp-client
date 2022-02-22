import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function SelecaoMensagem() {
  return (
    <FormControl>
      <FormLabel
        id="demo-row-radio-buttons-group-label"
        style={{ color: "blue" }}
      >
        MENSAGENS
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel
          value="nao-compareceu"
          control={<Radio />}
          label="Não Compareceu"
        />
        <FormControlLabel
          value="compareceu-nao-operado"
          control={<Radio />}
          label="Compareceu Não Operado"
        />
        <FormControlLabel
          value="operado-1d"
          control={<Radio />}
          label="Operado 1 Dia Antes"
        />
        <FormControlLabel
          value="operado-10d"
          control={<Radio />}
          label="Operado 10 Dias Antes"
        />
        <FormControlLabel
          value="operado-3a18meses"
          control={<Radio />}
          label="Operado 3 a 18 Meses"
        />
      </RadioGroup>
    </FormControl>
  );
}
