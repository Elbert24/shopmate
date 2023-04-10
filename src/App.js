import { AllRoutes } from './routes/AllRoutes';
import './App.css';
import { Header, CartCard , ProductCard , Footer } from './components';

function App() {
  return (
    <div className="App">
      <Header/>
      <AllRoutes/>
    </div>
  );
}

export default App;
