import { BrowserRouter as Router } from 'react-router-dom';
import Container from './components/Container/Container';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import SearchBar from './components/SearchBar/SearchBar';
import './index.css';

function App() {
  return (
    <Router>
      <Header />
      <Main>
        <Container>
          <SearchBar />
          <h1>Hello</h1>
        </Container>
      </Main>
    </Router>
  );
}

export default App;
