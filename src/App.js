import "./App.css";
import Send from "./Components/Send";
import Upload from "./Components/Upload";
import Texto from "./Components/Texto";
import Memed from "./Components/Memed";
import SelecaoMensagem from "./Components/SelecaoMensagem";

function App() {
  return (
    <div className="App">
      <div className="generica">
        <br />
        <Upload />
        <br />
        <br />
        <SelecaoMensagem />
        <Texto />
        <Send />
      </div>
    </div>
  );
}

export default App;
