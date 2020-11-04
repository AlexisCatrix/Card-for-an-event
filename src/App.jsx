import Card from "./Components/Cards/Card";
import "./AppStyled.js";
import GlobalStyle from "./AppStyled.js";
import { Reset } from "styled-reset";

function App() {
  return (
    <div>
      <Reset/>
      <GlobalStyle/>
      <Card/>
    </div>
  );
}

export default App;
