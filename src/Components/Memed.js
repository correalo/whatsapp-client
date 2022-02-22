import { ISO_8601 } from "moment";
import React from "react";

function Memed() {
  return (
    <header>
      <div
        className="memed-container"
        margin="auto"
        style={{
          backgroundColor: "gray",
          borderColor: "black",
          width: "810px",
          height: "700px",
          margin: "auto",
        }}
      >
        <script
          type="text/javascript"
          src="https://sandbox.memed.com.br/modulos/plataforma.sinapse-prescricao/build/sinapse-prescricao.min.js"
          data-token="TOKEN_DO_USUARIO_OBTIDO_NO_CADASTRO_VIA_API"
          data-color="#576cff"
          data-container="ID_DA_DIV_CONTAINER"
        >
          Memed
        </script>
      </div>
    </header>
  );
}

export default Memed;
