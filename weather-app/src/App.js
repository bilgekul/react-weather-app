import './App.css';
import ShowWeather from './components/ShowWeather';
import Weather from './components/index.js';
import { APIProvider } from './contexts/APIContext';
function App() {
  return (
    <div className="App">
      <APIProvider>
           <Weather/>
           <ShowWeather/>
      </APIProvider>
    </div>
  );
}

export default App;
