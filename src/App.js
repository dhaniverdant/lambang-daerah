import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProvinceList from './containers/ProvinceList';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ProvinceList} />
      </Switch>
    </Router>
  );
}

export default App;
