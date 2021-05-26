import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import './index.css';

function App() {
  return (
    <Router>
      <Header />
      <Main>
        <h1>Hello</h1>
      </Main>
    </Router>
  );
}

export default App;
