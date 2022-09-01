
import UilReact from '@iconscout/react-unicons/icons/uil-react';
import Input from './components/input';
import TopButton from './components/TopButton';
import TimeAndLocation from './components/timeAndLocation';
import Temperature from './components/temperature';
import Forecast from './components/Forecast';
import './App.css';
import getFormattedData from './services/weatherService';
import {useState, useEffect} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const [query, setQuery] = useState({q:"New york"});
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState('metric');

  useEffect(()=>{

    const fetchWeather =async () => {
      const message = query.q ? query.q :  "current location";
      toast.info("Fetching weather for " + message);

    await getFormattedData({...query, units}).then((data)=> {
      toast.success(`Weather fetched successfully for ${data.country}`);
      setWeather(data);
    }); 
  }
  fetchWeather();

  },[query, units]);

    const formatBackground = () => {
      if (!weather) return "from-cyan-700 to-blue-700";
      const threshold =  units === "metric" ? 20 : 60;
      if (weather.temp  < threshold) return "from-yellow-700 to-orange-700";

      return "from-yellow-300 to-yellow-500";
    }
  
  return (
    <div className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br
     from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400 ${formatBackground}`}>
        < TopButton setQuery={setQuery} />
        < Input setQuery={setQuery} units={units} setUnits={setUnits} />

        {weather && (

          <div>
            < TimeAndLocation  weather={weather} />
            < Temperature  weather={weather}  />
            <Forecast  items={weather.hourly} tittle="Hourly forecast" />
            <Forecast items={weather.daily} tittle="Daily forecast" />
          </div>
          )}
  
        <ToastContainer autoClose={5000} theme="colored" newestOnTop={true} />

    </div>
  );
}

export default App;
  