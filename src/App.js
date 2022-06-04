import { Pathtest } from './routes/Routes';
import './App.css';

function App() {
  const routes = Pathtest();

  return (
    <div>
      {routes}
    </div>
  );
}

export default App;
