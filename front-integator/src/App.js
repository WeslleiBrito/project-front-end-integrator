import { Router } from './Routes/Router';
import { GlobalState } from './context/GlobalState';
import { GlobalStyle } from './globalStyled';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <>
      <GlobalStyle/>
      <ChakraProvider>
        <GlobalState>
          <Router/>
        </GlobalState>
      </ChakraProvider>
    </>
    

  );
}

export default App;
