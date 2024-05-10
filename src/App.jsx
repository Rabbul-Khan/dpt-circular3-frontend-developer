import Header from './components/header/Header';
import FlightTypeSelect from './components/flightTypeSelect/FlightTypeSelect';

import { useEffect, useState } from 'react';
import FlightTable from './components/FlightTable';

function App() {
  const [flights, setFlights] = useState();

  useEffect(() => {
    const fetchFlights = async () => {
      const file = await fetch('../../data/LHR_CDG_ADT1_TYPE_1.txt');
      const text = await file.text();
      const parsedFlights = JSON.parse(text);
      setFlights(parsedFlights);
      console.log(parsedFlights);
    };
    fetchFlights();
  }, []);
  return (
    <>
      <Header />

      <h1 className="text-3xl font-bold mx-40 my-3">Master Price</h1>
      <hr />

      <FlightTypeSelect />
      <hr className="bg-blue-500 mx-40 h-[2px]" />

      {/* <Form className="mx-40 my-3 flex gap-2">
        <Input
          placeholder="LHR"
          className="border border-black  px-3 py-1 max-w-36"
          required
        />

        <Input
          placeholder="CDG"
          className="border border-black px-3 py-1 max-w-36"
        />
        <hr className="bg-blue-500 mx-40 h-[2px]" />
        <Button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Submit
        </Button>
      </Form> */}
      <FlightTable flights={flights} />
    </>
  );
}

export default App;
