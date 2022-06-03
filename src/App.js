import { Pathtest } from './routes/Routes';
import './App.css';

function App() {
  const routes = Pathtest();

  return (
    <div style={{ maxWidth: '1440px', margin: 'auto' }}>
      {routes}
    </div>
  );
}

export default App;
