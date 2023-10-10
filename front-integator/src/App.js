import { Router } from './Routes/Router';
import { GlobalState } from './context/GlobalState';
import { GlobalStyle } from './globalStyled';

function App() {
  return (
    <div>
      <GlobalStyle/>
      <GlobalState>
        <Router/>
      </GlobalState>
    </div>
  );
}

export default App;
