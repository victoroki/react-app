import UilReact from '@iconscout/react-unicons/icons/uil-react';
import React from 'react';

export default function TopButton({setQuery}) {

    const cities = [
        {
            id: 1,
            title: "Kenya"
        },
        {
            id: 2,
            title: "London"
        },
        {
            id: 3,
            title: "Tokyo"
        },
        {
            id: 4,
            title: "Paris"
        },
        {
            id: 5,
            title: "New york"
        }
    ]
    return <div className="flex items-center justify-around my-6">
        {cities.map((city) => (
            <button key={city.id} className="text-white text-lg font-medium" 
            onClick={()=> setQuery({q: city.title})} >
                {city.title}
            </button>
        ))}
    </div>
}
