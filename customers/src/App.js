import './App.css';
import { Link, BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Link to='/customers'>Customers</Link>
        <Link to='/customers/3'>Customer Detail</Link>
      </div>
    </Router>
  );
}

export default App;
