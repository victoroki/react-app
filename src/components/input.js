import React, {useState} from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function input({setQuery, units, setUnits}) {


  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [city, setCity] = useState('');

  const handleCity = () => {
    if (city !== "") {
      setQuery({ q: city });
    }
  }

  const handleUnitsChange = (e) => {
    const selectedUnits = e.currentTarget.name;
    if (units !== selectedUnits) 
    setUnits(selectedUnits);
  }

  const handleLocationClick = () => {
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        toast.suceess("location fetched successfully");
        setQuery({
          
          lat: position.coords.latitude,
          lon: position.coords.longitude
        });
      });
    }
  }




  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-1/3 items-center justify-center space-x-4">
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleCity()}
          type="text"
          className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
          placeholder="Search for city"
        />
        <UilSearch
          size={23}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handleCity}
        />
        <UilLocationPoint
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handleLocationClick}
        />
      </div>
      <div className="flex flex-row w-1/4 items-center justify-center">
        <button name="metric" 
        onClick={handleUnitsChange}
        className="text-xl text-white font-light focus:bg-green-400 hover:scale-125 transition ease-out">
          °C
        </button>
        <p className="text-xl text-white mx-1">|</p>
        <button name="imperial" 
        onClick={handleUnitsChange}
        className="text-xl text-white font-light hover:scale-125 transition ease-out " >
          °F
        </button>
      </div>
    </div>
  );
}

export default input;
