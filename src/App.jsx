import Header from './components/header/Header';
import FlightTypeSelect from './components/flightTypeSelect/FlightTypeSelect';

function App() {
  return (
    <>
      <Header />

      <h1 className="text-3xl font-bold mx-40 my-3">Master Price</h1>
      <hr />

      <FlightTypeSelect />
      <hr className="bg-blue-500 mx-40 h-[2px]" />
    </>
  );
}

export default App;
