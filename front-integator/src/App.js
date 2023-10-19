import { Router } from './Routes/Router';
import { GlobalState } from './context/GlobalState';
import { GlobalStyle } from './globalStyled';

function App() {
  return (
    <>
      <GlobalStyle/>
      <GlobalState>
        <Router/>
      </GlobalState>
    </>
  );
}

export default App;
