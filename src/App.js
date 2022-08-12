
import UilReact from '@iconscout/react-unicons/icons/uil-react';
import Input from './components/input';
import TopButton from './components/TopButton';
import TimeAndLocation from './components/timeAndLocation';
import Tsssssssssssemperature from './components/temperature';
import './App.css';
import Temperature from './components/temperature';

function App() {
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br
     from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
        < TopButton />
        < Input />
        < TimeAndLocation />
        < Temperature />
    </div>
  );
}

export default App;
  