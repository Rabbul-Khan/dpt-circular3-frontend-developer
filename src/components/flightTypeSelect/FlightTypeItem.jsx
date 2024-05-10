const FlightTypeItem = ({ tripTitle, tripType, setTripType }) => {
  return (
    <div
      className={`border border-blue-950 px-3 py-1 cursor-pointer ${
        tripType === tripTitle ? 'bg-blue-950 text-white' : ''
      }`}
      onClick={() => setTripType(tripTitle)}
    >
      {tripTitle}
    </div>
  );
};

export default FlightTypeItem;
