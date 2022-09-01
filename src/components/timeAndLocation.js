import React from 'react';
import { formatToLocalTime } from '../services/weatherService';


function timeAndLocation({weather:{ dt, timezone,name,country}}) {
  return (
    <div>
        <div className="flex item-center justify-center">
            <p className="text-xl text-white font-extralight my-6">{formatToLocalTime(dt, timezone)}</p>
        </div>
        <div className="flex items-center justify-center">
            <p className="text-3xl text-white font-medium my-3">{name}, {country}</p>
        </div>
    </div>
  )
}

export default timeAndLocation;