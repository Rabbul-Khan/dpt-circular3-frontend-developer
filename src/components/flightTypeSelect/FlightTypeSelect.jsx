import { useState } from 'react';
import FlightTypeItem from './FlightTypeItem';

const FlightTypeSelect = () => {
  const [tripType, setTripType] = useState('One Way');
  return (
    <div className="flex justify-center my-5 font-semibold">
      <FlightTypeItem
        tripTitle="Round Trip"
        tripType={tripType}
        setTripType={setTripType}
      />
      <FlightTypeItem
        tripTitle="One Way"
        tripType={tripType}
        setTripType={setTripType}
      />
      <FlightTypeItem
        tripTitle="Multi City"
        tripType={tripType}
        setTripType={setTripType}
      />
    </div>
  );
};

export default FlightTypeSelect;
