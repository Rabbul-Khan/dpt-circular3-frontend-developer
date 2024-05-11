import { useState } from 'react';

import Header from './components/header/Header';
import FlightTypeSelect from './components/flightTypeSelect/FlightTypeSelect';
import FlightTable from './components/FlightTable';
import SearchForm from './components/SearchForm';

function App() {
  const [flights, setFlights] = useState();
  const [notification, setNotification] = useState('');

  // Functionality for retrieving flights data from the database.
  const fetchFlights = async () => {
    try {
      const file = await fetch('../../data/LHR_CDG_ADT1_TYPE_1.txt');
      const text = await file.text();
      const parsedFlights = JSON.parse(text);
      setFlights(parsedFlights);
      setNotification(parsedFlights.message);
    } catch (error) {
      console.error('Error fetching data:', error);
      setNotification('Data parse unsuccesful');
      throw error;
    }
  };

  return (
    <>
      <Header />

      <h1 className="my-3 text-2xl font-bold lg:text-3xl lg:mx-10 xl:mx-40">
        Master Price
      </h1>
      <hr />

      <FlightTypeSelect />
      <hr className="bg-blue-500 lg:mx-10 xl:mx-40 h-[2px]" />

      <SearchForm fetchFlights={fetchFlights} />
      <hr className="bg-blue-500  h-[2px] lg:mx-10 xl:mx-40" />

      <p className="py-3 font-medium lg:mx-10 xl:mx-40">{notification}</p>

      <FlightTable flights={flights} />
    </>
  );
}

export default App;
